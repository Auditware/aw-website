import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { load } from 'cheerio';
import Ajv from 'ajv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = join(__dirname, '..', 'dist');

// Configuration that should match your site
const SITE_CONFIG = {
  siteUrl: 'https://auditware.io',
  siteName: 'Auditware',
  twitterHandle: '@auditware',
  socialProfiles: [
    'https://twitter.com/auditware',
    'https://linkedin.com/company/auditware'
  ],
  foundingDate: '2020',
  requiredPages: ['index.html', 'about', 'audits', 'sentry']
};

let exitCode = 0;
let warnings = [];

function fail(message) {
  console.error(`❌ ${message}`);
  exitCode = 1;
}

function pass(message) {
  console.log(`✅ ${message}`);
}

function warn(message) {
  console.warn(`⚠️  ${message}`);
  warnings.push(message);
}

function section(title) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  ${title}`);
  console.log('='.repeat(60));
}

// Get all HTML files from dist
function getHtmlFiles(dir = distPath) {
  const files = [];
  const items = readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = join(dir, item.name);
    if (item.isDirectory() && !item.name.startsWith('_')) {
      files.push(...getHtmlFiles(fullPath));
    } else if (item.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Test 1: Build artifacts exist
function testBuildArtifacts() {
  section('Build Artifacts');
  
  if (!existsSync(distPath)) {
    fail('dist directory does not exist. Run "npm run build" first.');
    process.exit(1);
  }
  pass('dist directory exists');
  
  // Check for sitemap
  if (existsSync(join(distPath, 'sitemap-index.xml'))) {
    pass('sitemap-index.xml exists');
  } else {
    fail('sitemap-index.xml is missing');
  }
  
  // Check for robots.txt
  if (existsSync(join(distPath, 'robots.txt'))) {
    pass('robots.txt exists');
    const robotsTxt = readFileSync(join(distPath, 'robots.txt'), 'utf-8');
    if (robotsTxt.includes('Sitemap:')) {
      pass('robots.txt contains sitemap reference');
    } else {
      fail('robots.txt missing sitemap reference');
    }
  } else {
    fail('robots.txt is missing');
  }
  
  // Check for required pages
  for (const page of SITE_CONFIG.requiredPages) {
    const pagePath = page === 'index.html' 
      ? join(distPath, 'index.html')
      : join(distPath, page, 'index.html');
    
    if (existsSync(pagePath)) {
      pass(`Required page exists: ${page}`);
    } else {
      fail(`Required page missing: ${page}`);
    }
  }
}

// Test 2: Meta tags
function testMetaTags(htmlPath, $) {
  const pageName = htmlPath.replace(distPath, '').replace(/\\/g, '/');
  console.log(`\nTesting: ${pageName}`);
  
  // Title
  const title = $('title').text();
  if (title && title.length > 0) {
    pass(`Title exists: "${title}"`);
    if (title.length > 60) {
      warn(`Title is long (${title.length} chars, recommended < 60)`);
    }
  } else {
    fail('Title is missing or empty');
  }
  
  // Meta description
  const description = $('meta[name="description"]').attr('content');
  if (description && description.length > 0) {
    pass(`Description exists (${description.length} chars)`);
    if (description.length > 160) {
      warn(`Description is long (${description.length} chars, recommended < 160)`);
    }
  } else {
    fail('Meta description is missing');
  }
  
  // Canonical URL
  const canonical = $('link[rel="canonical"]').attr('href');
  if (canonical) {
    pass(`Canonical URL: ${canonical}`);
    if (!canonical.startsWith(SITE_CONFIG.siteUrl)) {
      fail(`Canonical URL doesn't match site URL: ${canonical}`);
    }
  } else {
    fail('Canonical URL is missing');
  }
  
  // Open Graph tags
  const ogTitle = $('meta[property="og:title"]').attr('content');
  const ogDescription = $('meta[property="og:description"]').attr('content');
  const ogImage = $('meta[property="og:image"]').attr('content');
  const ogUrl = $('meta[property="og:url"]').attr('content');
  const ogType = $('meta[property="og:type"]').attr('content');
  const ogSiteName = $('meta[property="og:site_name"]').attr('content');
  const ogLocale = $('meta[property="og:locale"]').attr('content');
  
  if (ogTitle) pass('og:title exists');
  else fail('og:title is missing');
  
  if (ogDescription) pass('og:description exists');
  else fail('og:description is missing');
  
  if (ogImage) pass(`og:image exists: ${ogImage}`);
  else fail('og:image is missing');
  
  if (ogUrl) pass('og:url exists');
  else fail('og:url is missing');
  
  if (ogType === 'website') pass('og:type is "website"');
  else fail(`og:type should be "website", got: ${ogType}`);
  
  if (ogSiteName === SITE_CONFIG.siteName) pass('og:site_name matches config');
  else fail(`og:site_name should be "${SITE_CONFIG.siteName}", got: ${ogSiteName}`);
  
  if (ogLocale === 'en_US') pass('og:locale is set to "en_US"');
  else fail(`og:locale should be "en_US", got: ${ogLocale}`);
  
  // Twitter Card tags
  const twitterCard = $('meta[name="twitter:card"]').attr('content');
  const twitterSite = $('meta[name="twitter:site"]').attr('content');
  const twitterTitle = $('meta[name="twitter:title"]').attr('content');
  const twitterDescription = $('meta[name="twitter:description"]').attr('content');
  const twitterImage = $('meta[name="twitter:image"]').attr('content');
  
  if (twitterCard === 'summary_large_image') pass('twitter:card is "summary_large_image"');
  else fail(`twitter:card should be "summary_large_image", got: ${twitterCard}`);
  
  if (twitterSite === SITE_CONFIG.twitterHandle) pass(`twitter:site is ${SITE_CONFIG.twitterHandle}`);
  else fail(`twitter:site should be "${SITE_CONFIG.twitterHandle}", got: ${twitterSite}`);
  
  if (twitterTitle) pass('twitter:title exists');
  else fail('twitter:title is missing');
  
  if (twitterDescription) pass('twitter:description exists');
  else fail('twitter:description is missing');
  
  if (twitterImage) pass('twitter:image exists');
  else fail('twitter:image is missing');
}

// Test 3: Structured Data
function testStructuredData(htmlPath, $) {
  const ldJsonScripts = $('script[type="application/ld+json"]');
  
  if (ldJsonScripts.length === 0) {
    fail('No JSON-LD structured data found');
    return;
  }
  
  pass(`Found ${ldJsonScripts.length} JSON-LD script(s)`);
  
  ldJsonScripts.each((i, script) => {
    try {
      const data = JSON.parse($(script).html());
      const schemas = Array.isArray(data) ? data : [data];
      
      for (const schema of schemas) {
        if (schema['@type'] === 'Organization') {
          pass('Organization schema found');
          
          if (schema.name === SITE_CONFIG.siteName) {
            pass('Organization name matches config');
          } else {
            fail(`Organization name should be "${SITE_CONFIG.siteName}", got: ${schema.name}`);
          }
          
          if (schema.url === SITE_CONFIG.siteUrl) {
            pass('Organization URL matches config');
          } else {
            fail(`Organization URL should be "${SITE_CONFIG.siteUrl}", got: ${schema.url}`);
          }
          
          if (schema.foundingDate === SITE_CONFIG.foundingDate) {
            pass('Founding date matches config');
          } else {
            warn(`Founding date is "${schema.foundingDate}", expected "${SITE_CONFIG.foundingDate}"`);
          }
          
          if (schema.sameAs && schema.sameAs.length > 0) {
            pass(`Social profiles listed: ${schema.sameAs.length}`);
            for (const profile of SITE_CONFIG.socialProfiles) {
              if (schema.sameAs.includes(profile)) {
                pass(`✓ ${profile}`);
              } else {
                warn(`Social profile missing: ${profile}`);
              }
            }
          } else {
            warn('No social profiles in Organization schema');
          }
        } else if (schema['@type'] === 'WebSite') {
          pass('WebSite schema found');
        } else if (schema['@type'] === 'FAQPage') {
          pass('FAQPage schema found');
          if (schema.mainEntity && schema.mainEntity.length > 0) {
            pass(`${schema.mainEntity.length} FAQ items`);
          } else {
            fail('FAQPage schema has no questions');
          }
        } else if (schema['@type'] === 'BreadcrumbList') {
          pass('BreadcrumbList schema found');
        }
      }
    } catch (e) {
      fail(`Invalid JSON-LD: ${e.message}`);
    }
  });
}

// Test 4: Images
function testImages(htmlPath, $) {
  const images = $('img');
  let missingAltCount = 0;
  let totalImages = 0;
  
  images.each((i, img) => {
    totalImages++;
    const alt = $(img).attr('alt');
    const src = $(img).attr('src');
    
    if (!alt && alt !== '') {
      missingAltCount++;
      warn(`Image missing alt text: ${src}`);
    }
  });
  
  if (totalImages > 0) {
    if (missingAltCount === 0) {
      pass(`All ${totalImages} images have alt text`);
    } else {
      fail(`${missingAltCount}/${totalImages} images missing alt text`);
    }
  }
  
  // Check for lazy loading
  const lazyImages = $('img[loading="lazy"]').length;
  const eagerImages = $('img[loading="eager"]').length;
  
  if (lazyImages > 0) {
    pass(`${lazyImages} images use lazy loading`);
  }
  if (eagerImages > 0) {
    pass(`${eagerImages} images use eager loading (above fold)`);
  }
}

// Test 5: Performance
function testPerformance(htmlPath, $) {
  // Check for font preconnect
  const fontPreconnect = $('link[rel="preconnect"][href*="fonts"]').length;
  if (fontPreconnect > 0) {
    pass('Font preconnect configured');
  } else {
    warn('No font preconnect found');
  }
  
  // Check for inline critical CSS (presence of <style> tags)
  const inlineStyles = $('style').length;
  if (inlineStyles > 0) {
    pass(`${inlineStyles} inline style blocks (component styles)`);
  }
}

// Test 6: Accessibility
function testAccessibility(htmlPath, $) {
  // Lang attribute
  const lang = $('html').attr('lang');
  if (lang) {
    pass(`HTML lang attribute: ${lang}`);
  } else {
    fail('HTML lang attribute is missing');
  }
  
  // Viewport meta
  const viewport = $('meta[name="viewport"]').attr('content');
  if (viewport) {
    pass('Viewport meta tag exists');
  } else {
    fail('Viewport meta tag is missing');
  }
  
  // Check for heading hierarchy
  const h1Count = $('h1').length;
  if (h1Count === 1) {
    pass('Exactly one h1 tag');
  } else if (h1Count === 0) {
    fail('No h1 tag found');
  } else {
    warn(`Multiple h1 tags found: ${h1Count}`);
  }
}

// Test 7: Internal Linking
function testInternalLinking(htmlPath, $) {
  const internalLinks = $('a[href^="/"]').length;
  const externalLinks = $('a[href^="http"]').length;
  
  if (internalLinks > 0) {
    pass(`${internalLinks} internal links found`);
  } else {
    warn('No internal links found');
  }
  
  // Check for noopener on external links
  const externalWithoutNoopener = $('a[href^="http"][target="_blank"]:not([rel*="noopener"])').length;
  if (externalWithoutNoopener > 0) {
    warn(`${externalWithoutNoopener} external links missing rel="noopener"`);
  } else if (externalLinks > 0) {
    pass('All external links have proper rel attributes');
  }
}

// Main test runner
function runTests() {
  console.log('\n🔍 Running SEO Validation Tests\n');
  
  // Test 1: Build artifacts
  testBuildArtifacts();
  
  // Get all HTML files
  const htmlFiles = getHtmlFiles();
  console.log(`\nFound ${htmlFiles.length} HTML files to test`);
  
  // Test each HTML file
  section('Testing HTML Pages');
  
  for (const htmlPath of htmlFiles) {
    const html = readFileSync(htmlPath, 'utf-8');
    const $ = load(html);
    
    testMetaTags(htmlPath, $);
    testStructuredData(htmlPath, $);
    testImages(htmlPath, $);
    testPerformance(htmlPath, $);
    testAccessibility(htmlPath, $);
    testInternalLinking(htmlPath, $);
  }
  
  // Summary
  section('Test Summary');
  if (exitCode === 0) {
    console.log('✅ All SEO tests passed!');
  } else {
    console.log('❌ Some SEO tests failed. Please review the output above.');
  }
  
  // Display warnings summary
  if (warnings.length > 0) {
    console.log(`\n⚠️  ${warnings.length} Warning(s):`);
    warnings.forEach((warning, index) => {
      console.log(`  ${index + 1}. ${warning}`);
    });
    console.log('\n💡 Warnings do not fail the build but should be reviewed.\n');
  } else {
    console.log('✨ No warnings found!\n');
  }
  
  process.exit(exitCode);
}

// Run tests
runTests();


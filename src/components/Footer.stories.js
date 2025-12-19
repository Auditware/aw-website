// Import CSS for styling
import '../styles/tokens.css';
import '../styles/global.css';

// Define the default export with metadata about the component
export default {
  title: 'Pages/All Pages/Footer',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  argTypes: {
    logo: {
      control: { type: 'object' },
    },
    tagline: {
      control: { type: 'text' },
    },
    sections: {
      control: { type: 'object' },
    },
  },
};

// Template function to create component HTML
const Template = ({ 
  logo = {
    src: "/images/Logo-hi-vis.png",
    alt: "Auditware Logo",
    width: 182
  },
  tagline = "Leading security platform and auditing firm",
  sections = [
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about-us" },
        { text: "Press", href: "/press" },
        { text: "Tools", href: "/tools" },
        { text: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Contact us",
      links: [
        { text: "Discord", href: "https://discord.gg/wefVH8NYbb", external: true },
        { text: "Twitter", href: "https://twitter.com/audit_wizard", external: true },
        { text: "LinkedIn", href: "https://www.linkedin.com/company/auditwareio/", external: true }
      ]
    }
  ],
  ...args 
}) => {
  return `
    <footer class="footer section">
      <div class="container">
        <div class="footer-wrapper">
          <a href="/" class="footer-brand">
            <img 
              src="${logo.src}" 
              loading="lazy" 
              width="${logo.width}" 
              alt="${logo.alt}" 
              class="footer-brand-image" 
            />
            <div class="footer-paragraph-holder">
              <p class="paragraph-26">${tagline}</p>
            </div>
          </a>
          <div class="footer-content">
            ${sections.map(section => `
              <div class="footer-block">
                <div class="title-small">${section.title}</div>
                ${section.links.map(link => `
                  <a 
                    href="${link.href}" 
                    class="footer-link"
                    ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
                  >
                    ${link.text}
                  </a>
                `).join('')}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </footer>

    <style>
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }
      
      .footer {
        padding: 64px 0;
        background: #000000;
        border-top: 1px solid #333333;
      }
      
      .footer-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 48px;
      }
      
      .footer-brand {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-decoration: none;
        max-width: 300px;
      }
      
      .footer-brand-image {
        height: auto;
        margin-bottom: 16px;
      }
      
      .footer-paragraph-holder {
        width: 100%;
      }
      
      .paragraph-26 {
        color: #a0a0a0;
        font-size: 1rem;
        line-height: 1.6;
        margin: 0;
      }
      
      .footer-content {
        display: flex;
        gap: 48px;
        flex: 1;
        justify-content: flex-end;
      }
      
      .footer-block {
        display: flex;
        flex-direction: column;
        gap: 16px;
        min-width: 120px;
      }
      
      .title-small {
        font-size: 0.875rem;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .footer-link {
        color: #a0a0a0;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s ease;
      }
      
      .footer-link:hover {
        color: #4f63ff;
      }
      
      @media (max-width: 991px) {
        .footer-wrapper {
          flex-direction: column;
          gap: 32px;
          text-align: center;
        }
        
        .footer-brand {
          align-items: center;
          max-width: none;
        }
        
        .footer-content {
          justify-content: center;
          gap: 32px;
        }
      }
      
      @media (max-width: 479px) {
        .footer-content {
          flex-direction: column;
          gap: 24px;
        }
        
        .footer-block {
          text-align: center;
        }
      }
    </style>
  `;
};

// Story variations
export const Default = Template.bind({});
Default.args = {};

export const MinimalFooter = Template.bind({});
MinimalFooter.args = {
  tagline: "Security platform for Web3",
  sections: [
    {
      title: "Contact",
      links: [
        { text: "Discord", href: "https://discord.gg/wefVH8NYbb", external: true },
        { text: "Twitter", href: "https://twitter.com/audit_wizard", external: true }
      ]
    }
  ]
};

export const ExtendedFooter = Template.bind({});
ExtendedFooter.args = {
  tagline: "Comprehensive security solutions for Web3 organizations worldwide",
  sections: [
    {
      title: "Services",
      links: [
        { text: "OpSec Audits", href: "/audit-wizard" },
        { text: "Sentry Platform", href: "/sentry" },
        { text: "Smart Contract Audits", href: "/smart-contracts" },
        { text: "Infrastructure Security", href: "/infrastructure" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about-us" },
        { text: "Press", href: "/press" },
        { text: "Tools", href: "/tools" },
        { text: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Documentation", href: "/docs" },
        { text: "API Reference", href: "/api" },
        { text: "Security Standards", href: "/standards" },
        { text: "Support", href: "/support" }
      ]
    },
    {
      title: "Connect",
      links: [
        { text: "Discord", href: "https://discord.gg/wefVH8NYbb", external: true },
        { text: "Twitter", href: "https://twitter.com/audit_wizard", external: true },
        { text: "LinkedIn", href: "https://www.linkedin.com/company/auditwareio/", external: true },
        { text: "GitHub", href: "https://github.com/auditware", external: true }
      ]
    }
  ]
};

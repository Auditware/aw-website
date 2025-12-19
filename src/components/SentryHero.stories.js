// Import CSS for styling
import '../styles/tokens.css';
import '../styles/global.css';

// Define the default export with metadata about the component
export default {
  title: 'Pages/Sentry/SentryHero',
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
    title: {
      control: { type: 'text' },
    },
    disclaimer: {
      control: { type: 'text' },
    },
    ctaText: {
      control: { type: 'text' },
    },
    ctaHref: {
      control: { type: 'text' },
    },
  },
};

// Template function to create component HTML
const Template = ({ 
  title = "Sentry",
  disclaimer = "Built by Apple security alumni to follow industry leading best practices.",
  ctaText = "Join the waitlist",
  ctaHref = "/sentry-waitlist",
  heroImage = "/images/Frame-1.png",
  heroImageAlt = "Sentry Platform Interface",
  ...args 
}) => {
  return `
    <div class="section grey-section">
      <div class="sentry-page-bg">
        <div class="sentry-header">
          <img 
            width="280" 
            alt="Sentry Logo" 
            src="/images/Sentry-logo.png" 
            loading="lazy" 
            class="sentry-logo-header-png"
          />
        </div>
        
        <div class="text-block-9">
          The human element is your weakest point of security. <strong class="bold-text-6">${title}</strong> helps you protect your people, accounts, and devices, and keeps watch over your organization to detect compromise at all levels. <code>${disclaimer}</code>
        </div>
        
        <a href="${ctaHref}" class="button-3-copy">${ctaText}</a>
        
        <div class="sentry-main-image">
          <img 
            width="800" 
            height="Auto" 
            alt="${heroImageAlt}" 
            src="${heroImage}" 
            loading="lazy" 
            class="sentry-main-image-png"
          />
        </div>
      </div>
    </div>

    <style>
      .section {
        position: relative;
      }

      .grey-section {
        background: #111111;
        padding: 0;
      }

      .sentry-page-bg {
        padding: 80px 20px;
        text-align: center;
        max-width: 1200px;
        margin: 0 auto;
      }

      .sentry-header {
        margin-bottom: 48px;
      }

      .sentry-logo-header-png {
        max-width: 100%;
        height: auto;
      }

      .text-block-9 {
        font-size: 1.25rem;
        color: #a0a0a0;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto 40px auto;
      }

      .bold-text-6 {
        color: #4f63ff;
        font-weight: bold;
      }

      code {
        background: rgba(79, 99, 255, 0.1);
        color: #4f63ff;
        padding: 2px 8px;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
      }

      .button-3-copy {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: linear-gradient(135deg, #4f63ff 0%, #8c83b2 100%);
        border: none;
        border-radius: 12px;
        padding: 16px 32px;
        font-size: 1.125rem;
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-bottom: 64px;
      }

      .button-3-copy:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(79, 99, 255, 0.4);
      }

      .sentry-main-image {
        max-width: 100%;
        display: flex;
        justify-content: center;
      }

      .sentry-main-image-png {
        max-width: 100%;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      }

      @media (max-width: 767px) {
        .sentry-logo-header-png {
          width: 200px;
        }

        .text-block-9 {
          font-size: 1.125rem;
        }

        .sentry-page-bg {
          padding: 60px 20px;
        }
      }
    </style>
  `;
};

// Used on website - Sentry page
export const SentryPageHero = Template.bind({});
SentryPageHero.args = {};

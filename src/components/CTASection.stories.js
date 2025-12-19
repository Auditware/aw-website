// Import CSS for styling
import '../styles/tokens.css';
import '../styles/global.css';

// Define the default export with metadata about the component
export default {
  title: 'Pages/Home/CTASection',
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
    description: {
      control: { type: 'text' },
    },
    primaryCta: {
      control: { type: 'object' },
    },
    secondaryCta: {
      control: { type: 'object' },
    },
    disclaimer: {
      control: { type: 'text' },
    },
  },
};

// Template function to create component HTML
const Template = ({ 
  title = "Secure Your Organization Today",
  description = "Don't wait for a security incident. Get comprehensive OpSec audits and monitoring from industry experts with proven experience protecting leading Web3 organizations.",
  primaryCta = {
    text: "Request Security Audit",
    href: "/request-an-audit"
  },
  secondaryCta = {
    text: "Learn About Sentry",
    href: "/sentry"
  },
  disclaimer = "Free consultation • W3OS & SEAL compliant • Enterprise-grade security",
  ...args 
}) => {
  return `
    <section class="cta-section section">
      <div class="container">
        <div class="cta-content text-center">
          <h2 class="h2 cta-title">
            ${title}
          </h2>
          <p class="body-large cta-description">
            ${description}
          </p>
          <div class="cta-buttons flex gap-4 justify-center">
            <a href="${primaryCta.href}" class="btn btn-primary btn-lg">
              ${primaryCta.text}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            ${secondaryCta ? `
              <a href="${secondaryCta.href}" class="btn btn-secondary btn-lg">
                ${secondaryCta.text}
              </a>
            ` : ''}
          </div>
          ${disclaimer ? `
            <p class="body-small cta-disclaimer">
              ${disclaimer}
            </p>
          ` : ''}
        </div>
      </div>
    </section>

    <style>
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }
      
      .cta-section {
        padding: 96px 0;
        background: #000000;
        background-image: radial-gradient(ellipse at center, rgba(79, 99, 255, 0.05) 0%, transparent 50%);
      }
      
      .cta-content {
        max-width: 800px;
        margin: 0 auto;
      }
      
      .cta-title {
        margin-bottom: 24px;
        color: #ffffff;
        background: linear-gradient(135deg, #ffffff 0%, #4f63ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-size: 3rem;
        font-weight: bold;
      }
      
      .cta-description {
        margin-bottom: 40px;
        color: #a0a0a0;
        line-height: 1.6;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        font-size: 1.125rem;
      }
      
      .cta-buttons {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 24px;
      }
      
      .cta-disclaimer {
        color: #a0a0a0;
        opacity: 0.8;
        font-size: 0.875rem;
      }
      
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 16px 24px;
        border-radius: 12px;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.3s ease;
        cursor: pointer;
        border: none;
        font-family: inherit;
      }
      
      .btn-primary {
        background: linear-gradient(135deg, #4f63ff 0%, #8c83b2 100%);
        color: white;
        box-shadow: 0 2px 10px rgba(79, 99, 255, 0.3);
      }
      
      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(79, 99, 255, 0.4);
      }
      
      .btn-secondary {
        background: transparent;
        color: #ffffff;
        border: 1px solid #333333;
      }
      
      .btn-secondary:hover {
        background: #111111;
        border-color: #4f63ff;
      }
      
      .btn-lg {
        padding: 16px 32px;
        font-size: 1.125rem;
      }
      
      .btn svg {
        width: 16px;
        height: 16px;
      }
      
      @media (max-width: 767px) {
        .cta-buttons {
          flex-direction: column;
          align-items: center;
        }
        
        .btn {
          width: 100%;
          max-width: 300px;
          justify-content: center;
        }
        
        .cta-title {
          font-size: 2.5rem;
        }
      }
    </style>
  `;
};

// Story variations
export const Default = Template.bind({});
Default.args = {};

export const SingleButton = Template.bind({});
SingleButton.args = {
  title: "Ready to Get Started?",
  description: "Join hundreds of organizations already protected by our security platform.",
  primaryCta: {
    text: "Start Free Trial",
    href: "/signup"
  },
  secondaryCta: null,
  disclaimer: "No credit card required • 14-day free trial"
};

export const ContactFocus = Template.bind({});
ContactFocus.args = {
  title: "Let's Secure Your Organization",
  description: "Schedule a consultation with our security experts to discuss your specific needs and requirements.",
  primaryCta: {
    text: "Schedule Consultation",
    href: "/contact"
  },
  secondaryCta: {
    text: "View Our Services",
    href: "/services"
  },
  disclaimer: "Free 30-minute consultation • Custom security roadmap • No commitment required"
};

export const EmergencyResponse = Template.bind({});
EmergencyResponse.args = {
  title: "Security Incident Response",
  description: "Experiencing a security incident? Our emergency response team is available 24/7 to help contain and resolve critical security issues.",
  primaryCta: {
    text: "Emergency Hotline",
    href: "tel:+1-800-SECURITY"
  },
  secondaryCta: {
    text: "Submit Incident Report",
    href: "/incident-report"
  },
  disclaimer: "24/7 availability • Immediate response • Crisis management support"
};

export const ProductLaunch = Template.bind({});
ProductLaunch.args = {
  title: "Introducing Sentry 2.0",
  description: "Our next-generation security monitoring platform with enhanced AI-powered threat detection and real-time response capabilities.",
  primaryCta: {
    text: "Try Sentry 2.0",
    href: "/sentry-v2"
  },
  secondaryCta: {
    text: "Watch Demo",
    href: "/demo"
  },
  disclaimer: "Early access available • Advanced features • Priority support included"
};

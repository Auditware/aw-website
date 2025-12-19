// Import CSS for styling
import '../styles/tokens.css';
import '../styles/global.css';

// Define the default export with metadata about the component
export default {
  title: 'Pages/Home/FrameworksSection',
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
    frameworks: {
      control: { type: 'object' },
    },
  },
};

// Template function to create component HTML
const Template = ({ 
  title = "Built on Industry Standards",
  frameworks = [
    {
      name: "W3OS Framework",
      logo: "/images/W3OS-Graphic.png",
      logoAlt: "W3OS Logo",
      description: "The Web3 Operational Security Standard (W3OS) provides comprehensive guidelines for operational security in decentralized organizations. We ensure full compliance with W3OS requirements, covering everything from key management to social engineering prevention.",
      linkText: "View Standard →",
      linkHref: "https://github.com/W3OSC/web3-opsec-standard"
    },
    {
      name: "SEAL Certification",
      logo: "/images/framework-logomark-circle-blue.svg",
      logoAlt: "SEAL Logo",
      description: "Security Alliance's SEAL (Security Engineering and Auditing Language) framework ensures systematic security assessment. Our audits follow SEAL methodology for consistent, thorough evaluation of your organization's security posture.",
      linkText: "Learn More →",
      linkHref: "https://frameworks.securityalliance.org/"
    }
  ],
  ...args 
}) => {
  return `
    <section class="frameworks-section section-sm">
      <div class="container">
        <div class="frameworks-content text-center">
          <h2 class="h3 frameworks-title">${title}</h2>
          <div class="frameworks-grid">
            ${frameworks.map(framework => `
              <div class="framework-card">
                <div class="framework-header">
                  <img 
                    src="${framework.logo}" 
                    alt="${framework.logoAlt}" 
                    class="framework-logo" 
                  />
                  <h3 class="h5">${framework.name}</h3>
                </div>
                <p class="body-base">
                  ${framework.description}
                </p>
                ${framework.linkHref ? `
                  <a href="${framework.linkHref}" class="btn btn-ghost btn-sm" target="_blank">
                    ${framework.linkText || "Learn More →"}
                  </a>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <style>
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }
      
      .frameworks-section {
        padding: 80px 0;
        background: #000000;
      }
      
      .frameworks-content {
        max-width: 1000px;
        margin: 0 auto;
      }
      
      .frameworks-title {
        margin-bottom: 48px;
        color: #ffffff;
        font-size: 2rem;
        font-weight: bold;
      }
      
      .frameworks-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 32px;
        justify-items: center;
      }
      
      .framework-card {
        background: #111111;
        border: 1px solid #333333;
        border-radius: 12px;
        padding: 32px;
        text-align: center;
        max-width: 500px;
        width: 100%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .framework-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      }
      
      .framework-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 24px;
      }
      
      .framework-logo {
        width: 60px;
        height: 60px;
        margin-bottom: 16px;
      }
      
      .framework-header h3 {
        color: #ffffff;
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
      }
      
      .framework-card p {
        color: #a0a0a0;
        line-height: 1.6;
        margin-bottom: 24px;
        font-size: 1rem;
      }
      
      .btn-ghost {
        background: transparent;
        border: 1px solid #4f63ff;
        color: #4f63ff;
        padding: 8px 16px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.3s ease;
        display: inline-block;
        font-size: 0.875rem;
      }
      
      .btn-ghost:hover {
        background: #4f63ff;
        color: #000000;
      }
      
      @media (max-width: 991px) {
        .frameworks-grid {
          grid-template-columns: 1fr;
          max-width: 500px;
          margin: 0 auto;
        }
      }
      
      @media (max-width: 479px) {
        .framework-card {
          padding: 24px;
        }
        
        .framework-logo {
          width: 50px;
          height: 50px;
        }
        
        .frameworks-grid {
          grid-template-columns: 1fr;
          min-width: auto;
        }
      }
    </style>
  `;
};

// Story variations
export const Default = Template.bind({});
Default.args = {};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: "Security Standards & Certifications",
};

export const SingleFramework = Template.bind({});
SingleFramework.args = {
  title: "Our Primary Standard",
  frameworks: [
    {
      name: "W3OS Framework",
      logo: "/images/W3OS-Graphic.png",
      logoAlt: "W3OS Logo",
      description: "The Web3 Operational Security Standard (W3OS) provides comprehensive guidelines for operational security in decentralized organizations.",
      linkText: "View Standard →",
      linkHref: "https://github.com/W3OSC/web3-opsec-standard"
    }
  ]
};

export const MultipleFrameworks = Template.bind({});
MultipleFrameworks.args = {
  title: "Industry Standards We Follow",
  frameworks: [
    {
      name: "W3OS Framework",
      logo: "/images/W3OS-Graphic.png",
      logoAlt: "W3OS Logo",
      description: "Comprehensive Web3 operational security guidelines.",
      linkText: "View Standard →",
      linkHref: "https://github.com/W3OSC/web3-opsec-standard"
    },
    {
      name: "SEAL Certification",
      logo: "/images/framework-logomark-circle-blue.svg",
      logoAlt: "SEAL Logo",
      description: "Systematic security assessment methodology.",
      linkText: "Learn More →",
      linkHref: "https://frameworks.securityalliance.org/"
    },
    {
      name: "SOC 2 Type II",
      logo: "/images/framework-logomark-circle-blue.svg",
      logoAlt: "SOC 2 Logo",
      description: "Enterprise-grade security and availability controls.",
      linkText: "View Details →",
      linkHref: "#"
    }
  ]
};

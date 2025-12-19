// Import CSS for styling
import '../styles/tokens.css';
import '../styles/global.css';

// Define the default export with metadata about the component
export default {
  title: 'Pages/Request an Audit/AuditBreakdown',
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
    experience: {
      control: { type: 'object' },
    },
    trustedBy: {
      control: { type: 'object' },
    },
    services: {
      control: { type: 'object' },
    },
  },
};

// Template function to create component HTML
const Template = ({ 
  experience = [
    "Operational Security Audits & Consulting",
    "Smart Contract Audits (Solidity & Rust)",
    "L1/L2 Security Reviews",
    "Mobile App Security Audits",
    "Infrastructure Security Audits",
    "Web2 Penetration Testing"
  ],
  trustedBy = [
    { name: "Corn", logo: "/images/Corn-red.png" },
    { name: "Floa", logo: "/images/floa-redd.png" },
    { name: "Spling", logo: "/images/spling.png" },
    { name: "UDdd", logo: "/images/UDdd.png" }
  ],
  services = [
    {
      title: "OpSec Audits",
      primary: true,
      features: [
        "- Code & DevOps",
        "- Secure Communication",
        "- Wallets & Multi-sig",
        "- Endpoints / Devices",
        "- Training & Incident Response"
      ],
      tools: {
        title: "Powered by custom Tools",
        features: [
          "- EDR for devices and servers",
          "- On-chain contract and multi-sig monitoring",
          "- Code repo anomaly detection",
          "- Front-end content monitoring"
        ]
      }
    },
    {
      title: "Web2 Security",
      features: [
        "- Cloud Infrastructure",
        "- Secure DevOps",
        "- Web App Security Review"
      ]
    },
    {
      title: "On-chain Audits",
      primary: true,
      features: [
        "- EVM smart contracts",
        "- Solana Rust Programs",
        "- Protocol security review",
        "- Static analysis scanning"
      ]
    }
  ],
  ...args 
}) => {
  return `
    <section class="audit-breakdown-section">
      <div class="audit-layout-wrapper">
        <div class="left-column">
          <h1 class="heading-21">
            <strong class="bold-text-7">Our Experience</strong>
          </h1>
          <div class="skills-list">
            ${experience.map(skill => `
              <div class="skill-tag">
                <div>${skill}</div>
              </div>
            `).join('')}
          </div>
          
          <h1 class="heading-28">
            <strong class="bold-text-8">Trusted By:</strong>
          </h1>
          <div class="client-list">
            ${trustedBy.map(client => `
              <img src="${client.logo}" loading="lazy" width="130" alt="${client.name}" class="client-png" />
            `).join('')}
          </div>
        </div>
        
        <div class="right-column-audit">
          <div class="div-block-11">
            <h1 class="heading-32">Security For Every Domain</h1>
            <a href="https://calendly.com/d/cnqr-49f-xdy/auditware-consultation" class="button-7">Contact Us</a>
          </div>
          
          <div class="div-block-10">
            ${services.map(service => `
              <div class="div-block-13">
                <h1 class="heading-37">
                  <strong class="${service.primary ? "bold-text-18" : "bold-text-19"}">${service.title}</strong>
                </h1>
                <div class="skills-list">
                  ${service.features.map(feature => `
                    <div class="skill-tag">
                      <div>${feature}</div>
                    </div>
                  `).join('')}
                </div>
                
                ${service.tools ? `
                  <h1 class="heading-40">${service.tools.title}</h1>
                  <div class="skills-list">
                    ${service.tools.features.map(tool => `
                      <div class="skill-tag">
                        <div>${tool}</div>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <style>
      .audit-breakdown-section {
        padding: 80px 0;
        background: #000000;
      }

      .audit-layout-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px;
        align-items: start;
      }

      .left-column {
        display: flex;
        flex-direction: column;
        gap: 32px;
      }

      .heading-21, .heading-28, .heading-32 {
        font-size: 2rem;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 24px;
      }

      .bold-text-7, .bold-text-8 {
        color: #4f63ff;
      }

      .skills-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .skill-tag {
        background: #111111;
        border: 1px solid #333333;
        border-radius: 8px;
        padding: 12px 16px;
        color: #ffffff;
        font-size: 1rem;
      }

      .client-list {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        align-items: center;
      }

      .client-png {
        height: 40px;
        width: auto;
        opacity: 0.8;
        transition: opacity 0.3s ease;
      }

      .client-png:hover {
        opacity: 1;
      }

      .right-column-audit {
        display: flex;
        flex-direction: column;
        gap: 32px;
      }

      .div-block-11 {
        text-align: center;
        padding: 32px;
        background: #111111;
        border: 1px solid #333333;
        border-radius: 16px;
      }

      .button-7 {
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
        margin-top: 16px;
      }

      .button-7:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(79, 99, 255, 0.4);
      }

      .div-block-10 {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
      }

      .div-block-13 {
        background: #111111;
        border: 1px solid #333333;
        border-radius: 16px;
        padding: 32px;
      }

      .heading-37, .heading-40 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 16px;
      }

      .heading-40 {
        font-size: 1.25rem;
        margin-top: 24px;
      }

      .bold-text-18, .bold-text-19 {
        color: #4f63ff;
      }

      @media (max-width: 991px) {
        .audit-layout-wrapper {
          grid-template-columns: 1fr;
          gap: 48px;
        }

        .div-block-10 {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 767px) {
        .heading-21, .heading-28, .heading-32 {
          font-size: 1.75rem;
        }

        .client-list {
          justify-content: center;
        }

        .audit-breakdown-section {
          padding: 60px 0;
        }
      }
    </style>
  `;
};

// Used on website - Request an Audit page
export const RequestAuditBreakdown = Template.bind({});
RequestAuditBreakdown.args = {};

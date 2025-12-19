// Import CSS for styling
import '../styles/tokens.css';
import '../styles/global.css';

// Define the default export with metadata about the component
export default {
  title: 'Pages/Home/ExpertiseSection',
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
    highlights: {
      control: { type: 'object' },
    },
    metrics: {
      control: { type: 'object' },
    },
  },
};

// Template function to create component HTML
const Template = ({ 
  title = "Proven Security Expertise",
  description = "Our security team brings over a decade of experience from leading technology companies including Apple and Amazon. We understand both traditional and Web3 security challenges.",
  highlights = [
    {
      title: "Primary Risk Vectors",
      description: "Credential compromise, social engineering, malware infection, blind signing, and insider threats"
    },
    {
      title: "Compromise Detection",
      description: "Average detection time reduced from days to minutes with our monitoring platform"
    },
    {
      title: "Industry Recognition",
      description: "Trusted by leading DeFi protocols and recognized security researchers"
    }
  ],
  metrics = [
    {
      title: "Threats Prevented",
      value: "2,847",
      trend: "+23% this month"
    },
    {
      title: "Response Time",
      value: "Less than 5min",
      trend: "Average alert response"
    },
    {
      title: "Uptime",
      value: "99.9%",
      trend: "Platform availability"
    }
  ],
  ...args 
}) => {
  return `
    <section class="expertise-section section-sm">
      <div class="container">
        <div class="expertise-content">
          <div class="expertise-grid">
            <div class="expertise-text">
              <h2 class="h3">${title}</h2>
              <p class="body-large expertise-description">
                ${description}
              </p>
              <div class="expertise-highlights">
                ${highlights.map(highlight => `
                  <div class="expertise-item">
                    <h4 class="h6">${highlight.title}</h4>
                    <p class="body-small">${highlight.description}</p>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="expertise-visual">
              <div class="expertise-metrics">
                ${metrics.map(metric => `
                  <div class="metric-card">
                    <div class="metric-title">${metric.title}</div>
                    <div class="metric-value">${metric.value}</div>
                    <div class="metric-trend">${metric.trend}</div>
                  </div>
                `).join('')}
              </div>
            </div>
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
      
      .expertise-section {
        padding: 80px 0;
        background: #111111;
      }
      
      .expertise-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px;
        align-items: center;
      }
      
      .expertise-text h2 {
        margin-bottom: 24px;
        color: #ffffff;
        font-size: 2rem;
        font-weight: bold;
      }
      
      .expertise-description {
        margin-bottom: 32px;
        color: #a0a0a0;
        line-height: 1.6;
        font-size: 1.125rem;
      }
      
      .expertise-highlights {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
      
      .expertise-item h4 {
        margin-bottom: 8px;
        color: #ffffff;
        font-size: 1rem;
        font-weight: 600;
      }
      
      .expertise-item p {
        color: #a0a0a0;
        line-height: 1.6;
        font-size: 0.875rem;
      }
      
      .expertise-metrics {
        display: grid;
        gap: 16px;
      }
      
      .metric-card {
        background: #000000;
        border: 1px solid #333333;
        border-radius: 12px;
        padding: 24px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .metric-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
      }
      
      .metric-title {
        font-size: 0.875rem;
        color: #a0a0a0;
        margin-bottom: 12px;
        font-weight: 500;
      }
      
      .metric-value {
        font-size: 1.5rem;
        font-weight: bold;
        color: #4f63ff;
        margin-bottom: 8px;
        line-height: 1.2;
      }
      
      .metric-trend {
        font-size: 0.75rem;
        color: #a0a0a0;
      }
      
      @media (max-width: 1199px) {
        .expertise-grid {
          grid-template-columns: 1fr;
          gap: 48px;
          text-align: center;
        }
        
        .expertise-metrics {
          max-width: 600px;
          margin: 0 auto;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }
      }
      
      @media (max-width: 767px) {
        .expertise-metrics {
          grid-template-columns: 1fr;
          max-width: 300px;
        }
        
        .expertise-highlights {
          text-align: left;
          max-width: 500px;
          margin: 0 auto;
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
  title: "Why Choose Auditware",
  description: "Industry-leading security expertise with a proven track record of protecting Web3 organizations worldwide."
};

export const TwoMetrics = Template.bind({});
TwoMetrics.args = {
  title: "Platform Performance",
  description: "Our monitoring platform delivers unmatched reliability and speed.",
  highlights: [
    {
      title: "Real-time Monitoring",
      description: "Continuous surveillance of your entire security posture"
    },
    {
      title: "Instant Alerts",
      description: "Immediate notifications when threats are detected"
    }
  ],
  metrics: [
    {
      title: "Response Time",
      value: "< 30 sec",
      trend: "Average detection"
    },
    {
      title: "Uptime",
      value: "99.99%",
      trend: "Platform reliability"
    }
  ]
};

export const CompanyStats = Template.bind({});
CompanyStats.args = {
  title: "Security Leadership",
  description: "Established security experts with deep experience in traditional and blockchain security.",
  highlights: [
    {
      title: "Enterprise Background",
      description: "Former security engineers from Apple, Amazon, and other tech leaders"
    },
    {
      title: "Web3 Specialists",
      description: "Deep understanding of DeFi protocols and smart contract security"
    },
    {
      title: "Active Research",
      description: "Continuous research into emerging threats and vulnerabilities"
    }
  ],
  metrics: [
    {
      title: "Years Experience",
      value: "10+",
      trend: "Combined team experience"
    },
    {
      title: "Clients Protected",
      value: "50+",
      trend: "Organizations secured"
    },
    {
      title: "Issues Found",
      value: "1,200+",
      trend: "Security vulnerabilities"
    },
    {
      title: "Zero Breaches",
      value: "100%",
      trend: "Client protection rate"
    }
  ]
};

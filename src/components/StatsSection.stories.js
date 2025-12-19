// Import CSS for styling
import '../styles/tokens.css';
import '../styles/global.css';

// Define the default export with metadata about the component
export default {
  title: 'Pages/Home/StatsSection',
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
    stats: {
      control: { type: 'object' },
    },
  },
};

// Template function to create component HTML
const Template = ({ 
  title = "Security by the Numbers",
  stats = [
    { number: "10+", label: "Years Experience" },
    { number: "100+", label: "Security Audits" },
    { number: "$50M+", label: "Assets Protected" },
    { number: "24/7", label: "Monitoring" }
  ],
  ...args 
}) => {
  return `
    <section class="stats-section section-sm">
      <div class="container">
        <div class="stats-content text-center">
          <h2 class="h3 stats-title">${title}</h2>
          <div class="stats">
            ${stats.map(stat => `
              <div class="stat">
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
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
      
      .stats-section {
        padding: 80px 0;
        background: #111111;
      }
      
      .stats-content {
        max-width: 800px;
        margin: 0 auto;
      }
      
      .stats-title {
        margin-bottom: 48px;
        color: #ffffff;
        font-size: 2rem;
        font-weight: bold;
      }
      
      .stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 32px;
        justify-items: center;
      }
      
      .stat {
        text-align: center;
      }
      
      .stat-number {
        font-size: 3rem;
        font-weight: 900;
        color: #4f63ff;
        line-height: 1;
        margin-bottom: 8px;
      }
      
      .stat-label {
        font-size: 1rem;
        color: #a0a0a0;
        font-weight: 500;
      }
      
      @media (max-width: 767px) {
        .stats {
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        
        .stat-number {
          font-size: 2.25rem;
        }
        
        .stat-label {
          font-size: 0.875rem;
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
  title: "Our Track Record",
};

export const CustomStats = Template.bind({});
CustomStats.args = {
  title: "Platform Metrics",
  stats: [
    { number: "99.9%", label: "Uptime" },
    { number: "500+", label: "Active Monitors" },
    { number: "2.5sec", label: "Avg Response" },
    { number: "0", label: "Data Breaches" }
  ]
};

export const MinimalStats = Template.bind({});
MinimalStats.args = {
  title: "Key Numbers",
  stats: [
    { number: "24/7", label: "Monitoring" },
    { number: "100%", label: "Coverage" }
  ]
};

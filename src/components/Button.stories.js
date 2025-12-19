// Import CSS for styling
import '../styles/tokens.css';
import '../styles/global.css';

// Define the default export with metadata about the component
export default {
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'navbar', 'video', 'white'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    text: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
  },
};

// Template function to create button HTML
const Template = ({ variant = 'primary', size = 'md', text = 'Button', href, ...args }) => {
  const classes = `button button--${variant} button--${size}`;
  
  const buttonHTML = href 
    ? `<a href="${href}" class="${classes}">${text}</a>`
    : `<button class="${classes}" type="button">${text}</button>`;

  return `
    <style>
      /* Button styles */
      .button {
        color: #fff;
        background-color: #6909e4;
        background-image: linear-gradient(0deg, #48378b 10%, #8c83b2);
        border: none;
        border-radius: var(--radius-sm, 8px);
        padding: 15px 25px;
        font-family: var(--font-mono, 'Courier New', monospace);
        font-size: var(--font-size-lg, 18px);
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
        transition: background-color var(--transition-base, 0.3s ease);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }

      .button:hover {
        background-color: #2a1e61;
      }

      .button--secondary {
        color: #fff;
        background-color: transparent;
        background-image: none;
        border: 1px solid #fff;
      }

      .button--secondary:hover {
        background-color: #3e4545;
      }

      .button--navbar {
        height: 32px;
        padding: 9px 24px;
        font-size: var(--font-size-base, 16px);
        line-height: 1;
      }

      .button--navbar:hover {
        background-color: #340972;
      }

      .button--video {
        background-color: #1c1c1c;
        background-image: url('../public/images/Video-Icon.svg');
        background-position: 91%;
        background-repeat: no-repeat;
        padding-left: 25px;
        padding-right: 50px;
      }

      .button--video:hover {
        background-color: #333;
      }

      .button--white {
        color: #000;
        background-color: #fff;
        background-image: none;
      }

      .button--white:hover {
        background-color: #b6b6b6;
      }

      .button--sm {
        padding: 8px 16px;
        font-size: var(--font-size-sm, 14px);
      }

      .button--md {
        padding: 12px 24px;
        font-size: var(--font-size-base, 16px);
      }

      .button--lg {
        padding: 15px 25px;
        font-size: var(--font-size-lg, 18px);
      }
    </style>
    ${buttonHTML}
  `;
};

// Used on website - Various pages
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  text: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  text: 'Secondary Button',
};

export const NavbarButton = Template.bind({});
NavbarButton.args = {
  variant: 'navbar',
  text: 'Navbar Button',
};

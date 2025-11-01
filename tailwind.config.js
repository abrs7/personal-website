/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* slate-700 */
        input: 'var(--color-input)', /* slate-800 */
        ring: 'var(--color-ring)', /* sky-500 */
        background: 'var(--color-background)', /* slate-900 */
        foreground: 'var(--color-foreground)', /* slate-50 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* sky-500 */
          foreground: 'var(--color-primary-foreground)' /* slate-50 */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* slate-500 */
          foreground: 'var(--color-secondary-foreground)' /* slate-50 */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-500 */
          foreground: 'var(--color-destructive-foreground)' /* slate-50 */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* slate-700 */
          foreground: 'var(--color-muted-foreground)' /* slate-400 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* emerald-500 */
          foreground: 'var(--color-accent-foreground)' /* slate-50 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* slate-800 */
          foreground: 'var(--color-popover-foreground)' /* slate-50 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* slate-800 */
          foreground: 'var(--color-card-foreground)' /* slate-50 */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* green-500 */
          foreground: 'var(--color-success-foreground)' /* slate-50 */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-500 */
          foreground: 'var(--color-warning-foreground)' /* slate-50 */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-500 */
          foreground: 'var(--color-error-foreground)' /* slate-50 */
        },
        // Custom brand colors
        'brand-primary': 'var(--color-brand-primary)', /* custom-black */
        'brand-secondary': 'var(--color-brand-secondary)', /* custom-dark-gray */
        'conversion-accent': 'var(--color-conversion-accent)', /* custom-cyan */
        'trust-builder': 'var(--color-trust-builder)', /* custom-green */
        'background-canvas': 'var(--color-background-canvas)', /* custom-dark */
        'text-primary': 'var(--color-text-primary)', /* white */
        'text-secondary': 'var(--color-text-secondary)', /* custom-gray */
        'cta': 'var(--color-cta)' /* custom-orange */
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }]
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700'
      },
      spacing: {
        '0': '0px',
        '1': '8px',
        '1.5': '12px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '6': '48px',
        '8': '64px',
        '12': '96px',
        '16': '128px',
        '20': '160px',
        '24': '192px',
        '32': '256px'
      },
      boxShadow: {
        'brand': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'brand-strong': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'glow-accent': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glow-cta': '0 0 20px rgba(255, 107, 53, 0.3)'
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms'
      },
      transitionTimingFunction: {
        'brand': 'ease-out'
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ]
}
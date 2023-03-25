const { fontFamily, borderRadius } = require('tailwindcss/defaultTheme');

const screens = require('./screens.cjs').screens;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-theme="dark"]'],
	future: {
		purgeLayersByDefault: true,
		applyComplexClasses: true
	},
	theme: {
		flexGrow: {
			0: '0',
			DEFAULT: 1,
			2: 2,
			3: 3,
			4: 4
		},
		borderRadius: {
			...borderRadius,
			standard: '10px'
		},
		boxShadow: {
			// General
			'layer-light': '0 0 8px rgba(0, 0, 0, .08), 0 0 2px rgba(0, 0, 0, .04)',
			'layer-dark': '0 0 4px rgba(0, 0, 0, .25)',
			'angle-light': '0 2px 5px rgba(215, 215, 215, .5)',
			'angle-dark': '0 2px 4px rgba(0, 0, 0, .2);',
			// Hover
			hover: '0 3px 8px #ccc',
			// Component
			radio: '0 0 0 1px var(--tw-shadow-color)',
			'navbar-scroll':
				'0 1px 0 rgba(0, 0, 0, .05), 0 0 8px rgba(0, 0, 0, .03), 0 30px 30px rgba(0, 0, 0, .02)',
			// Reset
			none: '0 0 #0000'
		},
		screens: {
			...screens
		},
		extend: {
			fontFamily: {
				'inter-sans': ['Inter', ...fontFamily.sans],
				fira: ['Fira Sans', ...fontFamily.sans],
				'fira-mono': ['Fira Mono', ...fontFamily.mono],
				raleway: ['Raleway', ...fontFamily.sans],
				'raleway-italic': ['Raleway Italic'],
				cuprum: ['Cuprum', ...fontFamily.sans]
			},
			colors: {
				transparent: 'transparent',
				'c-gold': '#CAA247',
				'c-background-light': '#F1F1F1',
				'c-dark-gray': '#222222',
				'c-light-gray': '#D9D9D9',
				'c-green': '#2D4624',
				'c-red': '#6D1E1E',
				'c-caption-gray': '#707070',
				'c-near-white': '#F9F9F9',
				'c-near-black': '#1A1A1A',
				'c-card-light': '#EBEBEB'
			},
			animation: {
				'toast-warning': 'fadein-x, fadeout-x',
				'toast-success': 'fadein-y, fadeout-y',
				'view-cart': 'slidein-y 0.4s, slideout-y 0.4s 4.6s',
				'loading-dots': 'loading-blink linear 1.4s infinite normal both',
				'loading-bars': 'loading-bar ease-in-out 1200ms infinite normal both',
				skeleton: 'loading-skeleton 8s ease-in-out infinite',
				'snowflake-fall': 'falling-snowflake ease-in-out 10s infinite normal both'
			},
			keyframes: {
				'fadein-x': {
					from: { transform: 'translateX(10%)', opacity: 0 },
					to: { transform: 'translateX(0)', opacity: 1 }
				},
				'fadeout-x': {
					from: { transform: 'translateX(0)', opacity: 1 },
					to: { transform: 'translateX(10%)', opacity: 0 }
				},
				'fadein-y': {
					from: { transform: 'translateY(10%)', opacity: 0 },
					to: { transform: 'translateY(0)', opacity: 1 }
				},
				'fadeout-y': {
					from: { transform: 'translateY(0)', opacity: 1 },
					to: { transform: 'translateY(10%)', opacity: 0 }
				},
				'slidein-y': {
					from: { transform: 'translateY(-100%)', opacity: 0 },
					to: { transform: 'translateY(0)', opacity: 1 }
				},
				'slideout-y': {
					from: { transform: 'translateY(0)', opacity: 1 },
					to: { transform: 'translateY(-100%)', opacity: 0 }
				},
				'loading-blink': {
					'0%': {
						opacity: 0.2
					},
					'20%': {
						opacity: 1
					},
					'100%': {
						opacity: 0.2
					}
				},
				'loading-bar': {
					'0%': {
						transform: 'scaleY(60%)',
						opacity: 0.2
					},
					'25%': {
						transform: 'scaleY(100%)',
						opacity: 1
					},
					'50%': {
						transform: 'scaleY(60%)',
						opacity: 0.2
					},
					'100%': {
						transform: 'scaleY(60%)',
						opacity: 0.2
					}
				},
				'loading-skeleton': {
					'0%': {
						'background-position': '200% 0'
					},
					'100%': {
						'background-position': '-200% 0'
					}
				},
				'falling-snowflake': {
					'0%': {
						top: '-10%',
						opacity: 1,
						visibility: 'visible'
					},
					'80%': {
						top: '80%',
						opacity: 0,
						visibility: 'collapse'
					},
					'100%': {
						top: '80%',
						opacity: 0,
						visibility: 'collapse'
					}
				}
			},
			maxWidth: {
				'8xl': '1800px',
				'1/2-screen': '50vw'
			},
			lineHeight: {
				'extra-loose': '2.2'
			},
			borderWidth: {
				3: '3px',
				6: '6px',
				12: '12px'
			},
			backgroundSize: {
				'size-skeleton': '400% 100%'
			},
			backgroundImage: {
				'gradient-skeleton':
					'linear-gradient(270deg,var(--accent-0),var(--accent-2),var(--accent-0),var(--accent-1))'
			},
			padding: {
				full: '100%'
			},
			height: {
				min: 'min-content'
			},
			borderRadius: {
				smd: '0.1875rem'
			},
			maxHeight: {
				'screen-80': '80vh'
			},
			zIndex: {
				'-1': '-1',
				'-10': '-10'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};

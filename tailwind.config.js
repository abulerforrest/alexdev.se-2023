/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    boxShadow: {
      "subtle-glow":
        "0 0 1px rgba(0, 0, 0, 0.1),0 0 1px rgba(0,0,0, 0.4),0 0 3px rgba(0,0,0, 0.8),0 0 7px rgba(255, 47, 0, 0.1),0 0 6px",
      "subtle-glow-0.5":
        "0 0 1px rgba(0, 0, 0, 0.1),0 0 1px rgba(0,0,0, 0.1),0 0 1px rgba(0,0,0, 0.1),0 0 1px rgba(255, 47, 0, 0.1),0 0 4px",
      "3xl":
        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    },
    screens: {
      xs: "540px",
      sm: "640px",
      md: "968px",
      md2: "820px",
      lg: "1324px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      varela: ["Varela Round", "sans-serif"],
      eurostile: ["eurostile", "sans-serif"],
      news: ["news-gothic-std", "sans-serif"],
      kabel: ["neue-kabel", "sans-serif"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Source Code Pro", "monospace"],
      berkeleymono: ["Berkeley Mono", "monospace"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "logo-xl": ["3rem", "61px"] /* Desktop: 48px */,
      "logo-md": ["2.8rem", "61px"] /* Desktop: 48px */,
      "welcome-heading-xl": ["5rem", "4.438rem"] /* Desktop: 80px */,
      "welcome-heading-md": ["60px", "58px"] /* 60px */,
      "welcome-heading-sm": ["40px", "38px"] /* 40px */,
      "welcome-text-xl": ["1.563rem", "1.75rem"] /* Desktop: 25.008px */,
      "welcome-text-md": ["1.438rem", "28px"] /* 23px */,
      "welcome-text-sm": ["20px", "24px"] /* 20px */,
      "experience-label-sm": ["13px", "21px"] /* 13px */,
      "experience-label-md": ["15px", "23px"] /* 15px */,
      "experience-label-xl": ["18px", "25px"] /* 18px */,
      "experience-years-xl": ["96px", "122px"] /* 96px */,
      "experience-years-md": ["80px", "99px"] /* 80px */,
      "experience-years-sm": ["56px", "84px"] /* 56px */,
      "experience-blob-heading-xl": ["32px", "41px"] /* 32px */,
      "experience-blob-heading-sm": ["25px", "32px"] /* 32px */,
      "experience-blob-text-xl": ["22px", "30px"] /* 22px */,
      "experience-blob-text-sm": ["18px", "24px"] /* 18px */,

      "process-blob-heading-xl": ["32px", "41px"] /* 32px */,
      "process-blob-heading-sm": ["25px", "32px"] /* 32px */,
      "process-blob-text-xl": ["22px", "30px"] /* 22px */,
      "process-blob-text-sm": ["18px", "24px"] /* 18px */,

      "play-heading-xl": ["32px", "auto"] /* 32px */,
      "play-heading-md": ["23px", "auto"] /* 23px */,
      "play-heading-sm": ["21px", "auto"] /* 21px */,

      "section-heading-xl": ["71px", "auto"] /* 71px */,
      "section-heading-md": ["61px", "auto"] /* 61px */,
      "section-heading-sm": ["51px", "auto"] /* 51px */,

      "heading-smashing-xl": ["28px", "auto"] /* 28px */,
      "heading-smashing-md": ["26px", "auto"] /* 26px */,
      "heading-smashing-sm": ["22px", "auto"] /* 22px */,

      "heading-smashing-project-xl": ["38px", "auto"] /* 28px */,
      "heading-smashing-project-md": ["35px", "auto"] /* 26px */,
      "heading-smashing-project-sm": ["28px", "auto"] /* 22px */,

      "codecard-heading-xl": ["42px", "auto"] /* 42px */,
      "codecard-heading-md": ["36px", "auto"] /* 36px */,
      "codecard-heading-sm": ["33px", "auto"] /* 33px */,

      "smashing-xl": ["20px", "auto"] /* 20px */,
      "smashing-md": ["19px", "auto"] /* 19px */,
      "smashing-sm": ["18px", "auto"] /* 18px */,

      "project-heading-xl": ["33px", "auto"] /* 33px */,
      "project-heading-md": ["29px", "auto"] /* 29px */,
      "project-heading-sm": ["28px", "auto"] /* 28px */,

      "about-text-xl": ["28px", "auto"] /* 28px */,
      "about-text-md": ["23px", "auto"] /* 23px */,
      "about-text-sm": ["21px", "auto"] /* 21px */,

      "connect-text-xl": ["38px", "46px"] /* 38px */,
      "connect-text-md": ["32px", "40px"] /* 32px */,
      "connect-text-sm": ["29px", "38px"] /* 29px */,

      "go2top-text-xl": ["24px", "61px"] /* 24px */,
      "go2top-text-md": ["20px", "54px"] /* 20px */,
      "go2top-text-sm": ["18px", "50px"] /* 18px */,

      "footer-heading-xl": ["24px", "61px"] /* 24px */,
      "footer-heading-md": ["21px", "54px"] /* 21px */,
      "footer-heading-sm": ["19px", "50px"] /* 19px */,

      "footer-navitem-xl": ["24px", "61px"] /* 24px */,
      "footer-navitem-md": ["21px", "54px"] /* 21px */,
      "footer-navitem-sm": ["19px", "50px"] /* 19px */,

      "footer-contact-text-xl": ["20px", "61px"] /* 20px */,
      "footer-contact-text-md": ["18px", "54px"] /* 18px */,
      "footer-contact-text-sm": ["17px", "50px"] /* 17px */,

      "footer-reachout-text-xl": ["24px", "31px"] /* 24px */,
      "footer-reachout-text-md": ["20px", "28px"] /* 20px */,
      "footer-reachout-text-sm": ["18px", "25px"] /* 18px */,

      "footer-copyright-text-xl": ["17px", "61px"] /* 17px */,
      "footer-copyright-text-md": ["15px", "51px"] /* 15px */,
      "footer-copyright-text-sm": ["14px", "41px"] /* 14px */,

      "techniques-heading-xl": ["28px", "auto"] /* 28px */,
      "techniques-heading-sm": ["23px", "auto"] /* 23px */,

      "project-page-heading-xl": ["60px", "71px"] /* 60px */,
      "project-page-heading-md": ["55px", "67px"] /* 55px */,
      "project-page-heading-sm": ["48px", "60px"] /* 48px */,

      "project-page-text-xl": ["23px", "28px"],
      "project-page-text-md": ["21px", "24px"],
      "project-page-text-sm": ["19px", "22px"],

      "project-background-heading-xl": ["48px", "auto"],
      "project-background-heading-md": ["42px", "auto"],
      "project-background-heading-sm": ["38px", "auto"],

      "navigation-labels-xl": ["1.5rem", "1.313"] /* Desktop: 24px */,
      "button-xl": ["24px"],
      "button-md": ["21px"],
      "button-md": ["17px"],
      "quote-xl": ["56px", "auto"],
      "quote-md": ["48px", "auto"],
      "quote-sm": ["32px", "auto"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial-code": `radial-gradient(at 40% 20%, hsla(42,77%,55%,1) 0px,
          transparent 50%), radial-gradißent(at 0% 100%, hsla(102,37%,45%,1) 0px,
          transparent 50%), radial-gradient(at 0% 50%, hsla(8,71%,58%,1) 0px,
          transparent 50%), radial-gradient(at 80% 50%, hsla(205,37%,45%,1) 0px,
          transparent 50%), radial-gradient(at 16% 96%, hsla(16,75%,58%,1) 0px,
          transparent 50%);`,
      },
      height: {
        4.5: "1.125rem", // add 18px
      },
      width: {
        4.5: "1.125rem", // add 18px
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      colors: {
        "orange-dream": "#f66937",
        "its-called-yellow": "#eeb100",
        "commodore-64-grey": "#5e594e",
        "light-grey-clouds": "#e5e7eb",
        "retro-black": "#353535",
        "bone-white": "#fbfbf7",
        "exotic-fanta": "#f35641",
        "mighty-greens": "#62A048",
        "startling-blues": "#357ca4",
        "dark-mode-feel": "#1E1E1E",
        "moody-blues": "#5D594F",
        "skillful-lightgrey": "#d9d9d9",
      },

      keyframes: {
        "pop-up": {
          "0%": {
            opacity: 1,
            transform: "translateY(350px) scale(0.8)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px) scale(1)",
          },
        },
        "slide-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "slide-from-left": {
          "0%": {
            opacity: 0,
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        "slide-from-right": {
          "0%": {
            opacity: 0,
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        grow: {
          "0%": {
            transform: "scale(0.3)",
            opacity: 0.8,
          },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
        "grow-from-left": {
          "0%": {
            width: "0%",
            opacity: 0.1,
          },
          "100%": {
            width: "100%",
            opacity: 1,
          },
        },
        "scale-up-hor-center": {
          "0%": {
            transform: "scaleX(0.4)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        circle: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        "pop-up": "pop-up 0.6s ease-in-out",
        "slide-down": "slide-down 0.3s ease-in-out",
        "slide-from-left": "slide-from-left 0.s ease-in-out",
        "slide-from-right":
          "slide-from-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "grow-from-left": "grow-from-left 0.6s ease-in-out",
        circle: "circle 7s infinite ease-in-out",
        grow: "grow 0.5s ease-in-out",
        "scale-up-hor-center": "scale-up-hor-center 1.6s ease-in-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

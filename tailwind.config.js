/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#faf9f8",
      // primary: "#d16800",
      textMenu: "#362C27",
      active: "#C2996F",
    },
    translate: {
      "-1/2": "-50%",
    },
    fontFamily: {
      sans: ['"Open Sans"'],
      primary: ['"Marcellus"'],
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {
// 			colors: {
// 				primary: {
// 					DEFAULT: "#362C27",
// 				},
// 				secondary: {
// 					DEFAULT: "#FAF9F8",
// 					50: "#B4B3B2",
// 				},
// 				tertiary: {
// 					DEFAULT: "#C2996F",
// 				},
// 			},
// 		},
// 	},
// 	plugins: [],
// };

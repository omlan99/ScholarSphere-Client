/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {  
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "myLightTheme",
      {
        myLightTheme : {
          // colors: {
//   base-content: #f1f2f3;
// --base-content-100: #e3e6e8;
// --base-content-200: #c8ccd0;
// --base-content-300: #acb3b9;
// --base-content-400: #9199a1;
// --base-content-500: #757f8a;
// --base-content-600: #5e666e;
// --base-content-700: #464d53;
// --base-content-800: #2f3337;
// --base-content-900: #171a1c;
// --base-content-950: #0c0d0e;

// --base-50: #f0f4f4;
// --base-100: #e2e8e9;
// --base-200: #c4d1d4;
// --base-300: #a7babe;
// --base-400: #8aa3a8;
// --base-500: #6c8c93;
// --base-600: #577075;
// --base-700: #415458;
// --base-800: #2b383b;
// --base-900: #161c1d;
// --base-950: #0b0e0f;

// --primary-50: #eff4f5;
// --primary-100: #e0e8eb;
// --primary-200: #c1d2d7;
// --primary-300: #a2bbc3;
// --primary-400: #83a5af;
// --primary-500: #638e9c;
// --primary-600: #50727c;
// --primary-700: #3c555d;
// --primary-800: #28393e;
// --primary-900: #141c1f;
// --primary-950: #0a0e10;

// --secondary-50: #eff4f6;
// --secondary-100: #deeaed;
// --secondary-200: #bdd5db;
// --secondary-300: #9cc0c9;
// --secondary-400: #7babb7;
// --secondary-500: #5b96a4;
// --secondary-600: #487884;
// --secondary-700: #365a63;
// --secondary-800: #243c42;
// --secondary-900: #121e21;
// --secondary-950: #090f10;

// --accent-50: #eef5f7;
// --accent-100: #ddeaee;
// --accent-200: #bad6de;
// --accent-300: #98c1cd;
// --accent-400: #75acbd;
// --accent-500: #5397ac;
// --accent-600: #42798a;
// --accent-700: #325b67;
// --accent-800: #213d45;
// --accent-900: #111e22;
// --accent-950: #080f11;


            
            
          //  },
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#344a51", // Change primary color
          "secondary": "#8fb7c1", // Change secondary color
          "accent": "#478294", // Change accent color
          "neutral": "#1E293B", // Change neutral color
          "base-100": "#e8edee", // Change background color
          "base-200": "#DDE2E3", // Change background color
          "base-300": "#EBEFEF", // Change background color
          "base-400": "#EdEFEc", // Change background color
          "base-content": "#0c0d0e", // Change background color
        }
      },
      {
        // colors: {
          // --text: #f1f2f3;
          // --background: #111617;
          // --primary: #aec4cb;
          // --secondary: #3e6670;
          // --accent: #6ba6b8;
        //  },
        myDarkTheme: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"], // Inherit default dark theme
          // "primary": "#613e2e", // Change primary color
          "primary": "#aec4cb", // Change primary color
          "secondary": "#3e6670", // Change secondary color
          "accent": "#6ba6b8", // Change accent color
          "neutral": "#1E293B", // Change neutral color
          "base-100": "#111617", // Change background color
          "base-200": "#101210", // Change background color
          "base-300": "#050605", // Change background color
          "base-content": "#f1f2f3", // Change background color
          "info": "#3B82F6",
          "success": "#22C55E",
          "warning": "#EAB308",
          "error": "#EF4444",
        },
      },
    ],
  }
}


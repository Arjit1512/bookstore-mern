// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./pages/Home.jsx",
//     "./src/components/Spinner.jsx",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/Home.jsx",
    "./pages/CreateBooks.jsx",
    "./pages/DeleteBook.jsx",
    "./pages/EditBook.jsx",
    "./pages/ShowBook.jsx",
    "./src/components/Spinner.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
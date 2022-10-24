import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  }
})

// const customTheme = {
//   ...theme, 
//   colors: {
//     ...theme.colors,
//     light: {
//       50: "#FAF5FF",
//       100: "#E9D8FD",
//       200: "#D6BCFA",
//       300: "#B794F4",
//       400: "#9F7AEA",
//       500: "#805AD5",
//       600: "#6B46C1",
//       700: "#553C9A",
//       800: "#44337A",
//       900: "#322659"
//     },
//     dark: {
//       50: "#F7FAFC",
//       100: "#EDF2F7",
//       200: "#E2E8F0",
//       300: "#CBD5E0",
//       400: "#A0AEC0",
//       500: "#718096",
//       600: "#4A5568",
//       700: "#2D3748",
//       800: "#1A202C",
//       900: "#171923"
//     }
//   }
// }
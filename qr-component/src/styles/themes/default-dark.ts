import { createTheme } from "@nextui-org/react";

const darkDefaultTheme = createTheme({
    type: "dark",
    theme: {
        fonts: {
            sans: "Outfit, sans-serif",
        },
        colors: {
            white: "#FFFFFF",
            black: "#D5E1EF",
        },
    },
});

export default darkDefaultTheme;
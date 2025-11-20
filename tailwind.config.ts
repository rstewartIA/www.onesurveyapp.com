import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: "#003F7D",
                    secondary: "#2C6499",
                    accent: "#B3D1E5",
                    light: "#3A74C2",
                    dark: "#39527B",
                },
                neutral: {
                    900: "#171717",
                    700: "#434343",
                    500: "#737373",
                    200: "#e5e5e5",
                    100: "#f5f5f5",
                },
                success: "#22c55e",
                warning: "#eab308",
                error: "#ef4444",
            },
            fontFamily: {
                display: ["var(--font-poppins)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
            },
            borderRadius: {
                sm: "10px",
                md: "12px",
                lg: "16px",
            },
            boxShadow: {
                sm: "0 2px 4px rgba(0,0,0,0.04)",
                md: "0 4px 12px rgba(0,0,0,0.06)",
                lg: "0 8px 24px rgba(0,0,0,0.08)",
            },
            spacing: {
                18: "4.5rem",
                20: "5rem",
            },
        },
    },
    plugins: [],
};
export default config;

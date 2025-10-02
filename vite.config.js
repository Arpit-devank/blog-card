import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
    base:"/blog-card/",
    plugins:[tailwindcss()]
})
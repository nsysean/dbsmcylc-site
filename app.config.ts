import { defineConfig } from "@solidjs/start/config";
import pkg from "@vinxi/plugin-mdx";

const { default: mdx } = pkg;

export default defineConfig({
  vite: {
    plugins: [
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
    ],
  },
  ssr: true,
  extensions: ["mdx", "md"],
});

import { defineConfig } from "@solidjs/start/config";
import pkg from "@vinxi/plugin-mdx";

const { default: mdx } = pkg;

export default defineConfig({
  vite: {
    optimizeDeps: { exclude: ["fsevents"] },

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
  /*
  server: {
    preset: "cloudflare-pages",
    // We will need to enable CF Pages node compatiblity
    // https://developers.cloudflare.com/workers/runtime-apis/nodejs/asynclocalstorage/
    rollupConfig: {
      external: ["__STATIC_CONTENT_MANIFEST", "node:async_hooks"],
    },
  },
  */
});

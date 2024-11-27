import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import checker from "vite-plugin-checker";

const devLoadingIndicator = ({ mode }) => {
  return {
    name: "vite-dev-loading-indicator",
    transformIndexHtml: (html) => {
      if (mode === "production") {
        return html.replace(
          /<([a-zA-Z]+)([^>]*\sdata-dev-loading="true"[^>]*)>([\s\S]*?)<\/\1>/g,
          ""
        );
      }
    },
    configureServer: (server) => {
      server.middlewares.use((req, res, next) => {
        res.on("finish", () => {
          server.ws.send({
            type: "custom",
            event: "loaded",
          });
        });
        next();
      });
    },
  };
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const flags = {
    devLoadingIndicator: env.VITE_FLAGS_DEV_LOADING_INDICATOR === "true",
  };

  return {
    root: "src",
    base: "/",
    plugins: [
      ...(flags.devLoadingIndicator ? [devLoadingIndicator({ mode })] : []),
      react(),
      svgr(),
      // checker({
      //   eslint: {
      //     lintCommand: `eslint`,
      //     useFlatConfig: true,
      //   },
      // }),
    ],
    publicDir: process.cwd() + "/public",
    resolve: {
      alias: {
        "@": process.cwd() + "/src",
      },
    },
    server: {
      port: env.VITE_PORT ?? 3000,
      proxy: {
        "/api/": {
          target: env.VITE_BACKEND_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\//, ""),
        },
        "/static/": {
          target: env.VITE_STATIC_SERVER_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/static\//, ""),
        },
      },
    },
    envDir: process.cwd(),
    build: {
      outDir: process.cwd() + "/build",
      emptyOutDir: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      sourcemap: true,
    },
    preview: {
      port: env.VITE_PORT ?? 3000,
    },
  };
});

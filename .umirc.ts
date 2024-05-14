import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    // { path: "/son", component: "son" },
  ],
  npmClient: "npm",
});

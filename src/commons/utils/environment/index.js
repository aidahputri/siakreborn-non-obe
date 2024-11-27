export default {
  production: import.meta.env.MODE === "production",
  rootApi: `/api`,
  staticServerApi: `/static`,
};

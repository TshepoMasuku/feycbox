// react app environment(react_app_env) can be either = "prod" || "dev";
const react_app_env = "prod";
const BASE_API_URL = react_app_env === "prod" ? 
    "https://feycbaackk-patient-river-1261.fly.dev" : "http://localhost:3001";

export default BASE_API_URL;
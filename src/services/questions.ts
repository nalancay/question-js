import { IS_DEVELOPMENT } from "../config";
const URL_IN_PRODUCTION = "https://nalancay-questions-js.netlify.app";
const URL_IN_LOCAL = "http://localhost:3000";
const API_URL = IS_DEVELOPMENT ? URL_IN_LOCAL : URL_IN_PRODUCTION;

export const getAllQuestions = async () => {
  const res = await fetch(`${API_URL}/data.json`);
  const json = await res.json();
  return { json };
};

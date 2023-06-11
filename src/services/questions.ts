export const getAllQuestions = async () => {
  const isProduction = import.meta.env?.PROD;
  const API_URL = isProduction
    ? "https://nalancay-questions-js.netlify.app"
    : "http://localhost:3000";

  const res = await fetch(`${API_URL}/data.json`);
  const json = await res.json();
  return { json };
};

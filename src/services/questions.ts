const API_URL = import.meta?.env?.PROD
  ? "https://nalancay-questions-js.netlify.app/"
  : "http://localhost:3000/";

export const getAllQuestions = async () => {
  const res = await fetch(`${API_URL}/data.json`);
  const json = await res.json();
  return { json };
};

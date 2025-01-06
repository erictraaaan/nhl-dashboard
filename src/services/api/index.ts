import { Score } from "./api.types";

const BASE_URL = "https://api-web.nhle.com";

export const getScores = async (date?: string) : Promise<Score> => {
    date = date ? date : "now";
    const response = await  fetch(`${BASE_URL}/v1/score/${date}`);
    const data : Score = await response.json();
    return data;
}
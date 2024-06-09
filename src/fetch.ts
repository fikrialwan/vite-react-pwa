import { BASE_URL } from "./config";
import { type resAPIType } from "./interface";

export const fetchAPI = fetch(BASE_URL + "/v1/search?query=")
  .then((res) => res.json() as Promise<resAPIType>)
  .then((res) => res.hits.filter((res) => res.story_id));

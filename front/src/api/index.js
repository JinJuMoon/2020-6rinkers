import axios from "axios";
import { ACCESS_TOKEN } from "../constants";

const client = axios.create({
  baseURL: `//${process.env.REACT_APP_HOST}`,
});

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
  },
};

export const fetchAllCocktails = () => client.get("/api/cocktails");
export const fetchPagedCocktailsContainingWord = ({ contain, id, size }) =>
  client.get("/api/cocktails/contain-word", {
    params: { contain, id, size },
    headers: {
      Authorization: config.headers.Authorization,
    },
  });
export const fetchPagedCocktailsFilteredByTags = ({ tagIds, id, size }) =>
  client.get("api/cocktails/contain-tags", {
    params: { tagIds, id, size },
    headers: {
      Authorization: config.headers.Authorization,
    },
  });
export const fetchCocktail = (id) => client.get(`/api/cocktails/${id}`, config);
export const fetchTodayCocktail = () => client.get("/api/cocktails/today");
export const fetchCocktailsContaining = (contain) =>
  client.get(`api/cocktails/auto-complete`, { params: { contain } });
export const createCocktail = (data) => client.post("/api/cocktails", data);
export const updateCocktail = (id, data) =>
  client.put(`/api/cocktails/${id}`, data);
export const deleteCocktail = (id) => client.delete(`/api/cocktails/${id}`);
export const deleteAllCocktail = () => client.delete("/api/cocktails");

export const createTag = (data) => client.post("/api/tags", data);
export const updateTag = (id, data) => client.put(`/api/tags/${id}`, data);
export const deleteTag = (id) => client.delete(`/api/tags/${id}`);
export const fetchAllTags = () => client.get("/api/tags");
export const fetchThreeRandomConceptTags = () =>
  client.get("/api/tags?tagType=CONCEPT&size=3&random=true");
export const fetchThreeRandomIngredientTags = () =>
  client.get("/api/tags?tagType=INGREDIENT&size=3&random=true");
export const fetchDislikeTags = () => client.get("/api/tags?tagType=DISLIKE");

export const createRecommend = (recommend) =>
  client.post(`/api/cocktails/recommend`, recommend);

export const createCocktailsByCsv = (file) =>
  client.post("/api/cocktails/upload/csv", file, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
    },
  });
export const createTagsByCsv = (file) =>
  client.post("/api/tags/upload/csv", file, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
    },
  });
export const getCurrentUser = () => {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return client.get("/api/user/me", {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
    },
  });
};
export const login = (loginRequest) =>
  client.post("/api/auth/login", loginRequest);
export const signup = (signupRequest) =>
  client.post("/api/auth/signup", signupRequest);

export const fetchMyFavorites = () => {
  client.get("/api/user/me/favorites", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
    },
  });
};

export const addFavorite = (data) =>
  client.post("/api/user/me/favorites", data, config);
export const deleteFavorite = (id) =>
  client.delete(`/api/user/me/favorites/${id}`, config);

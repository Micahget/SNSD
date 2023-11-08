// src/context/projects/actions.ts
/* eslint-disable */
import { API_ENDPOINT } from "../../config/constants";
export const fetchArticles = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  console.log("token", token);

  try {
    console.log("fetching articles")
    dispatch({ type: "FETCH_ARTICLE_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log("data", data);

    dispatch({ type: "FETCH_ARTICLE_SUCCESS", payload: data });
    console.log("success fetching articles")
  } catch (error) {
    console.log("Error fetching ARTICLEs:", error);
    dispatch({
      type: "FETCH_ARTICLE_FAILURE",
      payload: "Unable to load ARTICLES ",
    });
  }
};

// fetch specific article by id
export const fetchArticleById = async (dispatch: any, id: string) => { // here dispatch is the dispatch function from useReducer
  const token = localStorage.getItem("authToken") ?? "";
  try {
    console.log("fetching article by id")
    dispatch({ type: "FETCH_ARTICLE_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/articles/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log("data", data);

    dispatch({ type: "FETCH_ARTICLE_SUCCESS", payload: data });
    console.log("success fetching article by id")
  } catch (error) {
    console.log("Error fetching ARTICLE:", error);
    dispatch({
      type: "FETCH_ARTICLE_FAILURE",
      payload: "Unable to load ARTICLE ",
    });
  }
};
/* eslint-disable */
import { API_ENDPOINT } from "../../config/constants";

// fetch Matches
export const fetchMatches = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  console.log("token", token);

  try {
    console.log("fetching matches");
    dispatch({ type: "FETCH_MATCH_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/matches`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log("data success", data);

    dispatch({ type: "FETCH_MATCH_SUCCESS", payload: data });
    console.log("success fetching MATCHs");
  } catch (error) {
    console.log("Error fetching MATCHs:", error);
    dispatch({
      type: "FETCH_MATCH_FAILURE",
      payload: "Unable to load MATCHS ",
    });
  }
};

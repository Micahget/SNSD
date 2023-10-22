interface Article {
  id: number;
  title: string;
  thumbnail: string;
  sport: {
    id: number;
    name: string;
  };
  date: string;
  summery: string;
  teams: [
    {
      id: number;
      name: string;
    }
  ];
}
// Now, I'll rename the interface in the `ArticleList` component from `State`
// to `ArticlesState`. And I'll also export the interface.

export interface ArticlesState {
  articles: Article[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
// Next, I'll comment the `Action` interface

// interface Action {
//   type: string;
//   payload?: any;
// }

// Then I'll define a new type called `ProjectsActions`
// for all possible combimations of action objects.

export type ArticlesActions =
  | { type: "FETCH_ARTICLE_REQUEST" }
  | { type: "FETCH_ARTICLE_SUCCESS"; payload: Article[] }
  | { type: "FETCH_ARTICLE_FAILURE"; payload: string };

export const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};
export const reducer = (
  state: ArticlesState,
  action: ArticlesActions
): ArticlesState => {
  switch (action.type) {
    case "FETCH_ARTICLE_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_ARTICLE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        articles: action.payload,
      };
    case "FETCH_ARTICLE_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

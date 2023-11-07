interface Match  {
      id: number,
      name: string,
      location: string,
      sportName: string,
      endsAt: string,
      isRunning: boolean,
      teams: [
        {
          id: number,
          name: string
        }
      ]
    }


export interface MatchesState {
  matches: Match[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type MatchesActions =
  | { type: "FETCH_MATCH_REQUEST" }
  | { type: "FETCH_MATCH_SUCCESS"; payload: Match[] }
  | { type: "FETCH_MATCH_FAILURE"; payload: string };

export const initialState: MatchesState = {
  matches: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};
export const reducer = (
  state: MatchesState,
  action: MatchesActions
): MatchesState => {
  switch (action.type) {
    case "FETCH_MATCH_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_MATCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        matches: action.payload,
      };
    case "FETCH_MATCH_FAILURE":
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

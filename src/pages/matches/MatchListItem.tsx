/* eslint-disable */
import { Link } from "react-router-dom";
import { useMatchesState } from "../../context/matches/context";

export default function MatchListItems() {
  console.log("I reached here match list items");
  const state: any = useMatchesState();
  console.log("state", state);

  let { matches, isLoading, isError, errorMessage } = state;
  console.log("fetched matches", matches);
  console.log("match length", matches.length);
  // make is loading true if there are no matches
  

  if (matches.length === 0 && isLoading) {
    console.log("the matches are loading now");
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }
  // filter the matches by time and date..start from the latest
  //   matches.sort((a: any, b: any) => {
  //     return new Date(b.date).getTime() - new Date(a.date).getTime();
  //   });

  //   if (articleType !== "Matches") {
  //     articles = articles.filter(
  //       (article: any) => article.sport.name === articleType
  //     );
  //   }
  return (
    <div style={{ display: "flex", overflowX: "auto" }}>
      {matches.map((match: any) => {
        const { id, location, sportName, endsAt, teams } = match;
        const date = new Date(endsAt);
        const year = date.getFullYear();
        console.log("year", year);

        const team1 = teams[0];
        const team2 = teams[1];

       
          <Link
            to={``}
            key={id}
            style={{ flex: "0 0 auto", minWidth: "300px", margin: "10px" }}
          >
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-blue-500 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                  <div className="text-xl font-bold">{sportName}</div>
                </div>
                <div className="text-gray-600">
                  {year}, {location}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="text-xl font-bold">{team1}</div>
                  <div className="text-2xl font-bold">10</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-xl font-bold">{team2}</div>
                  <div className="text-2xl font-bold">12</div>
                </div>
              </div>
            </div>
          </Link>
        // );
      })}
    </div>
  );
}
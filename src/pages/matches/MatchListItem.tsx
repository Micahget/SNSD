import { API_ENDPOINT } from "../../config/constants";
import { useEffect, useState } from "react";

interface MatchFormatProps {
  id: number;
  name: string;
  location: string;
  sportName: string;
  endsAt: string;
  isRunning: boolean;
  teams: [
    {
      id: number;
      name: string;
    }
  ];
}

export default function MatchListItems() {
  const [matches, setMatches] = useState<MatchFormatProps[]>([]);

  const fetchMatches = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch(`${API_ENDPOINT}/matches`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Cannot fetch matches");
      }
      const data = await response.json();
      setMatches(data.matches);
    } catch (error) {
      console.log("Error fetching matches", error);
    }
  };

  useEffect(() => {
    fetchMatches();
    console.log("matches", matches);
  }, []);

  return (
    <div style={{ display: "flex", overflowX: "auto" }}>
      {matches.map((match: any) => {
        const { id, location, sportName, endsAt, teams } = match;
        const date = new Date(endsAt);
        const year = date.getFullYear();
        console.log("year", year);

        const team1 = teams[0].name.split(" ")[0]
        const team2 = teams[1].name.split(" ")[0]
        const team1Initials = team1
          .split(" ")
          .map((word: any) => word[0])
          .join("");

        const team2Initials = team2
          .split(" ")
          .map((word: any) => word[0])
          .join("");
        return (
          <div
            key={id}
            style={{ flex: "0 0 100px", minWidth: "200px", margin: "10px" }}
          >
            <div className="bg-white shadow-lg rounded-lg p-3">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  {/* <svg
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
                  </svg> */}
                  <div className=" text-gray-600 font-bold">
                    {sportName}
                  </div>
                </div>
                <div className="text-sm text-gray-600 ">
                  {year}, {location}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="text-base text-gray-600 font-bold">
                    {team1Initials}
                  </div>
                  <div className="text-xl text-gray-600 font-bold">10</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-base text-gray-600 font-bold">
                    {team2Initials}
                  </div>
                  <div className="text-xl text-gray-600 font-bold">12</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

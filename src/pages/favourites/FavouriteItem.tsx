import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { API_ENDPOINT } from "../../config/constants";
import FavouriteItemList from "./FavouriteItemList";

interface SportListProps {
  id: number;
  name: string;
}

interface TeamListProps {
  id: number;
  name: string;
  play: string; // Corrected property name
}

const FavouriteList: React.FC = () => {
  const [sports, setSports] = React.useState<SportListProps[]>([]);
  const [teams, setTeams] = React.useState<TeamListProps[]>([]);
    const [selectedSport, setSelectedSport] = useState<SportListProps | null>(sports[0]);
  const [selectedTeam, setSelectedTeam] = React.useState<TeamListProps | null>(teams[0]); 

  const fetchSports = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch(`${API_ENDPOINT}/sports`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Cannot fetch sports");
      }
        const data = await response.json();
        console.log("sports", data);
      setSports(data.sports);
    } catch (error) {
      console.log("Error fetching sports", error);
    }
  };

  const fetchTeams = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch(`${API_ENDPOINT}/teams`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Cannot fetch teams");
      }
      const data = await response.json();
      setTeams(data);
    } catch (error) {
      console.log("Error fetching teams", error);
    }
  };
  
  React.useEffect(() => {
      fetchSports();
      fetchTeams();
    }, []);
    // // filter the teams based on the selected sport
    // const filteredTeams = teams.filter(
    //   (team) => team.play.toLowerCase() === selectedSport?.name.toLowerCase()
    // );
    // setSelectedTeam(filteredTeams);
    
    return (
      <>
        <div className="bg-gray-400">
          <div className=" text-black hover:rounded-md">
            <Listbox value={selectedSport} onChange={setSelectedSport}>
              <Listbox.Button>{selectedSport?.name || "Select Sport"}</Listbox.Button>
              <Listbox.Options>
                {sports.map((sport) => (
                  <Listbox.Option
                    key={sport.id}
                    value={sport}
                    className="bg-gray-100 hover:bg-slate-500"
                  >
                    {sport.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
          <div className=" text-black hover:rounded-md">
            <Listbox value={selectedTeam} onChange={setSelectedTeam}>
                        <Listbox.Button>{selectedTeam?.name || "Select Team"}</Listbox.Button> 
              <Listbox.Options>
                {teams.map((team) => (
                  <Listbox.Option
                    key={team.id}
                    value={team}
                    className="bg-gray-100 text-black hover:bg-slate-500"
                  >
                    {team.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
        </div>
        <div>
          {selectedSport && selectedTeam && (
            <FavouriteItemList
              sportName={selectedSport.name}
              teamName={selectedTeam.name}
            />
          )}
        </div>
      </>
    );
};

export default FavouriteList;

import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "../../config/constants";

interface FavouriteListItemProps {
  sportName: string;
  teamName: string;
}

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

const FavouriteListItem: React.FC<FavouriteListItemProps> = ({
  sportName,
  teamName,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch(`${API_ENDPOINT}/articles`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Cannot fetch articles");
      }
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.log("Error fetching articles", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(
    (article) =>
      article.sport.name.toLowerCase() === sportName.toLowerCase() &&
      article.teams.some(
        (team) => team.name.toLowerCase() === teamName.toLowerCase()
      )
  );

  return (
    <>
      {filteredArticles.map((article) => (
        <div key={article.id} className="border p-2 mb-2 rounded-md">
          <h3 className="text-xl font-bold mb-1">{article.title}</h3>
          <p className="mb-1">
            {article.summery.split(".")[0]}.<br />
            {article.summery.split(".")[1]}
          </p>
          {filteredArticles.length > 1 && (
            <p className="text-sm text-blue-500 cursor-pointer">See more...</p>
          )}
        </div>
      ))}
    </>
  );
};

export default FavouriteListItem;

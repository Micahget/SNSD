/* eslint-disable */
import { useArticlesState } from "../../context/articles/context";
import { Link } from "react-router-dom";

interface ArticleListItemsProps {
  articleType: string;
}
export default function ArticleListItems({
  articleType,
}: ArticleListItemsProps) {
  let state: any = useArticlesState(); // we define this for type checking
  // const dispatch = useArticlesDispatch();
  console.log("state", state);
  if (!state) return null;
  let { articles, isLoading, isError, errorMessage } = state;
  console.log("fetched articles", articles);

  if (articles.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }
  // filter the articles by time and date..start from the latest
  articles.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  if (articleType !== "Articles") {
    articles = articles.filter(
      (article: any) => article.sport.name === articleType
    );
  }

  return (
    <>
      {articles.map((article: any) => (
        <Link key={article.id}
          to={``}
          // to={`${article.id}`}
        >
          <div className="flex flex-row bg-white rounded-md shadow-sm">
            <div style={{ flex: 1 }}>
              <div className="flex flex-row justify-between items-center px-4 py-3">
                <h3 className="text-lg font-bold text-gray-800">
                  {article.sport.name}
                </h3>
              </div>
              <div className="px-4 py-3">
                <h2 className="text-xl text-left font-bold text-gray-800  line-clamp-1">
                  {article.title}
                </h2>
                <p className="text-base text-start text-gray-600 line-clamp-2">
                  {article.summary}
                </p>
              </div>
              <div className="flex flex-row justify-between items-center px-4 py-3">
                <p className="text-sm font-medium text-gray-600">
                  {article.date}
                </p>
                <a className="text-sm font-medium text-gray-600">
                  Read More...
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 flex justify-center items-center">
              <img
                className="object-cover h-48 w-48 rounded-md"
                src={article.thumbnail}
                alt=""
              />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

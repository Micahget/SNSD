import ArticleListItem from "./ArticleListItem";
interface ArticleListProps {
  articleType: string;
}
const ArticleList = ({ articleType }: ArticleListProps) => {
  
  return (
    <div className="grid gap-4 mt-5">
      <ArticleListItem articleType={articleType} />
    </div>
  );
};

export default ArticleList;

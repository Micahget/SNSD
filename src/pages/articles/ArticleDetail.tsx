import  { Fragment, useEffect, useState } from "react";

import { Transition, Dialog } from "@headlessui/react";
import { API_ENDPOINT } from "../../config/constants";

interface ArticleDetailProp {
  id: number;
  title: string;
  summary: string;
  thumbnail: string;
  sport: { id: number; name: string };
  date: string;
  content: string;
}

interface ArticleIdProps {
  articleId: string;
  closeArticleModal: () => void;
}

const ArticleDetail = ({ articleId, closeArticleModal }: ArticleIdProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [article, setArticle] = useState<ArticleDetailProp>();

  // methode to fetch article by id
  const fetchArticle = async (articleId: string) => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch(`${API_ENDPOINT}/articles/${articleId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Cannot fetch article details");
      }
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.log("Error fetching articles", error);
    }
  };

  useEffect(() => {
    fetchArticle(articleId);
  }, [articleId]);

  function closeModal() {
    setIsOpen(false);
    closeArticleModal();
  }

  if (!article) {
    return <>Error loading article</>;
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {article?.title}
                </Dialog.Title>
                <img
                  src={article?.thumbnail}
                  alt={article?.title}
                  className="mt-2 w-full"
                />
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{article?.content}</p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ArticleDetail;

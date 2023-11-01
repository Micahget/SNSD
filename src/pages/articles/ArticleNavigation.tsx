/* eslint-disable */
import { useState } from "react";
import { Disclosure} from "@headlessui/react";

import { Link } from "react-router-dom";
import ArticleList from "./ArticleList";


const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");

const Navbar = () => {

  const navigation = [
    { name: "Articles", href: "/dashboard/articles", current: true },
    { name: "Cricket", href: "/dashboard/articles", current: false },
    { name: "American Football", href: "/dashboard/articles", current: false },
    { name: "Field Hockey", href: "/dashboard/articles", current: false },
    { name: "Table Tennis", href: "/dashboard/articles", current: false },
  ];
    // set useState, and set the default value to "Articles"
    const [articleType, setArticleType] = useState("news");
    
    const handleClick = (name: string) => {
        // give the props type to the ArticleList
        setArticleType(name);
    }

  return (
    <>
      <Disclosure as="nav" className="border-b border-slate-200">
        {() => (
          <div className="">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                </div>
                <div className="">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => {
                      const isCurrent = item.name === articleType;

                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => handleClick(item.name)}
                          className={classNames(
                            isCurrent
                              ? "border-black border-solid border-b-2 text-black "
                              : "text-slate-500 ",
                            "hover:text-gray-700 px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={isCurrent ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Disclosure>
      {/* <ArticleList articleType={item.name} /> */}
          <ArticleList articleType={articleType} />
    </>
  );
};

export default Navbar;

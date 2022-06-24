import React from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-2">
      <div>
        <p className="text-sm text-gray-700 text-center">
          Showing
          <span className="font-medium">
            {" "}
            {currentPage * postsPerPage - 10}{" "}
          </span>
          to
          <span className="font-medium"> {currentPage * postsPerPage} </span>
          of
          <span className="font-medium"> {totalPosts} </span>
          results
        </p>
      </div>
      <nav className="block">
        <ul className="flex justify-center pl-0 rounded list-none flex-wrap">
          <li>
            {currentPage > 1 ? (
              <>
                <a
                  onClick={() => {
                    paginate(1);
                  }}
                  href="#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  First
                </a>
                <a
                  onClick={() => {
                    paginate(currentPage - 1);
                  }}
                  href="#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  Prev
                </a>
              </>
            ) : (
              ""
            )}

            {pageNumbers.map((number) => {
              if (number >= currentPage - 1 && number <= currentPage + 1) {
                return (
                  <a
                    key={number}
                    onClick={() => {
                      paginate(number);
                    }}
                    href="#"
                    className={
                      currentPage === number
                        ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    }
                  >
                    {number}
                  </a>
                );
              } else {
                return "";
              }
            })}
            {currentPage < pageNumbers.length ? (
              <>
                <a
                  onClick={() => {
                    paginate(currentPage + 1);
                  }}
                  href="#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  Next
                </a>
                <a
                  onClick={() => {
                    paginate(pageNumbers.length);
                  }}
                  href="#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  Last
                </a>
              </>
            ) : (
              ""
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

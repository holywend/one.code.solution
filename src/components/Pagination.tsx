import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
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
          <li className="flex">
            {currentPage > 1 ? (
              <>
                <button
                  onClick={() => {
                    paginate(1);
                  }}
                  title="First"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  <ChevronDoubleLeftIcon className="relative my-auto w-6 h-6" />
                </button>
                <button
                  onClick={() => {
                    paginate(currentPage - 1);
                  }}
                  title="Previous"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  <ChevronLeftIcon className="relative w-6 h-6" />
                </button>
              </>
            ) : (
              ""
            )}

            {pageNumbers.map((number) => {
              if (number >= currentPage - 1 && number <= currentPage + 1) {
                return (
                  <button
                    key={number}
                    onClick={() => {
                      paginate(number);
                    }}
                    className={
                      currentPage === number
                        ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium h-full"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium h-full"
                    }
                  >
                    {number}
                  </button>
                );
              } else {
                return "";
              }
            })}
            {currentPage < pageNumbers.length ? (
              <>
                <button
                  onClick={() => {
                    paginate(currentPage + 1);
                  }}
                  title="Next"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  <ChevronRightIcon className="relative w-6 h-6" />
                </button>
                <button
                  onClick={() => {
                    paginate(pageNumbers.length);
                  }}
                  title="Last"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  <ChevronDoubleRightIcon className="relative w-6 h-6" />
                </button>
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

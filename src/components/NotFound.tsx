import { ChevronLeftIcon } from "@heroicons/react/solid";

/* This example requires Tailwind CSS v2.0+ */
export default function NotFound() {
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
      <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex-shrink-0 flex justify-center">
            <a href="/" className="inline-flex">
              <div className="flex-shrink-0">
                <span className="text-3xl text-indigo-600 font-bold">
                  One Code Solution
                </span>
              </div>{" "}
            </a>
          </div>
          <div className="py-8">
            <div className="text-center">
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <a
                  href="/"
                  className="flex justify-center text-base font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <ChevronLeftIcon className="w-6 h-6" /> Go back home
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <a
              href="https://github.com/holywend/one.code.solution"
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Contact Support
            </a>
            <span
              className="inline-block border-l border-gray-300"
              aria-hidden="true"
            />
            <a
              href="https://github.com/holywend/one.code.solution"
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Status
            </a>
            <span
              className="inline-block border-l border-gray-300"
              aria-hidden="true"
            />
            <a
              href="https://github.com/holywend/one.code.solution"
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Twitter
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}

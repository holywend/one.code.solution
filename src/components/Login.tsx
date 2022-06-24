import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import toast from "react-hot-toast";
const Login: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = async () => {
    console.log("auth", username, password);
    const users = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((res) => res.json());
    let isAuthenticated = false;
    users.forEach((user: { username: string }) => {
      if (user.username === username && user.username === password) {
        localStorage.setItem("user", JSON.stringify(user));
        setShowModal(false);
        window.location.reload();
        toast.success("Welcome back!");
        isAuthenticated = true;
      }
    });
    if (!isAuthenticated) {
      setUsername("");
      setPassword("");
      toast.error("Invalid username or password");
      console.log("login gagal");
    }
  };

  return (
    <div className="bg-white">
      <header>
        <section id="hero" className="relative bg-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <span className="text-3xl text-blue-600 font-bold">
                One Code Solution
              </span>
            </div>
            <div className="flex items-center justify-end md:flex-1 lg:w-0">
              <button
                onClick={() => setShowModal(!showModal)}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Login
              </button>
            </div>
          </div>
        </section>
      </header>

      <main>
        <div className={showModal ? "block" : "hidden"}>
          <div className="relative">
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8">
                <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Login
                  </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <label htmlFor="username" className="sr-only">
                        Username
                      </label>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        value={username}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Username"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <a
                      // type="submit"
                      href="#"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => auth()}
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <LockClosedIcon
                          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          aria-hidden="true"
                        />
                      </span>
                      Login
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={showModal ? "hidden" : "block"}>
          {/* Hero card */}
          <div className="relative">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/arnold-francisca-f77Bh3inUpE-unsplash.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-8 sm:py-36 lg:py-48 lg:px-10">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">One Code Solution</span>
                    <span className="block text-indigo-200">Test Case</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                    Sebagai salah satu rangkaian test untuk bergabung dengan One
                    Code Solution. Login dengan username dan password yang telah
                    <a
                      className="text-indigo-500 hover:text-indigo-200"
                      href="https://jsonplaceholder.typicode.com/users"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      terdaftar!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* More main page content here... */}
    </div>
  );
};
export default Login;

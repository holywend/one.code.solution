import { Fragment, SetStateAction } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Pagination from "./Pagination";
import Posts from "./Posts";
import { useParams } from "react-router-dom";
import Profile from "./Profile";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Post", href: "/posts" },
  // { name: "Profile", href: "/profile" },
];

const logout = () => {
  localStorage.removeItem("user");
  window.location.href = '/';
};

const Dashboard = ({
  user,
  posts,
  loading,
}: {
  user: any;
  posts?: any[];
  loading: boolean;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
  const params = useParams();

  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  // function classNames(...classes: string[]) {
  //   return classes.filter(Boolean).join(" ");
  // }

  return (
    <>
      <div className="min-h-full">
        <div className="bg-indigo-600 pb-32">
          <Disclosure
            as="nav"
            className="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none"
          >
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                  <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                    <div className="px-2 flex items-center lg:px-0">
                      <div className="hidden md:block flex-shrink-0">
                        <span className="text-3xl text-white font-bold">
                          One Code Solution
                        </span>
                      </div>
                      <div className="block ml-4 lg:ml-10">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden sm:block lg:ml-4">
                      <div className="flex items-center">
                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative flex-shrink-0">
                          <div>
                            <Menu.Button className="bg-indigo-700 p-2 rounded-lg flex text-sm text-white focus:outline-none focus:ring-2 hover:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <span className="text-white">
                                Welcome,{" "}
                                <span className="text-emerald-300">
                                  {user.name}
                                </span>
                              </span>
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                <a
                                  href="/profile"
                                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 w-full"
                                >
                                  Profile
                                </a>
                              </Menu.Item>
                              <Menu.Item>
                                <button
                                  onClick={() => logout()}
                                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                                >
                                  Logout
                                </button>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1"></div>
                  <div className="pt-4 pb-3 border-t border-indigo-700">
                    <div className="px-5 flex items-center">
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium text-indigo-300">
                          {user.email}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                      <Disclosure.Button
                        as="a"
                        href="/profile"
                        className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                      >
                        Profile
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        onClick={() => logout()}
                        className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                      >
                        Logout
                      </Disclosure.Button>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold text-white text-center">
                {posts ? "Post" : "Profile"}
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              {/* jika single post */}
              {posts && params.postId ? (
                <Posts posts={posts!} loading={loading} id={params.postId} />
              ) : posts ? (
                <>
                  {/* jika multi post */}
                  <Posts posts={currentPosts!} loading={loading} />
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts!.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </>
              ) : (
                <>
                  {/* jika profile */}
                  <Profile user={user} loading={loading} />
                </>
              )}
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;

import React from "react";

const Posts = ({
  posts,
  users,
  loading,
}: {
  posts: any[];
  users: any[];
  loading: boolean;
}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="flow-root mt-6">
      <ul role="list" className="divide-y divide-gray-200">
        {posts.map((post) => (
          <li key={post.id} className="py-5">
            <div className="relative grid grid-cols-3 focus-within:ring-2 focus-within:ring-indigo-500">
              <div className="flex flex-wrap col-span-1 justify-end mx-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  {users.find((user) => user.id === post.userId)?.name}
                </h3>
              </div>
              <div className="flex-wrap flex items-center col-span-2 mx-4">
                <div className="text-sm font-medium text-gray-500 capitalize mb-4">
                  {post.title}
                </div>
                <div className="text-sm font-normal text-gray-800 mb-4">
                  {post.body}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

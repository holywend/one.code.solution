import React from "react";
import { AnnotationIcon } from "@heroicons/react/solid";
import { useParams } from "react-router-dom";

const Posts = ({ posts, loading, id }: { posts: any[]; loading: boolean, id?: string }) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (id) {
    const post = posts.find((post: any) => post.id === parseInt(id));
    console.log("post", post);
    return (
      <div className="relative grid md:grid-cols-3 focus-within:ring-2 focus-within:ring-indigo-500">
        <div className="flex flex-wrap col-span-1 justify-end mx-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-4">
            {post.name}
          </h3>
        </div>
        <div className="flex-wrap flex items-center col-span-2 mx-4">
          <div className="text-sm font-medium text-gray-500 capitalize mb-4">
            {post.title}
          </div>
          <div className="text-sm font-normal text-gray-800 mb-4">
            {post.body}
          </div>
          <div className="flex text-sm font-normal text-gray-400 mb-4">
            <div className="w-32 md:w-48 flex">
              <AnnotationIcon className="w-6 h-6 mr-2" />
              <span className="text-blue-600">
                {" "}
                {post.comments && post.comments.length} comments
              </span>
            </div>
            <a
              href={`/posts/${post.id}`}
              className="ml-4 text-blue-600 hover:text-blue-400"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flow-root mt-6">
        <ul role="list" className="divide-y divide-gray-200">
          {posts.map((post) => (
            <li key={post.id} className="py-5">
              <div className="relative grid md:grid-cols-3 focus-within:ring-2 focus-within:ring-indigo-500">
                <div className="flex flex-wrap col-span-1 justify-end mx-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-4">
                    {post.name}
                  </h3>
                </div>
                <div className="flex-wrap flex items-center col-span-2 mx-4">
                  <div className="text-sm font-medium text-gray-500 capitalize mb-4">
                    {post.title}
                  </div>
                  <div className="text-sm font-normal text-gray-800 mb-4">
                    {post.body}
                  </div>
                  <div className="flex text-sm font-normal text-gray-400 mb-4">
                    <div className="w-32 md:w-48 flex">
                      <AnnotationIcon className="w-6 h-6 mr-2" />
                      <span className="text-blue-600">
                        {" "}
                        {post.comments && post.comments.length} comments
                      </span>
                    </div>
                    <a
                      href={`/posts/${post.id}`}
                      className="ml-4 text-blue-600 hover:text-blue-400"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Posts;

import { AnnotationIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Posts = ({
  posts,
  loading,
  id,
}: {
  posts: any[];
  loading: boolean;
  id?: string;
}) => {
  const [showComment, setShowComment] = useState(false);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-8">
        <div
          className="spinner-border animate-spin inline-block w-48 h-48 border-4 rounded-full"
          role="status"
        ></div>
      </div>
    );
  }
  // display details of the specific post if id exist
  if (id) {
    const post = posts.find((post: any) => post.id === parseInt(id));
    // console.log("post", post);
    return (
      <section id="post" className="flow-root mt-6">
        <div className="relative grid md:grid-cols-3 focus-within:ring-2 focus-within:ring-indigo-500">
          <div className="flex flex-wrap col-span-1 justify-end mx-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {post.name}
            </h3>
          </div>
          <div className="flex-wrap flex-col flex md:col-span-2 mx-4">
            <div className="text-lg font-medium text-gray-500 capitalize mb-4">
              {post.title}
            </div>
            <div className="text-base font-normal text-gray-800 mb-4">
              {post.body}
            </div>

            <div className="text-sm font-normal text-gray-400 mb-4 w-full">
              <div className="flex items-start justify-start">
                <AnnotationIcon className="w-6 h-6 mr-2" />
                <span className="text-blue-600">
                  <button onClick={() => setShowComment(!showComment)}>
                    Shows ({post.comments && post.comments.length}) Comments
                  </button>
                </span>
              </div>
            </div>

            {showComment && (
              <div className="flex flex-wrap w-full">
                {post.comments &&
                  post.comments.map((comment: any, index: number) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-3 my-2 text-gray-800"
                    >
                      <div className="col-span-1 flex p-1">
                        <span className="text-sm font-semibold">
                          {" "}
                          {comment.name}{" "}
                        </span>
                      </div>
                      <div className="col-span-2 p-1">
                        <span className="text-sm">{comment.body}</span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
            <div>
              <a
                href="/"
                className="text-blue-700 font-bold flex flex-wrap mb-4"
              >
                <ChevronLeftIcon className="w-6 h-6" /> <span>Back</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
    // display list of posts if id not exist
  } else {
    return (
      <section id="posts" className="flow-root mt-6">
        <ul role="list" className="divide-y divide-gray-200">
          {posts.map((post) => {
            return (
              <li key={post.id} className="py-5">
                <div className="relative grid md:grid-cols-3 focus-within:ring-2 focus-within:ring-indigo-500">
                  <div className="flex flex-wrap col-span-1 md:justify-end mx-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      {post.name}
                    </h3>
                  </div>
                  <div className="flex-wrap flex items-center md:col-span-2 mx-4">
                    <div className="w-full text-lg text-gray-500 capitalize mb-4">
                      {post.title}
                    </div>
                    <div className="flex text-sm font-normal text-gray-400 mb-4">
                      <div className="w-32 md:w-48 flex">
                        <AnnotationIcon className="w-6 h-6 mr-2" />
                        <span className="text-gray-400">
                          {post.commentsCount} Comments
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
            );
          })}
        </ul>
      </section>
    );
  }
};

export default Posts;

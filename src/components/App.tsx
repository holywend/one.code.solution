import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Toaster } from "react-hot-toast";
import NotFound from "./NotFound";

export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getApiData = async () => {
    setLoading(true);
    // menarik data user, post dan comment dari file json
    const resUsers = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataUsers = await resUsers.json();
    const resPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dataPosts = await resPosts.json();
    const resComments = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const dataComments = await resComments.json();
    // menambahkan field name dan comment pada post
    dataPosts.map(async (post: any) => {
      post.name = dataUsers.find((user: any) => user.id === post.userId).name;
      post.comments = dataComments.filter(
        (comment: any) => comment.postId === post.id
      );
      post.commentsCount = post.comments.length;
      return post;
    });
    setPosts(dataPosts);
    setLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    var user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            {/* force halaman not found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </>
    );
  }
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Dashboard user={user} posts={posts} loading={loading} />}
          />
          <Route
            path="/posts"
            element={<Dashboard user={user} posts={posts} loading={loading} />}
          />
          <Route
            path="/posts/:postId"
            element={<Dashboard user={user} posts={posts} loading={loading} />}
          />
          <Route
            path="/profile"
            element={<Dashboard user={user} loading={loading} />}
          />
          {/* force halaman not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>{" "}
      <Toaster />
    </>
  );
};
export default Home;

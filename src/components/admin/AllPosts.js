import React, { useEffect, useState } from "react";
import { getPosts } from "../../api/common/commonApis";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    return getPosts().then((response) => {
      if (response.status === 200) {
        setPosts(response.data);
      } else {
        console.log(`err`);
      }
    });
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto mt-12 px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">All Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.media_url}
                alt={post.title}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">{post.description}</p>
                <div className="mt-4 flex items-center"></div>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default AllPosts;

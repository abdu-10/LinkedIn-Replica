import React, { useEffect, useState } from "react";
import { getPosts, deletePost  } from "../../api/common/commonApis";

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
  const handleDeletePost = () => {
    deletePost()
      .then((response) => {
        if (response.status === 200) {
          setPosts(posts);
        } else {
          console.log("Deleting post failed.");
        }
      })
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto mt-12 px-80 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">All Posts</h2>
      <div className="grid grid-cols-1 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={post.media_url}
              alt={post.title}
              className="object-fit w-full h-full sm:h-48"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3">
                {post.description}
              </p>
              <div className="mt-3">
                <p className="text-gray-500 text-xs">
                  Posted by: {post.user.role}
                </p>
                  <div className="flex items-center mt-2">
                    <button onClick={handleDeletePost} className="text-red-500 text-xs font-semibold mr-2 px-2 py-1 border border-red-500 rounded-md hover:bg-red-500 hover:text-white">
                      Delete Post
                    </button>
                    <button className="text-blue-500 text-xs font-semibold px-2 py-1 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
                      Contact User
                    </button>
                  </div>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;

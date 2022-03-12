import React, { useState } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

const Comments = () => {
  const URL = "https://jsonplaceholder.typicode.com/comments";

  const [posts, setPosts] = useState([""]);

  const renderItems = () => {
    const val = posts.map((item) => {
      return <div key={item.id}>{item.name}</div>;
    });

    return val;
  };

  const onSubmit = (Term) => {
    // const response = await axios.get(URL, {
    //   params: {
    //     postId: Term,
    //   },
    // });

    const response = axios
      .get(URL, {
        params: {
          postId: Term,
        },
      })
      .then((res) => {
        setPosts(res.data);
      });
  };
  return (
    <div>
      <SearchBar onSearchSubmit={onSubmit} />
      {renderItems()}
    </div>
  );
};

export default Comments;

import React from "react";
import { useFetchAllpostQuery } from "../../../services/api";
import { Link } from "react-router-dom";
import PostOne from "./PostOne";
import Loading from "../../../components/Loading";
import Skeleton from "../../../components/Skeleton";
const ListPost = () => {
  const { data, isLoading, isError } = useFetchAllpostQuery();
  console.log(data);
  return isLoading ? <Skeleton /> : (
    <>

      {data?.data.map((item) => (
        <>
          <PostOne
            key={item._id}
            title={item.title}
            creatorname={item.creator.username}
            description={item.description}
            postimg={item.image}
            creatorimg={item.creator.image}
            commentCount={item.commentCount}
            likeCount={item.likes}
          />
        </>
      ))}
    </>
  );
};

export default ListPost;


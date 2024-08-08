import { POST_API_URL } from "../(admin)/util/apiConstants";
import PostCard from "./sections/posts/PostCard";

const getPosts = async (id) => {
  const API_URL = process.env.API_URL

  try {
    const res = await fetch(`${API_URL}${POST_API_URL}/`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
};
const PostsList = async () => {
  const { data } = await getPosts();
  return (
    <>
      <PostCard posts={data} />
    </>
  )
}

export default PostsList
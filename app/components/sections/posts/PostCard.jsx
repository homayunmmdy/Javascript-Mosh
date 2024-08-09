import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs"
import { CiEdit } from "react-icons/ci";
import { DeleteBlock } from "../../elements";

const PostCard = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <div className="card bg-base-100 shadow-xl mb-5 rounded-xl border border-gray-200">
          <div className="border-b border-gray-200 flex justify-between items-center p-3">
            <h2 className="font-bold">{post.username}</h2>
            <div className="dropdown  dropdown-end">
              <div tabIndex="0" role="button" ><BsThreeDotsVertical className="text-black" size={18} /></div>
              <ul tabIndex="0" className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li className="flex justify-between">
                  <Link className="flex justify-between" href={`/post/${post._id}`}>
                    <span>Edit the post</span>
                    <CiEdit size={25} />
                  </Link>
                </li>
                <li className="flex justify-between">
                  <DeleteBlock path="posts" id={post._id} />
                </li>
              </ul>
            </div>
          </div>
          <a href={`/Posts/${post._id}`} >
            {post.imgurl &&
              <figure className="px-5 pt-5">
                <img
                  src={post.imgurl}
                  alt={post.imgAlt}
                  title={post.imgAlt}
                  className="rounded-xl aspect-video bg-gray-600 object-cover"
                  width={640}
                  height={360}
                  layout="responsive"
                  loading="lazy"
                />
              </figure>
            }
            <div className="card-body items-center text-center p-5">
              <p className="text-slate-950	">{post.body.slice(0, 60)}</p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default PostCard;
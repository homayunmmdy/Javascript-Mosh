import Image from "next/image";

const PostCard = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <div className="card bg-base-100 shadow-xl mb-5 rounded-xl">
          <a href={`/Posts/${post._id}`} >
            {post.imgurl &&
              <figure className="px-5 pt-5">
                <Image
                  src={post.imgurl}
                  alt={post.imgAlt}
                  title={post.imgAlt}
                  blurDataURL={post.imgurl}
                  placeholder="blur"
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
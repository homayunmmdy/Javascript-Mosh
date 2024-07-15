import Image from "next/image";

const PostCard = ({ post }) => {
    return (
      <>
        <div className="card  bg-base-100 shadow-xl md:hover:scale-105 rounded-xl transition-transform ease-in-out duration-500">
          <a href={`/Posts/${post._id}`} >
          <figure className="px-5 pt-5">
            <Image
              src={post.imgurl}
              alt={post.title}
              blurDataURL={post.imgurl}
              placeholder="blur"
              className="rounded-xl aspect-video bg-gray-600 object-cover"
              width={640}
              height={360}
              layout="responsive"
              loading="lazy"            
            />
          </figure>
          <div className="card-body items-center text-center p-5">
            <h2 className="card-title text-slate-950	">{post.title.slice(0, 100)}</h2>
            <p className="text-slate-950	">{post.description.slice(0, 60)}</p>
          </div>
          </a>
        </div>
      </>
    );
  };
  
  export default PostCard;
const PostCard = ({ post }) => {
    return (
      <>
        <div className="card  bg-base-100 shadow-xl hover:scale-105 rounded-xl transition-transform ease-in-out duration-500">
          <a href={`/Posts/${post._id}`} >
          <figure className="px-5 pt-5">
            <img
              src={post.imgurl}
              alt={post.title}
              className="rounded-xl aspect-video bg-gray-600 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-5">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
          </div>
          </a>
        </div>
      </>
    );
  };
  
  export default PostCard;
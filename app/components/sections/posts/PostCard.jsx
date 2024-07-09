import React from 'react'

const BlogsCard = ({ post }) => {
    return (
        <>
            <a href={`/Posts/${post._id}`} title={post.title}
                alt={post.title} className="group card bg-base-100 border-2 border-slate-100 hover:border-blue-500 delay-100 ease-in-out duration-300 shadow-xl" key={post._id}>
                <div className="px-10 pt-10">
                    <img
                        src={post.imgurl}
                        title={post.title}
                        alt={post.title}
                        className="rounded-xl transition duration-300 delay-100 group-hover:scale-105 bg-gray-600" />
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title transition duration-300 delay-100 group-hover:text-blue-500">{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            </a>
        </>
    )
}

export default BlogsCard
"use client";
import RecentPosts from "@/app/components/RecentPosts";
import PostSeclton from "./PostSeclton";
import useSinglePost from "@/app/hooks/useSinglePost";
import Image from "next/image";
import FormatTime from "@/app/components/elements/FormatTime";

const Post = () => {
    const post = useSinglePost();

    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    };

    if (!post) {
        return <PostSeclton />
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="bg-base-200 py-8">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{post.title}</h1>
                        <p className="text-lg  text-center my-3"><FormatTime timestamp={post.createdAt} options={options} /></p>

                    </div>
                </div>
                <div className="bg-white py-8">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row">
                        <div className="w-full md:w-3/4 px-4">
                            <Image
                                className="w-full p-3 aspect-video rounded-3xl"
                                src={post.imgurl}
                                title={post.title}
                                alt={post.title}
                                blurDataURL={post.imgurl}
                                placeholder="blur"
                                width={880}
                                height={500}
                                layout="responsive"
                                loading="lazy"                              
                            />
                            <div className="prose max-w-none">
                                <div id="pos-article-display-card-94403"></div>
                                <p className="p-3 text-lg leading-9	">{post.body}</p>
                                <div id="pos-article-text-card-94410"></div>
                            </div>
                            <div id="pos-article-display-94970"></div>
                        </div>
                        <div className="w-full md:w-1/4 px-4">
                            <RecentPosts />
                            <div id="pos-article-display-94981"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
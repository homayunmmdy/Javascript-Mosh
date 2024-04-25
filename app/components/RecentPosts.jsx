"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaCircleDot } from "react-icons/fa6";
import Link from "next/link";

const RecentPosts = () => {
    const [posts, setPosts] = useState([]);
    const [recentSize] = useState(-5);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postResponse = await axios.get(`/api/Posts`);
                setPosts(postResponse.data.posts.slice(recentSize));

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [recentSize]);

    return (
        <>
            <div className="bg-gray-100 p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Recent Posts</h2>
                <ul className="list-none">
                    {posts && (
                        <div class="grid grid-cols-1  gap-y-5 gap-x-3 items-start ">
                            {posts?.map((post) => (
                                <Link href={`/Posts/${post._id}`} >
                                    <li class="flex p-2 gap-2 items-center border-dotted border-b-2 border-gray-400 hover:border-gray-900 hover:text-sky-600 hover:border-solid">
                                        <FaCircleDot color='#398DEF' size={25}/>
                                        {post.title}
                                    </li>
                                </Link>
                            ))}
                        </div>
                    )}
                </ul>
            </div>



        </>
    )
}

export default RecentPosts
'use client'
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import APIClient from "../(admin)/util/apiClient";
import { POST_API_URL } from "../(admin)/util/apiConstants";

const useSinglePost = () => {
    const pathname = usePathname();
    const id = pathname.slice(7);
    const [post, setPost] = useState();
    const apiClient = new APIClient(`${POST_API_URL}`);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postData = await apiClient.get(`/${id}`);
                setPost(postData);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPost();
    }, [id]);

    return post;
};

export default useSinglePost;
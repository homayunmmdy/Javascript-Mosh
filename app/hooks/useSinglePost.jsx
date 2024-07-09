'use client'
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import APIClient from "../(admin)/util/apiClient";

const useSinglePost = () => {
    const pathname = usePathname();
    const id = pathname.slice(7);
    const [post, setPost] = useState();
    const apiClient = new APIClient("/api/Posts");

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
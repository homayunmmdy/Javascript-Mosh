"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetLatestPosts = (recentSize) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const postResponse = await axios.get(`/api/Posts`);
                setPosts(postResponse.data.posts.slice(recentSize));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [recentSize]);

    return { posts, loading };
};

export default useGetLatestPosts;
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { POST_API_URL } from '../(admin)/util/apiConstants';

const useGetLatestPosts = (recentSize) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const postResponse = await axios.get(`${POST_API_URL}`);
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
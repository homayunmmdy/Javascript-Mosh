"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import PostCardScelton from "./PostCardScelton";

const ServicePosts = ({secid}) => {
    const [tickets, setTickets] = useState([]);
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(12);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const ticketResponse = await axios.get(`/api/Posts`);
                setTickets(ticketResponse.data.posts);
                setFilteredTickets(ticketResponse.data.posts.slice(0, pageSize));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [pageSize]);

    const handlePageChange = (pageNumber) => {
        setLoading(true)
        setCurrentPage(pageNumber);
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = pageNumber * pageSize;
        setFilteredTickets(tickets.slice(startIndex, endIndex));
    };
    const filteredData = tickets.filter((item) => item.section === `${secid}`);

    return (
        <div className="w-[98%] md:w-[95%] mx-auto py-4">
            {loading ? <PostCardScelton /> :
                (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredData.map((filteredTicket) => (
                                <PostCard
                                    key={filteredTicket.id} 
                                    post={filteredTicket}
                                />
                            ))}
                        </div>
                        {filteredData.length >= 12 && <div className="flex justify-center mt-4">
                            {Array.from({ length: Math.ceil(tickets.length / pageSize) }, (_, i) => (
                                <button
                                    key={i}
                                    className={`mx-1 p-2 border ${currentPage === i + 1 ? "bg-blue-500 text-white" : "border-gray-300"
                                        } rounded`}
                                    onClick={() => handlePageChange(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>}
                    </>
                )
            }
        </div>
    );
};

export default ServicePosts;
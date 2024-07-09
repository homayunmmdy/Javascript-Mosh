"use client"
import React from 'react'
import PublicationsSkeleton from './PostsSkeleton'
import useFetch from '@/app/(admin)/hooks/useFetch'
import PostCard from '../../PostCard'
import GradientBtn from '../../elements/GradientBtn'

const Posts = () => {
    const { data, loading } = useFetch("/api/Posts");
    const postsData = data?.slice(-12)
    if (loading) {
        return <PublicationsSkeleton />
    }
    return (
        <>
            <div className=" mx-auto py-6">
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                    {postsData?.map(publication => (
                        <PostCard post={publication} />
                    ))}
                </div>
                <div className='flex justify-center items-center mt-6'>
                    <GradientBtn link="/archive" title="see more" />
                </div>
            </div>

        </>
    )
}

export default Posts
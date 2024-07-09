"use client"
import React from 'react'
import PublicationsSkeleton from './PostsSkeleton'
import useFetch from '@/app/(admin)/hooks/useFetch'
import PostCard from '../../PostCard'
import GradientBtn from '../../elements/GradientBtn'
import { POST_API_URL } from '@/app/(admin)/util/apiConstants'
import useGetSection from '@/app/hooks/useGetSection'

const Posts = () => {
    const { data, loading } = useGetSection(POST_API_URL, -12, 1);

    if (loading) {
        return <PublicationsSkeleton />
    }
    return (
        <>
            <div className=" mx-auto py-6">
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                    {data?.map(publication => (
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
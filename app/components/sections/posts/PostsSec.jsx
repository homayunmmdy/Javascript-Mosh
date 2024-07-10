"use client"
import { POST_API_URL } from '@/app/(admin)/util/apiConstants'
import useGetSection from '@/app/hooks/useGetSection'
import PostCard from '../../PostCard'
import Heading from '../../elements/Heading'
import PostsSkeleton from './PostsSkeleton'

const PostsSec = ({ title, secid }) => {
    const { data, loading } = useGetSection(POST_API_URL, -4, secid);

    if (loading) {
        return <PostsSkeleton />
    }
    return (
        <>
            <Heading title={title} />
            <div className=" mx-auto py-6">
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                    {data?.map(publication => (
                        <PostCard post={publication} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default PostsSec
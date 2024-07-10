"use client"
import useGetLatestPosts from '@/app/hooks/useGetLatestPosts'
import PostCard from '../../PostCard'
import GradientBtn from '../../elements/GradientBtn'
import PublicationsSkeleton from './PostsSkeleton'

const LatestPosts = () => {
    const [recentSize] = useState(-5);
    const { posts, loading } = useGetLatestPosts(recentSize);

    if (loading) {
        return <PublicationsSkeleton />
    }
    return (
        <>
            <div className=" mx-auto py-6">
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                    {posts?.map(post => (
                        <PostCard post={post} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default LatestPosts
"use client";
import useFetch from "@/app/(admin)/hooks/useFetch";
import { POST_API_URL } from "@/app/(admin)/util/apiConstants";
import Heading from "@/app/components/elements/Heading";
import PostCard from "@/app/components/sections/posts/PostCard";
import { PostsSkeleton } from "@/app/components/sections";

const ArchiveSections = () => {
  const { data, loading } = useFetch(POST_API_URL);



  if (loading) {
    return <div className="w-[94%] md:w-[92%] mx-auto py-14"><PostsSkeleton /></div>;
  }

  return (
    <div className="w-[94%] md:w-[92%] mx-auto mt-14">
        <Heading title="آرشیو" />
            <div className=" mx-auto py-6">
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                    {data?.map(post => (
                        <PostCard post={post} />
                    ))}
                </div>
            </div>
    </div>
  );
};



export default ArchiveSections;
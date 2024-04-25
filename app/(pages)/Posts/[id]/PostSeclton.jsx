"use client";
const PostSeclton = () => {


    return (
        <>
            <div className="flex flex-col">
                <div className="bg-base-200 py-8">
                    <div className="container mx-auto px-4">
                        <div className="skeleton h-6 w-full mb-4"></div>
                    </div>
                </div>
                <div className="bg-white py-8">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row">
                        <div className="w-full md:w-3/4 px-4">
                            <div className="skeleton aspect-video rounded-3xl w-full"></div>
                            <div className="prose max-w-none">
                                <div className="p-4">
                                    <div className="skeleton h-4 w-[80%] mb-4"></div>
                                    <div className="skeleton h-4 w-full mb-4"></div>
                                    <div className="skeleton h-4 w-full mb-4"></div>
                                    <div className="skeleton h-4 w-full mb-4"></div>
                                    <div className="skeleton h-4 w-full mb-4"></div>
                                    <div className="skeleton h-4 w-full mb-4"></div>
                                    <div className="skeleton h-4 w-full mb-4"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 px-4">
                        <div className="skeleton h-96  rounded-3xl w-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostSeclton;
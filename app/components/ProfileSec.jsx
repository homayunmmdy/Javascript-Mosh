import React from 'react'
import { currentUser } from "@clerk/nextjs/server";
import { MdOutlineEmail } from 'react-icons/md';

const ProfileSec = async () => {
    const user = await currentUser();
    return (
        <>
            <div className="pt-2 px-2">
                <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <div className="border-b px-4 pb-6">
                        <div className="text-center my-4">
                            {user?.hasImage === true ? <img className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                                src={user?.imageUrl} alt={`${user?.username} img`} /> : <span className="block h-32 w-32 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4" ></span>}
                            <div className="py-2">
                                <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{user?.username}</h3>
                                {/* <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                                    <MdOutlineEmail size={20} />
                                    {user?.emailAddresses}
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSec
import ProfilePosts from '@/app/components/ProfilePosts'
import React from 'react'

const ProfilePage = () => {
    return (
        <>
            <div className="flex flex-wrap md:flex-nowrap gap-3">
                <div className="hidden md:block md:w-[25%]">
                    right
                </div>
                <div className="w-full md:w-[50%]">
                    <ProfilePosts />
                </div>
                <div className="hidden md:block md:w-[25%]">
                    Left
                </div>
            </div>
        </>
    )
}

export default ProfilePage
import PageTitle from '@/app/components/PageTitle'
import ServicePosts from '@/app/components/ServicePosts'
import React from 'react'

const ContentCreationPage = () => {
    return (
        <div>
            <PageTitle titr="Content Creation" title="Description" background="bg5.jpg" />
            <ServicePosts secid={5} />
        </div>
    )
}

export default ContentCreationPage
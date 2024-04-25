import PageTitle from '@/app/components/PageTitle'
import ServicePosts from '@/app/components/ServicePosts'
import React from 'react'

const ContentCreationPage = () => {
    return (
        <div>
            <PageTitle titr="Content Creation" title="Explore AI-driven tools sfor video editing , image generation , and audio synthesis to bring your idea to life." background="bg5.jpg" />
            <ServicePosts secid={5} />
        </div>
    )
}

export default ContentCreationPage
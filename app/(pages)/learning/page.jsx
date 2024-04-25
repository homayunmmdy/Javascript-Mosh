import PageTitle from '@/app/components/PageTitle'
import ServicePosts from '@/app/components/ServicePosts'
import React from 'react'

const LearningPage = () => {
    return (
        <div>
            <PageTitle titr="Learning" title="Dive deep into the world  of artificial inteligence, where every line of code shaps the future." background="bg4.jpg" />
            <ServicePosts secid={4} />
        </div>
    )
}

export default LearningPage
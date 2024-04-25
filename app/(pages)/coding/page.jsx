import PageTitle from '@/app/components/PageTitle'
import ServicePosts from '@/app/components/ServicePosts'
import React from 'react'

const CodingPage = () => {
    return (
        <div>
            <PageTitle titr="Programming" title="Let AI guide you in mastering new languages and frameworks, transforming the way you code and innovate." background="bg3.jpg" />
            <ServicePosts secid={3} />
        </div>
    )
}

export default CodingPage
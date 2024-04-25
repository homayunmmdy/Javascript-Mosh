import PageTitle from '@/app/components/PageTitle'
import ServicePosts from '@/app/components/ServicePosts'
import React from 'react'

const BusinessPage = () => {
    return (
        <div>
            <PageTitle titr="Business" title="Empower your business with transformative capabilites of AI.Enhance streamline operations and unlock new insights." background="bg2.jpg" />
            <ServicePosts secid={2} />
        </div>
    )
}

export default BusinessPage
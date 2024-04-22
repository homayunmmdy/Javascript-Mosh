import PageTitle from '@/app/components/PageTitle'
import ServicePosts from '@/app/components/ServicePosts'
import React from 'react'

const BusinessPage = () => {
    return (
        <div>
            <PageTitle titr="Business" title="Description" background="bg2.jpg" />
            <ServicePosts secid={2} />
        </div>
    )
}

export default BusinessPage
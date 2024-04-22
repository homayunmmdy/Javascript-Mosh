import PageTitle from '@/app/components/PageTitle'
import ServicePosts from '@/app/components/ServicePosts'
import React from 'react'

const CodingPage = () => {
    return (
        <div>
            <PageTitle titr="Programming" title="Description" background="bg3.jpg" />
            <ServicePosts secid={3} />
        </div>
    )
}

export default CodingPage
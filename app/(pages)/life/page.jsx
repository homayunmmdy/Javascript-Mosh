import PageTitle from '@/app/components/PageTitle'
import ServicePosts from '@/app/components/ServicePosts'
import React from 'react'

const LifePage = () => {
    return (
        <div>
            <PageTitle titr="Life" title="Description" background="bg4.jpg" />
            <ServicePosts secid={4} />
        </div>
    )
}

export default LifePage
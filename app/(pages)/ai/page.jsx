import PageTitle from '@/app/components/PageTitle'
import ServicePosts from '@/app/components/ServicePosts'
import React from 'react'

const AIPage = () => {
    return (
        <div>
            <PageTitle titr="Artificial Intelligence" title="Description" background="bg1.jpg" />
            <ServicePosts secid={1}/>
        </div>
    )
}

export default AIPage
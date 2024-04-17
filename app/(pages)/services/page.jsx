import PageDescription from '@/app/components/PageDescription'
import PageTitle from '@/app/components/PageTitle'
import React from 'react'

const Services = () => {
  return (
    <div>
      <PageTitle titr="services" title="High-Impact Services" />
      <div className='px-5 w-[98%] md:w-[92%] mx-auto'>
        <PageDescription title="High-impact services to help your business" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eos quas blanditiis, quos sint nostrum fugit aperiam inventore optio itaque molestias corporis, ipsa tenetur eligendi nihil iste porro, natus culpa consequuntur? Maxime, corporis tempore. Sed tenetur veritatis velit recusandae eum, molestiae voluptate ducimus laudantium esse illo doloribus atque eligendi deleniti iusto." />
      </div>
    </div>
  )
}

export default Services
import React from 'react'
import PageTopHeading from '../components/PageTopHeading'
import Container from '../components/Container'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import useFetchBlogData from '../hooks/useFetchBlogData';


const Blog = () => {
  const { blogData, loading, error } = useFetchBlogData();
  return (
    <div className='w-full'>
      <Container reqPadding={true} className='flex flex-col gap-10 md:gap-14 xl:gap-16 w-full overflow-hidden'>
        <section className='border-b pb-10 lg:pb-14 xl:pb-16'>
          <PageTopHeading
            hText='A Blog About Software Development And Life'
            pText='Welcome to my blog. Subscribe and get my latest blog post in your inbox.'
            reqBtn={false}
            reqSubEmail={true}
          />
        </section>
        <section><Blogs blogData={blogData} showTitle={false} loading={loading} /></section>
        <section><Footer/></section>
      </Container>
    </div>
  )
}

export default Blog

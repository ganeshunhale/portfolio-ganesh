import React from 'react'
import PageTopHeading from '../components/PageTopHeading'
import Container from '../components/Container'
import { FaRegFilePdf } from "react-icons/fa6";
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';

const Resume = () => {
  return (
    <div className='w-full'>
      <Container reqPadding={true} className='flex flex-col gap-10 md:gap-14 xl:gap-16 w-full overflow-hidden'>
        <section className='border-b pb-10 lg:pb-14 xl:pb-16'><PageTopHeading hText='Online Resume' btnTitle='Download PDF Version' icon={<FaRegFilePdf/>} /></section>
        <section><ProfileCard/></section>
        <section><Footer/></section>
      </Container>
    </div>
  )
}

export default Resume

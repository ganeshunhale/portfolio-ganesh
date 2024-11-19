import React from 'react'
import TitleHeading from '../components/TitleHeading'
import Container from '../components/Container'
import PageTopHeading from '../components/PageTopHeading'
import ContactDetails from '../components/ContactDetails'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className='w-full'>
      <Container reqPadding={true} className='flex flex-col gap-10 md:gap-14 xl:gap-16 w-full overflow-hidden'>
        <section className='border-b pb-10 lg:pb-14 xl:pb-16'>
          <PageTopHeading
            hText='Contact'
            pText={
              <p>
                Interested in hiring me for your project or just want to say hi?
                You can fill in the contact form below or send me an email to {" "}
                <a href="mailto:Ganesh.unhale.55@gmail.com" className="text-blue-500 underline">Ganesh.unhale.55@gmail.com</a>.
                Want to get connected? Follow me on the social channels below.
              </p>
            }
            reqBtn={false}
            reqSocial={true}
          />
        </section>
        <section><ContactDetails/></section>
        <section><ContactForm/></section>
        <section><Footer/></section>
      </Container>
    </div>
  )
}

export default Contact

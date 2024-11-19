import React from 'react'
import PageTop from '../components/PageTopHeading'
import Container from '../components/Container'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import useFetchProjectData from '../hooks/useFetchProjectData'
import Loader from '../components/Loader'

const Portfolio = () => {
  const { projectData, loading: projectLoading, error: projectError } = useFetchProjectData()
 
  return (
    <div className="w-full">
      <Container reqPadding={true} className="w-full flex flex-col gap-20">
        <section className="px-0 md:px-4 m-auto pb-10 lg:pb-14 xl:pb-20 border-b w-full">
          <PageTop
            pText="With many years in web development, I acquired extensive experience working on projects across multiple industries and technologies. Let me show you my best creations."
            hText="A collection of my best projects"
          />
        </section>

        <section>

          <Projects commingData={projectData.slice(0, 4)} reqFilterHeader={true} titleHeading={false} />

        </section>

        <section>
          <Footer />
        </section>
      </Container>
    </div>
  )
}

export default Portfolio

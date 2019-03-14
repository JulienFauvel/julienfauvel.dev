import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import JobCard from '../components/JobCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Jobs from '../views/Jobs'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const JobsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={4}>
      <Hero offset={0}>
        <BigTitle>
          Hi there, <br /> I'm Julien Fauvel.
        </BigTitle>
        <Subtitle>
          Currently working at <a href="https://apizr.fr">APIZR</a> as a software developper.
        </Subtitle>
      </Hero>
      <Jobs offset={1}>
        <Title>Previous jobs</Title>
        <JobsWrapper>
          <JobCard
            title="Data engineer"
            subtitle="La Redoute (1 year, 2016 - 2017)"
            bg="linear-gradient(to bottom right, #644 10%, #ffb856 80%)"
          >
            <div>
              <div>Python, Django, Google Cloud Platform</div>
              <div>Node.js, Vue.js</div>
            </div>
          </JobCard>
          <JobCard
            title="Fullstack developper"
            subtitle="Electricité De France (3 months, 2015)"
            bg="linear-gradient(to bottom left, #644 10%, #ffb856 80%)"
          >
            <div>PHP, JavaScript</div>
          </JobCard>
          <JobCard
            title="Marketplace support"
            subtitle="La Redoute (1 year, 2015 - 2016)"
            bg="linear-gradient(to top right, #644 10%, #ffb856 80%)"
          >
            <div>XML, SOAP</div>
          </JobCard>
          <JobCard
            title="VBA Developper"
            subtitle="Sidel Blowing (1 month, Summer 2014)"
            bg="linear-gradient(to top left, #644 10%, #ffb856 80%)"
          >
            <div>Excel, Visual Basic for Applications</div>
          </JobCard>
        </JobsWrapper>
      </Jobs>
      {/* <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. Winky face.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque reiciendis laudantium explicabo quod sed quia
          vitae, necessitatibus, voluptatem, placeat consequuntur repudiandae vero asperiores eaque nihil alias nam nam
          nam maiores ipsum ab.
        </AboutDesc>
      </About> */}
      <Contact offset={3}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            You can contact me through this <a href="https://julienfauvel.typeform.com/to/QAf9da">form</a>.
          </ContactText>
        </Inner>
        <Footer>
          <a href="https://github.com/JulienFauvel/julienfauvel.dev">Github Repository</a>. Made by{' '}
          <a href="https://julienfauvel.dev">Julien Fauvel</a> &copy; 2019.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`
const Subtitle = styled.div`
  ${tw`text-white text-md md:text-xl tracking-wide font-sans`};
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
`

const JobCard = ({ title, subtitle, children, bg }) => (
  <Wrapper bg={bg}>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <Text>{children}</Text>
  </Wrapper>
)

export default JobCard

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}

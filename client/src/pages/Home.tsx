import React from 'react'
import FooterContainer from '../components/Footer/FooterContainer'
import HomeContainer from '../components/Home/HomeContainer'

type Props = {}

export default function Home({ }: Props) {
  return (
    <>
      <HomeContainer />
      <FooterContainer />
    </>
  )
}
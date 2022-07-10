import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { COLORS } from '../lib/design-tokens'

const MainWrapper = styled.main`
  min-height: 100%;
  background-color: ${COLORS.ocean};
  display: grid;
  place-content: center;
`

const Heading = styled.h1`
  color: ${COLORS.white};
  font-size: 128px;
`

type HomePageProps = {}
const HomePage: NextPage<HomePageProps> = () => {
  return (
    <>
      <Head>
        <title>Template Next App - Home Page</title>
        <meta name="description" content="Template" />
      </Head>

      <MainWrapper>
        <Heading>Get to hacking!</Heading>
      </MainWrapper>
    </>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {},
  }
}

import React from 'react'
import Header from '../components/Header'
import Options from '../components/Options'
import MainCard from '../components/MainCard'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Options />
        <MainCard />
        <section id='adCard'>
          <img src="" alt="" />
        </section>
      </main>
    </>
  )
}

export default Home
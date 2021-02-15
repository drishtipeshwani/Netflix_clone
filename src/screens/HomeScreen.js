import React from 'react'
import './HomeScreen.css'
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../Request'
import Row from '../Row'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      {/* Navbar */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/*Row*/}
      <Row
        className='first_row'
        title='NETFLIX ORIGINALS'
        fetchURl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchURl={requests.fetchTrending} />
      <Row title='Top Rated' fetchURl={requests.fetchTopRated} />
      <Row title='Comedy Movies' fetchURl={requests.fetchComedyMovies} />
      <Row title='Romance movies' fetchURl={requests.fetchRomanceMovies} />
      <Row title='Action Movies' fetchURl={requests.fetchActionMovies} />
      <Row title='Horror Movies' fetchURl={requests.fetchHorrorMovies} />
      <Row title='Documentaries' fetchURl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen

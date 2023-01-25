import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Home from './Components/Home';
import Info from './Components/Info';
import Links from './Components/Links';
import About from './Components/About';
import './App.css';



function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search the Database!')
  const [data, setData] = useState([])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
}

useEffect(() => {
  if (search) {
  const fetchData = async () => {
    const BASE_URL = 'https://eldenring.fanapis.com/api/'
    const encodedSearchTerm = encodeURIComponent(search)
    const url = BASE_URL + encodedSearchTerm
    const response = await fetch(url)
    const data = await response.json()

    if (data.results.length > 0) {
      setData(data.results)
    } else {
      setMessage('Results not found')
    }
    console.log(data)
  }

    fetchData()
  }
}, [search])

  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href='/'>Elden Ring Encyclopedia</Navbar.Brand>
            <Nav defaultActiveKey='/'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/info'>Info</Link>
                <Link to='/links'>Links</Link>
            </Nav>
          </Navbar>
          </Container>
          <div className='display'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/info' element={<Info handleSearch={handleSearch}/>} />
              <Route path='/links' element={<Links />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;

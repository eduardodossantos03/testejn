import { useState } from 'react'
import Home from './components/home'
import Header from './components/Header'
import Search from './components/Search'
import Parceria from './components/Parceria'
import Form from './components/Form'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Produtos from './components/Produtos'
import Modal from './components/modal'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home />
     <Banner />
     <Header />
     <Search />
     <Modal />
     <Search />
     <Parceria />
     <Modal />
     <Form />
     <Footer />
    </>
  )
}

export default App

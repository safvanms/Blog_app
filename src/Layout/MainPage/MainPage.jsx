import React from 'react'
import './mainPage.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Blog from '../../Components/Blog/Blog'

export default function MainPage() {
  return (
    <div>
      <Header />
      <Blog />
      <Footer />
    </div>
  )
}

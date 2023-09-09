import React from 'react'
import Footer from '../footer'
import Header from '../header'
import "./style.css"


const Main = (props) => {
  return (
    <div className="container">
    <Header />
    <main>{props.children}</main>
    <Footer />
  </div>
  )
}

export default Main
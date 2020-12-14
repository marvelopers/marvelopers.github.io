import * as React from "react"
import { GlobalStyle } from "../../styles/GlobalStyle"
import Footer from "../footer/Footer"
import Header from "../header/Header"


const Layout = ({ children }) =>{
  return(
    <>
      <GlobalStyle/>
      <Header />
        {children}
      <Footer/>
    </>
  )
}
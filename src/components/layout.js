import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout

import React from "react"
import Header from "./src/components/header"
import Footer from "./src/components/footer"
import Layout from "./src/components/layout"

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <main
        className="main"
        style={{
          minHeight: `${window.innerHeight}px`,
        }}
      >
        <Header />
        <Layout {...props}>{element}</Layout>
        <Footer />
      </main>
    </>
  )
}

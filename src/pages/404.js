import React from "react"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <div key="404">
    <SEO title="404: Not found" />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <h1>PAGE NOT FOUND</h1>
    </div>
  </div>
)

export default NotFoundPage

const fs = require("fs")
const express = require("express")
const reactPdf = require("@progress/kendo-react-pdf")

exports.onCreateDevServer = ({ app }) => {
  app.use(express.urlencoded())

  app.post("/save", function(req, res) {
    console.log(req.body)
    const pdfData = Buffer.from(req.body.base64.toString("utf-8"), "base64")
    fs.writeFile(`${__dirname}/static/${req.body.fileName}`, pdfData, function(
      err
    ) {
      if (err) {
        console.log("ERROR")
        return console.log(err)
      }

      console.log("The file was saved!")
    })
    res.set("Content-Disposition", "inline; filename=" + req.body.fileName)
    res.set("Content-Type", "application/pdf")
    res.send(pdfData)
  })
}

const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))

exports.onCreatePage = ({ page, actions }) => {
  console.log("CREATEPAGE")
  console.log(page.path)
  const { createPage, deletePage } = actions

  const oldPage = Object.assign({}, page)
  page.path = replacePath(page.path)
  if (page.path !== oldPage.path) {
    deletePage(oldPage)
    createPage(page)
  }

  if (page.path === "/resume") {
    console.log("RESUME")
    console.log(page)
    // reactPdf.savePdf()
  }
}

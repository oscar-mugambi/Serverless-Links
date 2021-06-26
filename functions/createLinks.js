const axios = require("axios")
require("dotenv").config()
const { CREATE_LINK } = require("./utils/linkQuery.js")
const sendQuery = require("./utils/sendQuery.js")
const formattedResponse = require("./utils/formattedResponse")

exports.handler = async (event) => {
  const { name, url, description } = JSON.parse(event.body)
  const variables = { name, url, description, archived: false }

  try {
    const { createLink: createdLink } = await sendQuery(CREATE_LINK, variables)
    return formattedResponse(200, createdLink)
  } catch (error) {
    console.log(error)
    return formattedResponse(500, { err: "Something went wrong" })
  }
}

const axios = require("axios")
require("dotenv").config()
const { DELETE_LINK } = require("./utils/linkQuery.js")
const sendQuery = require("./utils/sendQuery.js")
const formattedResponse = require("./utils/formattedResponse")

exports.handler = async (event) => {
  const { id } = JSON.parse(event.body)
  const variables = { id }

  try {
    const { deleteLink: deletedLink } = await sendQuery(DELETE_LINK, variables)
    return formattedResponse(200, { id: deletedLink })
  } catch (error) {
    console.log(error)
    return formattedResponse(500, { err: "Something went wrong" })
  }
}

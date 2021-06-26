const axios = require("axios")
require("dotenv").config()
const { UPDATE_LINK } = require("./utils/linkQuery.js")
const sendQuery = require("./utils/sendQuery.js")
const formattedResponse = require("./utils/formattedResponse")

exports.handler = async (event) => {
  const { name, url, description, _id: id, archived } = JSON.parse(event.body)
  const variables = { name, url, description, archived, id }

  try {
    const { updateLink: updatedLink } = await sendQuery(UPDATE_LINK, variables)
    return formattedResponse(200, updatedLink)
  } catch (error) {
    console.log(error)
    return formattedResponse(500, { err: "Something went wrong" })
  }
}

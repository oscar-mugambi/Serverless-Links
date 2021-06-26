import React from "react"

const LinkCard = ({ link, refreshLinks }) => {
  const archiveLink = async () => {
    link.archived = true

    try {
      await fetch("/.netlify/functions/updateQuery", {
        method: "PUT",
        body: JSON.stringify(link),
      })
      refreshLinks()
    } catch (error) {
      console.log(error)
    }
  }
  const deleteLink = async () => {
    const id = link._id

    try {
      await fetch("/.netlify/functions/deleteQuery", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      })
      refreshLinks()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="card">
      <div className="card">
        <div className="card-header">{link.name}</div>
        <div className="card-body">
          <a href={link.url}>{link.url}</a>
          <p>{link.description}</p>
        </div>
      </div>
      <div className="card-footer">
        <button onClick={archiveLink} className="btn btn-warning mr-2">
          Archive
        </button>
        <button onClick={deleteLink} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  )
}

export default LinkCard

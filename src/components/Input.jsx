import React from 'react'

const Input = (props) => {
  return (
    <input
        style={{
            width: "95%",
            minWidth: "200px",
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid grey",
            outline: "none",
            marginBottom: "0.5rem",
        }}
        {...props}
    />
  )
}

export default Input
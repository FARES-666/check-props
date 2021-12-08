import React from 'react'

const FullName = ({ name }) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Name : {name.FullName} </h1>
        </div>
    )
}

export default FullName

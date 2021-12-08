import React from 'react'

const Profession = ({profession}) => {
    return (
        <div  style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
             <h2>Profession : {profession.Profession}</h2>
        </div>
    )
}

export default Profession

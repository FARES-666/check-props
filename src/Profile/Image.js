import React from 'react'
import './Image.css'
const Image = ({ children}) => {
    return (
        <div className="image" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            {children}
        </div>
    )
}
export default Image

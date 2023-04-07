import React from 'react'
import { useParams } from 'react-router-dom'

function Contact() {
  const {name,id}=useParams();
 
  return (
    <div>
      <h1>{`Hell From ${name}and my id is ${id}  `}</h1>
    </div>
  )
}

export default Contact

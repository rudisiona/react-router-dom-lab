import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import { Link } from 'react-router' 
const MailboxList = ({mailboxes}) => {

  return (
    
    <div>
      
      {mailboxes.map((mailbox, index) => {
       
       const boxStyle = {
        border: '1px solid black'
       }
       return (
       <div key={mailbox._id} style={boxStyle}>
          <Link to={`/mailboxes/${mailbox._id}`}>
          <h1>{mailbox.boxOwner}</h1>
          </Link>
          <p>Box Number: {mailbox._id}</p>

          </div>
      )})}
    </div>
    
  )
}

export default MailboxList
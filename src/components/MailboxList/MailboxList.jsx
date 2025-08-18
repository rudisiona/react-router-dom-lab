import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import { Link } from 'react-router' 



const MailboxList = ({mailboxes}) => {
  return (
    <div
    style={{
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
    }}>
      {mailboxes.length === 0 ? (
        <h2>There are currently no mailboxes.</h2>
      ) : (
   
        mailboxes.map((mailbox) => (
          <div
            key={mailbox._id}
            style={{
              border: "1px solid black",
              width: '250px',
              padding: "1rem",
              margin: "0.5rem 0",
            }}
          >
            <Link to={`/mailboxes/${mailbox._id}`}>
              <h2 style={{
                  
              }}>{mailbox.boxOwner}</h2>
            </Link>
            <p>Box Number: {mailbox._id}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MailboxList
import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import { Link } from 'react-router' 



const MailboxList = ({mailboxes}) => {
  return (
    <div>
      {mailboxes.length === 0 ? (
        <p>There are currently no mailboxes.</p>
      ) : (
        mailboxes.map((mailbox) => (
          <div
            key={mailbox._id}
            style={{
              border: "1px solid black",
              borderRadius: "8px",
              padding: "1rem",
              margin: "0.5rem 0",
            }}
          >
            <Link to={`/mailboxes/${mailbox._id}`}>
              <h1>{mailbox.boxOwner}</h1>
            </Link>
            <p>Box Number: {mailbox._id}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MailboxList
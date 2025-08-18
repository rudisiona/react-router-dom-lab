import React from 'react'
import {useParams} from 'react-router'

const MailboxDetails = (props) => {
  const { mailboxId } = useParams()
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  )
  if(!selectedBox){
    return <h1>Mailbox Not Found</h1>
  }
  const mailboxLetters = props.letters.filter(
    (letter) => letter.mailboxId == selectedBox._id
  )
  return (
    <div>
       <h1>{selectedBox.boxOwner} </h1>
       <h2>Size: {selectedBox.boxSize}</h2>
       <h2>Box Number: {selectedBox._id}</h2>
       <h2>Letters:</h2>
      {mailboxLetters.length === 0 ? (
        <h3>No letters yet.</h3>
      ) : (
        
        <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '24px',
          flexDirection: 'column'

        }}>
          
          {mailboxLetters.map((letter) => (
            <li key={letter._id}>
              <strong>To:</strong> {letter.recipient} <br />
              <strong>Message:</strong> {letter.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MailboxDetails
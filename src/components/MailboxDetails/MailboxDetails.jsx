import React from 'react'
import {useParams} from 'react-router'

const MailboxDetails = (props) => {
  const { mailboxId } = useParams()
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  )

  return (
    <div>
       <h1>{selectedBox ? selectedBox.boxOwner : 'Mailbox not found'} </h1>
       <h3>Size: {selectedBox.boxSize}</h3>
       <h3>Box Number: {selectedBox._id}</h3>
    </div>
  )
}

export default MailboxDetails
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const LetterForm = ({mailboxes, addLetter, letters}) => {
    const [formData, setFormData] = useState({ mailboxId: "", recipient: "", message: "" });
    const navigate = useNavigate()
  
    const handleChange = (event) => {
      const { name, value } = event.target
      setFormData({...formData, [name]: value})
    }
  
  
    const handleSubmit = (event) => {
        event.preventDefault()
        addLetter(formData)
        if (formData.mailboxId) {
            navigate(`/mailboxes/${formData.mailboxId}`);
            
        }
        console.log(letters)
  
    } 
    
  return (
    <div>
        <h2>Send a Letter</h2>
        <form onSubmit={handleSubmit}
         style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <label>Select a Mailbox</label>
        <select 
       name="mailboxId"
       value={formData.mailboxId}
        onChange={handleChange}     
        style={{
            padding: "0.5rem",
            margin: "0.5rem 0",
            border: "2px solid black",
            borderRadius: "3px",
            width: '250px'
          }}
        >
        <option value="">-- Select a mailbox --</option>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>
        <label>Recipient </label>
        <input
        name="recipient"
        value={formData.recipient}
        onChange={handleChange}
        style={{
            padding: "0.5rem",
            margin: "0.5rem 0",
            border: "2px solid black",
            borderRadius: "3px",
            width: '250px'
          }}
        
        >
        </input>
        <label>Message </label>
        <textarea
        name="message"
        value={formData.messag}
        onChange={handleChange}
        > </textarea>
                <button type="submit"
        style={{
          borderRadius: '5px'
        }}>Send Letter</button>
        </form>

    </div>
  )
}

export default LetterForm
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
 
const MailboxForm = ( {addBox}) => {
  const [formData, setFormData] = useState({ boxOwner: '', boxSize:'Small'})
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({...formData, [name]: value})
  }


  const handleSubmit = (event) => {
      event.preventDefault()
      addBox(formData)
      navigate('/mailboxes')

  } 
  
  
  return (
    <div>
      <h2> Create A New Mailbox</h2>
      <form onSubmit={handleSubmit}
      style={{
          display: 'flex',
          alignItems: 'center'
      }}>
        <label>Name: </label>
        <input 
        type="text"
         name='boxOwner'
          value={formData.boxOwner}
          onChange={handleChange}
          style={{
            padding: "0.5rem",
            margin: "0.5rem 0",
            border: "2px solid black",
            borderRadius: "3px",
            width: '250px'
          }}
          required
        ></input>
        <label>Box Size: </label>
        <select 
        name="boxSize"
        value={formData.boxSize}
        onChange={handleChange}   
        style={{
          padding: "0.5rem",
          margin: "0.5rem 0",
          border: "2px solid black",
          borderRadius: "3px",
          width: '150px'
        }}    
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit"
        style={{
          borderRadius: '5px'
        }}>Create Mailbox</button>
      </form>
    </div>
  )
}

export default MailboxForm
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
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input 
        type="text"
         name='boxOwner'
          value={formData.boxOwner}
          onChange={handleChange}
        ></input>
        <label>Box Size: </label>
        <select 
        name="boxSize"
        value={formData.boxSize}
        onChange={handleChange}       
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Create Mailbox</button>
      </form>
    </div>
  )
}

export default MailboxForm
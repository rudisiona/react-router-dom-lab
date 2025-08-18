import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import { Route, Routes } from 'react-router'
import './App.css'

function App() {

  const [mailboxes, setMailboxes] = useState([])
  const addBox = (formData) => {
    const newBox ={
      ...formData,
      _id: mailboxes.length + 1
    }
    setMailboxes([...mailboxes, newBox])

  }
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<main><h1>Welcome to The Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}  />} />
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />

    </Routes>

</>

)
};

export default App;
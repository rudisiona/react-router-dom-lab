import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import LetterForm from './components/LetterForm/LetterForm';
import { Route, Routes } from 'react-router'
import './App.css'

function App() {

  const [mailboxes, setMailboxes] = useState([])
  const [letters, setLetters] = useState([])
  const addBox = (formData) => {
    const newBox ={
      ...formData,
      _id: mailboxes.length + 1
    }
    setMailboxes([...mailboxes, newBox])
    }
    const addLetter = (formData) => {
      const newLetter ={
        ...formData,
        _id: letters.length + 1
      }
      setLetters([...letters, newLetter])
  }
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<main><h1>Welcome to The Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}  />} />
      <Route path="/new-letter" element={<LetterForm addLetter={addLetter} mailboxes={mailboxes} letters={letters}/>}/>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />

    </Routes>

</>

)
};

export default App;
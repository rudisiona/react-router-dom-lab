import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import { Route, Routes } from 'react-router'
import './App.css'

function App() {
  return (
    <>
      <h1>Hello world!</h1>
    <NavBar />
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailboxList />} />
      <Route path="/new-mailbox" element={<MailboxForm />} />
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />

    </Routes>

</>

)
};

export default App;
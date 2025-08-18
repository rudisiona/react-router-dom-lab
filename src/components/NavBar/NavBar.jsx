import  {Link} from 'react-router'
import "./NavBar.css"
function NavBar () {
    return (
        <nav>
 
            <Link to="/">Home</Link>
            <Link to="/mailboxes">Mailboxes</Link>
            <Link to="/new-mailbox">New Mailbox</Link>
            <Link to="/new-letter">Send a Letter</Link>
        
        </nav>
    )
}

export default NavBar;
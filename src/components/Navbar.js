import Icon from '../images/react-icon-small.png'

export default function Navbar() {
    return (
        <nav>
            <img src={Icon} className="nav--icon" alt="icon" />
            <h3 className="nav--logo_text">FamilysHome</h3>
            <h4 className="nav--title">Project 1</h4>
        </nav>
    )
}
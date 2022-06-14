import logo from '../../assets/Rat-golden-logo.svg';


export default function NavBar() {
    return (
        <nav className="navbar">
            <img src= {logo} className="rat-logo" />
            <div>
                <a className="header-btn" href="#">Home</a>
                <a className="header-btn" href="#">About</a>
                <a className="header-btn" href="#">Contact</a>
                <a className="header-btn" href="#">FAQ's</a>
            </div>
            
        </nav>
    )
}

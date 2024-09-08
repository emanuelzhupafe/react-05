import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <h3>All images</h3>
            </Link>
            <Link to="/favorites">
                <i className="fa fa-heart fa-4x"> </i>
            </Link>
        </header>
    );
}

export default Header;
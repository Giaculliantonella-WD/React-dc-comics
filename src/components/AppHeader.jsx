import logo from '../assets/img/dc-logo.png';
import headerLinks from '../data/headerLinks';

function AppHeader() {
    return (
        <header className="app-header">
            <div className="container header-container">
                <figure className="header-logo">
                    <a href="#">
                        <img src={logo} alt="DC Comics Logo" />
                    </a>
                </figure>

                <nav className="header-nav">
                    <ul>
                        {headerLinks.map((link) => (
                            <li key={link.id} className={link.active ? 'active' : ''}>
                                <a href={link.url}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default AppHeader;

import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Sensor</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/table" className="nav-link active">Table</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

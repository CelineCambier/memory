import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className="header" >
            <div className="row">
                <div className="col">
                    <h1>Memory</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Collect the pairs of cards by matching them.</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
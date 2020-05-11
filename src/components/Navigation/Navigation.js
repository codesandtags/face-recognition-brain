import React from 'react';

const Navigation = ({ onRoutChange }) => {

    return (
        <nav className="flex justify-end mt3">
            <a href="#"
               onClick={() => onRoutChange('sign-in')}
               className="f4 link dim black underline pa3 pointer">
                Sign Out
            </a>
        </nav>
    );
}

export default Navigation;
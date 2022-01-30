import React from 'react';

const Header = () => {
    return (
        <div className="header" data-testid="header">
            <p className="header-text" data-testid="header-text-1">Tic</p>
            <p className="header-text" data-testid="header-text-2">Tac</p>
            <p className="header-text" data-testid="header-text-3">Toe!</p>
        </div>
    );
}

export default Header;
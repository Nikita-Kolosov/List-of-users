import React, { useState } from 'react';
import { useAction } from '../hooks/useAction';

const Header: React.FC = () => {
    const { filterUser, resetUsers, fetchUsers } = useAction();
    const [ inputValue, setInputValue ] = useState('');

    return (
        <div>
            <input 
                className="input"
                type = "search" 
                placeholder = "Search" 
                value={inputValue}
                onChange = {(event) => {
                    setInputValue(event.target.value);
                    filterUser(event.target.value)
                }}
            />
            <button className='reset-button' onClick={() => {
                resetUsers();
                setInputValue('');
                fetchUsers();
            }}>Reset</button>
        </div>
    );
};

export default Header;
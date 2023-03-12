import React, { useEffect, useState } from 'react';
import { usedTypedSelector } from '../hooks/useTypedSelector';
import { useAction } from '../hooks/useAction';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import bin from '../img/bin.png';

const UserList: React.FC = () => {
    const { users, error, loading, filter } = usedTypedSelector(state => state);
    let filteredUsers = users;
    const { fetchUsers, removeUser } = useAction();
    const [opened, { open, close }] = useDisclosure(false);
    const [currentUser, setCurrentUser] = useState({
        address: {
            street: '',
            suite: '',
            city: ''
        },
        company: {
            name: '',
        }
    });

    useEffect(() => {
        fetchUsers() as any;
    }, []);

    if (loading) {
        return <h1 className='user-loading'>Loading</h1>;
    };
    if (error) {
        return <h1 className='user-error'>Error</h1>;
    };

    if (filter) {
        filteredUsers = users.filter(user => {
        const nameMatch = user.name.toLowerCase().includes(filter);
        const userNameMatch = user.username.toLowerCase().includes(filter);
        const emailMatch = user.email.toLowerCase().includes(filter);
        return nameMatch || userNameMatch || emailMatch;
    });
    }

    const handleString = (str: string) => {
        if (!filter) {
            return str;
        };

        const regex = new RegExp(filter, 'ig');
        const matchValue = str.match(regex);

        if (matchValue) {

            return str.split(regex).map((subString, index, array) => {
                if (index < array.length -1) {
                    const highlightedValue = matchValue.shift();
                    return (
                        <>{subString}<span className='highlighted'>{highlightedValue}</span></>
                    );
                }
                return subString;
            })
        };
        return str;
    };

    const handleClick = () => {
        console.log('click');
    }


    return (
        <div>
            {filteredUsers.map(user =>
                <div className='user' onClick={() => {
                    setCurrentUser(user);
                    open();
                }}>
                    <div>
                        <div className='user-username'>{handleString(user.username)}</div>
                        <div>{handleString(user.name)}</div>
                        <div className='user-email'>{handleString(user.email)}</div>
                    </div>
                    <div>
                        <img src={bin} alt="Image" onClick={(event) => removeUser(user.id, event)}/>
                    </div>
                </div>
                )}
            <Modal opened={opened} onClose={close} withCloseButton={false} yOffset="20vh" xOffset={0} size='auto'>
                <div className='popup_header'>User information</div>
                Adress: {currentUser.address.city}, {currentUser.address.street}, {currentUser.address.suite} <br />
                Company: {currentUser.company.name}
            </Modal>
        </div>
    );
};

export default UserList;
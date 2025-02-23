import React from 'react';
import { useContext } from 'react';
import UserContext, { Usercontext } from './UserContext';

export default function UserProfile() {
    const { userData } = useContext(UserContext)
    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}
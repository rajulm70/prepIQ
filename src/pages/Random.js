import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/auth"; // Import the authentication context

export default function Random() {
    const [auth] = useAuth(); // Get the authentication state
    const navigate = useNavigate();

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#010101',
    };

    const gifStyle = {
        width : '700px',
        height : '400px',

        maxWidth: '100%',
        maxHeight: '100%',
    };

    return (
        <div style={containerStyle}>
            <img
                src="https://i.gifer.com/JPFn.gif"
                alt="Loading GIF"
                style={gifStyle}
            />
        </div>
    );
}

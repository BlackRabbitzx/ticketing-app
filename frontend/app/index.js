// frontend/pages/index.js
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/hello')
            .then(response => response.json())
            .then(data => setMessage(data.message));
    }, []);

    return (
        <div>
            <h1>Hello from Next.js Frontend!</h1>
            <p>{message}</p>
        </div>
    );
};

export default Home;
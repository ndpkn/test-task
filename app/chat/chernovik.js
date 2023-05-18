    import { useState, useEffect } from 'react';

    function ChatComponent() {
    const [chatData, setChatData] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
        fetch('<https://example.com/api/chat>', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            return response.json();
            })
            .then(data => {
                setChatData(data);
            })
            .catch(error => {
                console.error('There was a problem with the chat API:', error);
            });
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    // Render chat data
    return (
        <div>
        {chatData && <p>{chatData}</p>}
        </div>
    );
    }


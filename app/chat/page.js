'use client'
import { useState } from 'react'
import ChatView from './ChatView'

const Chat = () => {
    const [message, setMessage] = useState('')
    const onSubmit = (e, message) => {
        e.preventDefault()
        console.log(message);
        setMessage('')
    }
    return (
        <ChatView message={message} setMessage={setMessage} onSubmit={onSubmit} />
    )
}

export default Chat
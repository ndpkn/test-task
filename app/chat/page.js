'use client'
import { useEffect, useRef, useState } from 'react'
import ChatView from './ChatView'
import axios from 'axios'
import ServiceMessage from '../services/ServiceMessage'

const Chat = () => {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')

    const service = new ServiceMessage()

    const scroll = useRef();

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            scrollToBottom()
        return () => clearInterval(scrollInterval);
        }, 1000)

        const intervalId = setInterval(() => {
            scrollToBottom();
            service.getMessage()
                .then(onSuccess)
                .catch(onError);
            
                return () => clearInterval(intervalId);
        }, 5000);

        const getHistorySuccess = (res) => {
            console.log(res);
            setMessages(res.data.reverse())
        }
        const getHistoryError = (err) => {
            console.log(err)
        }
        service.getHistory()
            .then(getHistorySuccess)
            .catch(getHistoryError)
        
    },[])
    const onSuccess = (res) => {
        console.log(res);
        if (res.data) {
            let message = res.data.body.messageData.textMessageData.textMessage
            setMessages((messages) => [...messages, {textMessage: message, type: 'incoming'}])
            service.deleteMessage(res.data.receiptId)
            scrollToBottom()            
        }
        }
    const onError = (err) => {
        console.error('error:', err);
    }
    const scrollToBottom = async () => {
        scroll.current.scrollIntoView({ behavior: "smooth" })
    } 

    const onSubmit = (e) => {
        e.preventDefault()
        service.submitMessage(message)
            .then(onSuccessSubmit)
            .catch(onErrorSubmit)
        setMessage('')
    }
    const onSuccessSubmit = () => {
        setMessages((messages) => [...messages, {textMessage: message, type: 'outgoing'}])
        scrollToBottom()
    }
    const onErrorSubmit = (err) => {
        console.log(err);
    }

    return (
        <ChatView 
            message={message} 
            messages={messages} 
            setMessage={setMessage} 
            onSubmit={onSubmit} 
            scroll={scroll} 
        />
    )
}

export default Chat
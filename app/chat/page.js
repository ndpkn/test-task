'use client'
import { useEffect, useRef, useState } from 'react'
import ChatView from './ChatView'
import axios from 'axios'

const Chat = () => {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const phone = localStorage.getItem('phone')
    const id = localStorage.getItem('idWA')
    const chatId = `${phone}@c.us`
    const token = localStorage.getItem('tokenWA')
    const sendUrl = `https://api.green-api.com/waInstance${id}/SendMessage/${token}`
    const getMessageUrl = `https://api.green-api.com/waInstance${id}/ReceiveNotification/${token}`
    const getHistoryUrl = `https://api.green-api.com/waInstance${id}/GetChatHistory/${token}`
    const scroll = useRef(null);
    
    useEffect(() => {
        const scrollInterval = setInterval(() => {
            scrollToBottom()
            console.log('interval');
        return () => clearInterval(scrollInterval);
        }, 1000)
        const intervalId = setInterval(() => {
            scrollToBottom();
            fetch(getMessageUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
                })
                .then(response => {
                if (!response.ok) {
                    throw new Error('error');
                }
                return response.json();
                })
                .then(data => {
                    console.log(data);
                    if (data) {
                        let message = data?.body.messageData.textMessageData.textMessage
                        setMessages((messages) => [...messages, {textMessage: message, type: 'incoming'}])
                        deleteMessage(data.receiptId)
                        scrollToBottom()
                    }
                })
                .catch(error => {
                    console.error('error:', error);
                });
                return () => clearInterval(intervalId);
        }, 5000);

        const getHistorySuccess = (res) => {
            console.log(res.data);
            setMessages(res.data.reverse())
        }
        const getHistoryError = (err) => {
            console.log(err)
        }
        axios
            .post(
                getHistoryUrl,
                {
                    chatId: chatId,
                count: 20
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(getHistorySuccess)
            .catch(getHistoryError)
        
    },[])
    const scrollToBottom = async () => {
        scroll.current.scrollIntoView({ behavior: "smooth" })
    }

    const deleteMessage = async (receiptId) => {
        await axios
                .delete(`https://api.green-api.com/waInstance${id}/DeleteNotification/${token}/${receiptId}`,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
    }    

    const onSubmit = (e) => {
        e.preventDefault()
        axios
            .post(
                    sendUrl, 
                    {
                        chatId: chatId,
                        message: message 
                    },
                    {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            .then(onSuccessSubmit)
            .catch(onErrorSubmit)
        setMessage('')
    }
    const onSuccessSubmit = (res) => {
        setMessages((messages) => [...messages, {textMessage: message, type: 'outgoing'}])
        scrollToBottom()
        console.log(res, 'success submit');
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
'use client'
import { useState } from 'react'
import AddChatView from './AddChatView'
import axios from 'axios'
const id = localStorage.getItem('idWA')
const token = localStorage.getItem('tokenWA')
const url = `https://api.green-api.com/waInstance{{${id}}}/CheckWhatsapp/{{${token}}}`

const AddChat = () => {
    const [phone, setPhone] = useState('')
    const data = {
        phoneNumber: phone
    }
    const sendPhone = () => {
        console.log(phone);
        axios
            .post(url, data,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    
                }
                )
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <AddChatView setPhone={setPhone} sendPhone={sendPhone} />
    )
}

export default AddChat
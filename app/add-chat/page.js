'use client'
import { useEffect, useState } from 'react'
import AddChatView from './AddChatView'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const AddChat = () => {
    const router = useRouter()
    const id = localStorage.getItem('idWA')
    const token = localStorage.getItem('tokenWA')
    const url = `https://api.green-api.com/waInstance${id}/CheckWhatsapp/${token}`

    const [phone, setPhone] = useState('')
    const [textError, setTextError] = useState('')
    //Метод для проверки наличия WhatsApp у пользователя (Не более 100 запросов в месяц)
    
    const data = {
        phoneNumber: phone
    }
    const sendPhone = () => {
        axios
            .post(url, data
                ,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                )
            .then(res => onSuccess(res))
            .catch(err => onError(err))
    }
    const onSuccess = (res) => {
        res.data.existsWhatsapp ? localStorage.setItem('phone', phone) : setTextError('Такого пользователя не существует')
        res.data.existsWhatsapp ? router.push('/chat') : null
    }
    const onError = (err) => {
        err.response.status == 400 ? setTextError('Неправильный формат номера') : null
        console.log(err, 'error');
    }

    // const sendPhone = (phone) => {
    //     localStorage.setItem('phone', phone)
    //     router.push('/chat')
    // }

    return (
        <AddChatView setPhone={setPhone} sendPhone={sendPhone} error={textError} />
    )
}

export default AddChat
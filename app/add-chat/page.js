'use client'
import {  useState } from 'react'
import AddChatView from './AddChatView'
import { useRouter } from 'next/navigation'
import ServiceCheckWa from '../services/ServiceCheckWa'

const AddChat = () => {
    const router = useRouter()
    const [phone, setPhone] = useState('')
    const [textError, setTextError] = useState('')
    const service = new ServiceCheckWa()

    const sendPhone = () => {
        service.checkWa(phone)
            .then(onSuccess)
            .catch(onError)
    }
    const onSuccess = (res) => {
        res.data.existsWhatsapp ? router.push('/chat') : setTextError('Такого пользователя не существует')
    }
    const onError = (err) => {
        err.status == 400 ? setTextError('Неправильный формат номера') : null
        console.error(err, 'error');
    }

    return (
        <AddChatView 
            setPhone={setPhone} 
            sendPhone={sendPhone} 
            error={textError} 
        />
    )
}

export default AddChat
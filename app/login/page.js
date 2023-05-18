'use client'
import { useState } from "react"
import LoginPageView from "./LoginPageView"
import { useRouter } from "next/navigation"
import ServiceAuth from "../services/ServiceAuth"

const LoginPage = () => {
    const router = useRouter()
    const [id, setId] = useState('')
    const [token, setToken] = useState('')
    const service = new ServiceAuth()
    
    const sendForm = () => {
        console.log(id, token);
        service.auth(id, token)
        router.push('/add-chat')
    }
    return (
        <LoginPageView 
            setId={setId}
            setToken={setToken}
            sendForm={sendForm}
        />
    )
}

export default LoginPage
'use client'
import { useState } from "react"
import LoginPageView from "./LoginPageView"
import { useRouter } from "next/navigation"

const LoginPage = () => {
    const router = useRouter()
    const [id, setId] = useState('')
    const [token, setToken] = useState('')
    const sendForm = () => {
        console.log(id, token);
        localStorage.setItem('idWA', id)
        localStorage.setItem('tokenWA', token)
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
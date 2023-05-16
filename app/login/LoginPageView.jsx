'use client'
import Container from '../components/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import Link from 'next/link'

const LoginPageView = ({setId, setToken, sendForm}) => {

    return (
        <Container>
            <h1>Вход в аккаунт</h1>
            <TextField
                fullWidth
                id="outlined-basic" 
                label="idInstance" 
                variant="outlined"
                margin='normal'
                color="success"
                onChange={(e) => setId(e.target.value)}
            />
            <TextField 
                fullWidth
                id="outlined-basic" 
                label="apiTokenInstance" 
                variant="outlined"
                color="success"
                onChange={(e) => setToken(e.target.value)}
            />
            <Button 
                variant="contained" 
                color="success"
                size='large'
                onClick={sendForm}
                style = {{
                    marginTop: '2rem'
                }}
            >
                {/* <Link href='/add-chat'> */}
                    Войти
                {/* </Link> */}
            </Button>
        </Container>
    )
}

export default LoginPageView
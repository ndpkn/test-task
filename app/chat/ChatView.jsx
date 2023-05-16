'use client'
import { IconButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { styled } from "styled-components"
import Container from "../components/Container"
import Message from "../components/Message"

const InputBlockOverlay = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 100rem;
    background-color: #f2f2f2;
    padding: 0 1rem;

`
const InputBlock = styled.form`
    max-width: 50rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const Input = styled.input`
    width: 75%;
    height: 2rem;
    outline: none;
    border: 1px solid #bebebe;
    background-color: #f6f6f6;
    border-radius: 0.5rem;
    padding-left: 0.5rem;
    font-size: 1rem;

`
const ChatView = ({ message, setMessage, onSubmit }) => {
    return (
        <Container>
            <h1>Чат</h1>
            <Message messageText={'Hello. How are you'} position={'left'}/>
            <Message messageText={'Hello. How are you'} position={'left'}/>
            <Message messageText={'Hello. How are you'} position={'right'}/>
            <InputBlockOverlay>
                <InputBlock onSubmit={e => onSubmit(e, message)} action='post'>
                    <Input
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Введите текст сообщения"
                    >
                    </Input>
                    <IconButton type="submit">
                        <SendIcon 
                            fontSize="large"
                            style={{
                                color:'#035C4B'
                            }}
                        />
                    </IconButton>
                </InputBlock>
            </InputBlockOverlay>
        </Container>
    )
}

export default ChatView
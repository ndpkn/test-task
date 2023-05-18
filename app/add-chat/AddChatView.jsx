'use client'
import { Alert, AlertTitle, Button, TextField } from "@mui/material"
import Container from "../components/Container"

const AddChatView = ({ setPhone, sendPhone, error }) => {
    return (
        <Container>
            <h1>Создание чата</h1>
            <TextField 
                fullWidth
                id="outlined-basic" 
                label="Телефон" 
                variant="outlined"
                margin='normal'
                color="success"
                onChange={(e) => setPhone(e.target.value)}
            />
            {
                error ? 
                <Alert severity="error">
                    <AlertTitle>Ошибка</AlertTitle>
                    {error}
                </Alert> :
                null
            }
            <Button 
                variant="contained" 
                color="success"
                size='large'
                type="phone"
                onClick={sendPhone}
                style = {{
                    marginTop: '2rem'
                }}
            >
                
                Создать
            </Button>
        </Container>
    )
}

export default AddChatView
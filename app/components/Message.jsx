import { styled } from "styled-components"


const MessageBlock = styled.div.attrs(props => ({
    position: props.position 
}))`
    border-radius: 1rem;
    background-color: ${props => props.position == 'left' ? "#202C33" : "#035C4B"};
    padding: 1rem;
    max-width: 80%;
    align-self: ${props => props.position == 'left' ? "flex-start" : "flex-end"};
    margin-bottom: 1rem;
`
const MessageText = styled.p`
    font-size: 0.9rem;
    padding: 0;
    margin: 0;
    color: #fff;
`

const Message = ({ messageText, position }) => {
    return (
        <MessageBlock 
            position={position}
        >
            <MessageText>
                {messageText}
            </MessageText>
        </MessageBlock>
    )
}

export default Message
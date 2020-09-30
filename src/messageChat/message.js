import  React from 'react';
import { MessageReceived, MessageContainer, PhotoUser, MessageSent } from "./message-styled"



export const MessageChat = ({message, auth}) => {

    const { text, uid, photoURL } = message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';



    return(
        <MessageContainer hidden={messageClass === 'received' ? false : true}>
            <PhotoUser 
                src={photoURL}
            />
            {messageClass === 'received' 
            ? 
                <MessageReceived >
                    {text}
                </MessageReceived>
            : 
                <MessageSent >
                    {text}
                </MessageSent>
            }
        </MessageContainer>
    );
}
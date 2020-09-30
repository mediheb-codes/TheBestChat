import  React, { useEffect, useState }  from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { MessageChat } from '../messageChat/message';
import { ButtonSubmit, FormMessage, InputField, MainMessage } from './chatRoom-styled';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




export const ChatRoom = ({firestore, auth}) => {


    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');

    useEffect(() => {
        document.getElementById('dummy').scrollIntoView({ behavior: 'smooth' });
      }, [messages])

    const sendMessage = async (e) => {
        e.preventDefault();

        const {uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
    }
    return(
        <>
            <MainMessage className='main'>
                {messages && messages.map(msg => <MessageChat  key={msg.id} message={msg} auth={auth}/>)}
                <span id='dummy'></span>
            </MainMessage>
            <FormMessage onSubmit={sendMessage}>
                <InputField onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice"/>
                <ButtonSubmit type='submit' disabled={!formValue}>
                    <span role='img' aria-label='icon'>
                        🕊️
                    </span>
                </ButtonSubmit>
            </FormMessage>
        </>
    )
}
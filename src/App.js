import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { AppContainer, ChatContainer, HeaderChat, LogoHeader, ButtonSignOut,  TitleHeader } from './App-styled';
import SignIn from './signIn/signIn';
import { ChatRoom } from './chatRoom/chatRoom';

firebase.initializeApp({
  apiKey: "AIzaSyAoAfFRQiVIgSfxb3YY8_2GTYRk_Pj0-5g",
  authDomain: "real-time-chat-7037d.firebaseapp.com",
  databaseURL: "https://real-time-chat-7037d.firebaseio.com",
  projectId: "real-time-chat-7037d",
  storageBucket: "real-time-chat-7037d.appspot.com",
  messagingSenderId: "213810322920",
  appId: "1:213810322920:web:635ac304015063c468585d",
  measurementId: "G-YC9RKBXVBQ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <AppContainer>
      <ChatContainer>
        <HeaderChat>
          <LogoHeader />
          {user ? <ButtonSignOut onClick={() => auth.signOut()}>
                      Sign Out
                  </ButtonSignOut>
                : <TitleHeader>
                    1 Bc Esen
                  </TitleHeader>
        }
          
        </HeaderChat>
        {user ? <ChatRoom firestore={firestore} auth={auth}/> : <SignIn auth={auth} />}
      </ChatContainer>
    </AppContainer>
  );
}


export default App;

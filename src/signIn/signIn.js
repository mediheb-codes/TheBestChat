import  React  from 'react';
import {
    ButtonLogin,
    WarningText,
    SignInContainer
} from './signIn-styled';
import firebase from 'firebase/app';




const SignIn = ({auth}) => {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return( 
        <SignInContainer>
            <ButtonLogin onClick={signInWithGoogle}>
            Sign In in Esen
            </ButtonLogin> 
            <WarningText>
                Do not violate the community guidelines or you will be bannedfor life!
            </WarningText> 
        </SignInContainer >
    )
}

export default SignIn ;
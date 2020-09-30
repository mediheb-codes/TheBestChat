import styled from 'styled-components'

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
`
export const ChatContainer = styled.div`
    width: 650px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #282535;
    margin-left: auto;
    margin-right: auto; 
    @media (max-width: 650px) {
        width: 100%;
    };
`
export const HeaderChat = styled.div`
    width: 100;
    height: 50px;
    background-color: #181717;
    padding: 20px 10px;
    display:flex;
    flex-direction: row ;
    justify-content: space-between;
    align-items: center;
`
export const LogoHeader = styled.div`
    background-image: url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.aten.tn%2FICDEc2016%2Fimages%2Flogo_esen.jpeg&f=1&nofb=1');
    width: 80px;
    height: 30px;
    background-size: cover;
`
export const TitleHeader = styled.span`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
`
export const ButtonSignOut = styled.button`
    max-width: 500px;
    padding: 20px !important;
    height: 20px !important;
    all: unset;
    background-color: #000;
    color: #ffff;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
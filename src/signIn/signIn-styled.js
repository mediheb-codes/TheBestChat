import styled from 'styled-components';



export const SignInContainer = styled.div`
    width: 100;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`
export const ButtonLogin = styled.button`
    max-width: 500px;
    padding: 20px !important;
    height: 20px !important;
    all: unset;
    background-color: #ffff;
    color: #000;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const WarningText = styled.span`
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    color: #fff;
    text-align: center;
`
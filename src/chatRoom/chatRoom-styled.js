import styled from "styled-components";



export const MainMessage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;
    height: 100%;
    padding-bottom: 15px;
`

export const FormMessage = styled.form`
    height: 10vh;
    position: fixed;
    bottom: 0;
    background-color: #181717;
    width: 650px;
    max-width: 728px;
    display: flex;
    font-size: 1.5rem;
    @media (max-width: 650px) {
        width: 100%;
    };
`

export const InputField = styled.input`
    color: #fff;
    border: none;
    line-height: 1.5;
    width: 80%;
    font-size: 1.5rem;
    background: #3a3a3a;
    outline: none;
    padding: 0 10px;
`
export const ButtonSubmit = styled.button`
    width: 20%;
    background-color: ${props => props.disabled ? '#000' :'#38388f'};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 1.25rem;
`

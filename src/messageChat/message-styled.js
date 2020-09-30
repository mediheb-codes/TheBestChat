import styled from 'styled-components';



export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    align-self : ${props => props.hidden ? 'flex-end' :  'initial'};
    flex-direction: ${props => props.hidden ? 'row-reverse' :  'initial'};
`
export const PhotoUser = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 2px 5px;
`
export const MessageReceived = styled.p`
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    text-align: center;
    background: #e5e5ea;
    color: #000;
`
export const MessageSent = styled.p`
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    text-align: center;
    color: #fff;
    background: #0b93f6;
    align-self: flex-end;
`
 
import styled from "styled-components";

type NavigationType = {
    active?: boolean,
    big?: boolean,
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: center;
`

export const NavigationItem = styled.div<NavigationType>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px ${props => props.big == true ? '32px' : '14px'};
    background-color: ${props => props.active === true ? '#B6116E' : 'transparent'};
    color: ${props => props.active === true ? '#FFF' : '#B6116E'};
    font-size: 16px;
    border: 1px solid #B6116E;
    border-radius: 5px;
    transition: all ease .3s;
    cursor: pointer;

    &:hover{
        background-color: #B6116E;
        color: #FFF;
    }
`

export const NavigationText = styled.div`
    color: #B6116E;
    font-size: 16px;
    cursor: pointer;
    transition: all ease .3s;

    &:hover{
        opacity: 0.7;
    }
`
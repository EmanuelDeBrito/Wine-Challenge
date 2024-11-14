import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-top: 15px;
    background-color: #7EBC43;
    color: #FFF;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    border: 0;
    outline: 0;
    border-radius: 3px;
    transition: all ease .3s;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`
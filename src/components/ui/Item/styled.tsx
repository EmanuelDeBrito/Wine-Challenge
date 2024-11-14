import styled from "styled-components";

export const Container = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WineArea = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
    padding: 10px;
    width: 100%;
    height: auto;
    background-color: #FFF;
    box-shadow: 0px 0px 30px #DDD;
`;

export const WineImage = styled.img`
    margin-top: 10px;
    width: auto;
    height: 170px;
`;

export const WineSeal = styled.img`
    position: absolute;
    top: 140px;
    right: 15px;
    width: 39px;
    height: 39px;
`;

export const WineTitle = styled.div`
    margin-bottom: 5px;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`;

export const WinePriceArea = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`

export const WinePrice = styled.div`
    color: #888888;
    font-size: 13px;
    font-weight: 700;
`;

export const WineDescountArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 5px;
    height: 14px;
    background-color: #F79552;
    color: #FFF;
    font-size: 12px;
    font-weight: 700;
    text-tranform: uppercase;
    border-radius: 2px;
`;

export const WinePartner = styled.div`
    color: #000;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;

    span{
        margin-left: 2px;
        color: #B6116E;
        font-size: 14px;
    }
`;

export const WineNotPartner = styled.div`
    color: #888;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
`;
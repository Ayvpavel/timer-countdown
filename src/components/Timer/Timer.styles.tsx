import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 200px;
    width: 1000px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 70px auto;
    gap: 6px;
    padding-bottom: 20px;
    padding-top: 10px;
    border-radius: 18px;
    height: 250px;
    font-size: 40px;
    @media (max-width: 768px) {
        width: 100%;
        margin: 10px auto;
    }
    @media (min-width: 768px) and (max-width: 992px) {
        width: 100%;
        margin: 10px auto;
    }
`;
export const Title = styled.h1`
    margin: 0;
    padding: 0;
    color: #2f4f4f;
    font-size: 35px;
`;
export const Time = styled.h2`
    font-size: 32px;
    margin: 0;
    padding: 0;
    color: #2f4f4f;
    font-size: 90px;
    @media (max-width: 768px) {
        font-size: 50px;
    }
`;

export const BtnStart = styled.button`
    margin: 0;
    padding: 10px 20px;
    cursor: pointer;
    background: #32cd32;
    color: #ffffff;
    height: 40px;
    width: 100px;
    margin-top: 20px;
    border-radius: 5px;
`;
export const BtnReset = styled.button`
    margin: 0;
    background: #f5f5f5;
    color: #808080;
    height: 40px;
    width: 100px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 5px;
`;
export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

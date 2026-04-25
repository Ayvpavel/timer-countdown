import { styled } from 'styled-components';
export const Wrapper = styled.div`
    background: #ffffff;
    @media (max-width: 768px) {
        width: 100%;
        display-flex:
        flex-direction: row;

    }
`;

export const StyledInput = styled.input`
    height: 30px;
    border-radius: 5px;
    font-size: 20px;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 10px;
    }
`;
export const BtnStart = styled.button`
    font-size: 20px;
    background: #1e90ff;
    color: #ffffff;
    cursor: pointer;
    height: 36px;
    width: 100px;
    border-radius: 5px;
    border: none;
`;
export const BtnReset = styled.button`
    font-size: 20px;
    background: #1e90ff;
    color: #ffffff;
    cursor: pointer;
    height: 36px;
    width: 100px;
    border-radius: 5px;
    border: none;
`;
export const TimerCard = styled.div`
    padding: 30px;
    border-radius: 20px;
    background: white;
    box-shadow: 0 10px 40px rgba(126, 47, 47, 0.25);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    @media (max-width: 768px) {
        display: block;
        margin: 10px;
    }
`;
export const WrapperRow = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Title = styled.h1`
    padding-top: 12px;
    text-align: center;
`;
export const TimeLeftSyles = styled.h2`
    font-size: 35px;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

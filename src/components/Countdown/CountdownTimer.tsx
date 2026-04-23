import React, { useState, useEffect } from 'react';
import { BtnStart, TimeLeft, Title, Wrapper, WrapperRow } from './CountdownTimer.styles';
import { StyledInput, TimerCard } from './CountdownTimer.styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
export function CountdownTimer() {
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [isActive, setIsActive] = useState(false);
    const handleChangeMin = (_event: Event, newValue: number | number[]) => {
        setMinutes(newValue as number);
    };
    const handleChangeSec = (_event: Event, newValue: number | number[]) => {
        setSeconds(newValue as number);
    };
    const startTimer = () => {
        setIsActive(true);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.target.value);

        if (value > 720) {
            value = 720;
        }

        setMinutes(value);
    };

    useEffect(() => {
        if (!isActive) return;

        if (minutes === 0 && seconds === 0) {
            setIsActive(false);
            const audio = new Audio(process.env.PUBLIC_URL + '/timer-bell.mp3');
            audio.play();
            return;
        }

        const timerId = setInterval(() => {
            if (seconds > 0) {
                setSeconds(prev => prev - 1);
            } else if (minutes > 0) {
                setMinutes(prev => prev - 1);
                setSeconds(59);
            }
        }, 1000);

        return () => clearInterval(timerId);
    }, [minutes, seconds, isActive]);

    return (
        <Wrapper>
            <Title>Countdown</Title>
            <TimerCard>
                <StyledInput type='number' placeholder='Минуты' value={minutes} onChange={handleChange} />

                <StyledInput
                    type='number'
                    placeholder='Секунды'
                    value={seconds}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSeconds(Number(e.target.value))}
                />

                <BtnStart onClick={startTimer}>Старт</BtnStart>
                <WrapperRow>
                    <Box sx={{ width: { xs: "100%", sm: 200 } }}>
                        <Stack>
                            <Slider value={minutes} onChange={handleChangeMin} />
                        </Stack>
                        <Slider value={seconds} onChange={handleChangeSec} />
                    </Box>
                    <TimeLeft>
                        Осталось: {minutes} мин {seconds} сек
                    </TimeLeft>
                </WrapperRow>
            </TimerCard>
        </Wrapper>
    );
}

export default CountdownTimer;

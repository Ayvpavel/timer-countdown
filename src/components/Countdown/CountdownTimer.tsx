import React, { useState, useEffect } from 'react';
import { BtnReset, BtnStart, Title, Wrapper, WrapperRow } from './CountdownTimer.styles';
import { StyledInput, TimerCard } from './CountdownTimer.styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { TimerInput } from './TimerImput';
import { TimeLeft } from './TimeLeft';
export function CountdownTimer() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
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
    const handleReset = () => {
        setMinutes(0);
        setSeconds(0);
    };
    return (
        <Wrapper>
            <Title>Countdown</Title>
            <TimerCard>
                <TimerInput minutes={minutes} seconds={seconds} setMinutes={setMinutes} setSeconds={setSeconds} isActive = {isActive} />

                <BtnStart onClick={startTimer}>Start</BtnStart>
                <BtnReset onClick={handleReset}>Reset</BtnReset>
                <WrapperRow>
                    <Box sx={{ width: { xs: '100%', sm: 200 } }}>
                        <Stack>
                            <Slider value={minutes} onChange={handleChangeMin} />
                        </Stack>
                        <Slider value={seconds} onChange={handleChangeSec} />
                    </Box>

                    <TimeLeft minutes={minutes} seconds={seconds} />
                </WrapperRow>
            </TimerCard>
        </Wrapper>
    );
}

export default CountdownTimer;

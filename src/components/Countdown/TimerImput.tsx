import { useState } from 'react';
import { StyledInput } from './CountdownTimer.styles';

export const TimerInput = ({
    minutes,
    seconds,
    setMinutes,
    setSeconds,
    isActive,
}: {
    minutes: number;
    seconds: number;
    setMinutes: React.Dispatch<React.SetStateAction<number>>;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
    isActive: boolean;
}) => {
    const OnchangeMinuts = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.target.value);

        if (value > 720) {
            value = 720;
        }

        setMinutes(value);
    };
    return (
        <>
            <StyledInput
                disabled={isActive}
                type='number'
                placeholder='Минуты'
                value={minutes}
                onChange={OnchangeMinuts}
            />

            <StyledInput
                type='number'
                disabled={isActive}
                placeholder='Секунды'
                value={seconds}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSeconds(Number(e.target.value))}
            />
        </>
    );
};

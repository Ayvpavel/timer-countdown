import { useMemo, useRef, useState } from 'react';
import { Wrapper, Title, Time, ButtonGroup, BtnReset, BtnStart } from './Timer.styles';
import { memo } from 'react';
import { useCallback } from 'react';
interface ControlsProps {
    className?: string;
    handleStart?: () => void;
    handleReset?: () => void;
}
export const Timer = memo(function Timer({ className }: ControlsProps) {
    const [start, setStart] = useState(0);
    const [now, setNow] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleStart = useCallback(() => {
        if (isRunning) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            setIsRunning(false);
        } else {
            const startTime = Date.now() - (now - start);
            setStart(startTime);
            intervalRef.current = setInterval(() => {
                setNow(Date.now());
            }, 50);
            setIsRunning(true);
        }
    }, [isRunning, now, start]);

    // const timePassed = msPassed / 1000;
    // const seconds = msPassed / 1000;
    const handleReset = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = null;
        setStart(0);
        setNow(0);
        setIsRunning(false);
    }, []);
    const formattedTime = useMemo(() => {
        const msPassed = start ? now - start : 0;

        const minutes = Math.floor(msPassed / 60000);
        const seconds = Math.floor((msPassed % 60000) / 1000);
        const milliseconds = Math.floor((msPassed % 1000) / 10);

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(
            2,
            '0'
        )}`;
    }, [start, now]);
    return (
        <Wrapper className={className}>
            <Title>Stopwatch</Title>
            <Time>{formattedTime}</Time>
            <ButtonGroup>
                <BtnStart onClick={handleStart}>{isRunning ? 'Stop' : 'Start'}</BtnStart>

                <BtnReset onClick={handleReset}>Reset</BtnReset>
            </ButtonGroup>
        </Wrapper>
    );
});

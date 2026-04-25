import { TimeLeftSyles } from './CountdownTimer.styles';

type TimeLeft = {
    minutes: number;
    seconds: number;
};

export const TimeLeft = ({ seconds, minutes }: TimeLeft) => {
    return (
        <TimeLeftSyles>
            Осталось: {minutes} мин {seconds} сек
        </TimeLeftSyles>
    );
};

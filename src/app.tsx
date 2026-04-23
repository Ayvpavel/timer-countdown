import styled from 'styled-components';
import { Timer } from './components/Timer/Timer';
import CountdownTimer from './components/Countdown/CountdownTimer';
import { Title } from './index.styles';
function App() {
    return (
        <>
            <Title>Timer</Title>
            <Timer />
            <CountdownTimer />

        </>
    );
}

export default App;

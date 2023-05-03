export const Timer = ({time, setTime}) => {

    return (
    <div className="timer">
        <h1 onLoad={setInterval(()=> setTime(time + 1), 1000)}>Time {time} sec</h1>
        </div>
    );
}
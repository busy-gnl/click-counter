export const Counter = ({count, setCount}) => {
    return(
        <>
        <div className="count">
        <button onClick={()=> setCount(count - 1)}> - </button>
        <span>  {count}  </span>
        <button onClick={()=> setCount(count + 1)}> + </button>
        </div>
        </>
        );
};
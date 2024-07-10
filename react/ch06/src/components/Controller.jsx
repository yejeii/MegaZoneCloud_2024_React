import "../Controller.css";

const Controller = (props) => {
  return (
    <div className="Controller">
      <button onClick={() => props.handelSetCount(-1)}>-1</button>
      <button onClick={() => props.handelSetCount(-10)}>-10</button>
      <button onClick={() => props.handelSetCount(-100)}>-100</button>
      <button onClick={() => props.handelSetCount(100)}>+100</button>
      <button onClick={() => props.handelSetCount(10)}>+10</button>
      <button onClick={() => props.handelSetCount(1)}>+1</button>
    </div>
  );
};
export default Controller;

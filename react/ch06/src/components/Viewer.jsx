const Viewer = ({ count }) => {
  return (
    <div className="Viewer">
      <div>현재 카운트 : </div>
      <h1>{count === 0 ? "--" : count}</h1>
    </div>
  );
};
export default Viewer;

const Counter = (props) => {
  const arr = [10, 20, 30];
    // let x = arr[0];
    // let y = arr[1];
    // let z = arr[2];
  const [x, y, z] = arr;

  const user = { name: "Lee", age: 30 };
  const { name: userName, age: userAge } = user;

  return <p>현재 숫자: {props.count}</p>;
};

export default Counter;



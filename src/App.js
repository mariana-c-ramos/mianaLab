import './App.css';

function App() {
  const users = [
    {name: "Pedro", age: 21},
    {name: "Mariana", age: 24},
    {name: "Hugo", age: 27},
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return (
          <User />
        )
      })}
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      {props.name} {props.age}
    </div>
  )
}

export default App;
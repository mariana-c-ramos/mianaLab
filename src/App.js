import './App.css';

function App() {
  return (
  <div className="App">
    <div>
      <User name="Mariana" age={24} email="mary.programs@gmail.com" />
      <User name="Sara" age={30} email="sara.programs@gmail.com" />
      <User name="Bela" age={38} email="bela.programs@gmail.com" />
    </div>

    <div>
      <Job salary={90000} position="Senior SDE" company="Amazon"/>
      <Job salary={12000} position="Junior SDE" company="Google"/>
      <Job salary={10000} position="Project Manager" company="Netflix"/>
    </div>
  </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <h1>{props.position}</h1>
      <h2>{props.salary}</h2>
      <h3>{props.company}</h3>
    </div>
  );
};

export default App;
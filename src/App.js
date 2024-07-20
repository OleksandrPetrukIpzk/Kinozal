import {List} from "./Components/ListFilms/List";
import {Header} from "./Components/Header/Header";
import {useState} from "react";
import {Context} from "./context";

function App() {
    const [login, setLogin] = useState('hi');

  return (
      <Context.Provider value={{login, setLogin}}>
    <div className="App">
        <Header/>
      <List/>
    </div>
      </Context.Provider>
  );
}

export default App;

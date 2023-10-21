import React from "react";
import Image from "./Group 78.png";
import Button from "./Components/Button";
import Input from "./Components/Input";
import 'material-icons/iconfont/material-icons.css';
import "./App.css";
function App() {
  return (
    <div className="Main">
      <div className="Nav">
      
      <Button/>
      <span className="material-icons-sharp">person</span>
      </div>
      <div className="Content">

        <div className="Data">
          <h3>
            The Commute 2.0 !
          </h3>
          <div className="motto">
          <p>
            Sit proident sunt ipsum est.Cupidatat duis dolor exercitation fugiat mollit mollit consectetur sunt laborum in. Duis reprehenderit deserunt ipsum dolore in minim ullamco. Mollit elit id et occaecat in consectetur aliquip velit aliqua.
          </p>
          </div>
        </div>
        <div className="Image">
          <img src={Image} className="Image" />
        </div>
      </div>
      <div className="Find">
        <div className="SearchBox">
          <Input/>
        </div>
      </div>
    </div>
  );
}

export default App;

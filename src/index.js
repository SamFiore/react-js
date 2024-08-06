import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import { Product } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";
import {Contador} from "./Counter"

const root = ReactDOM.createRoot(document.getElementById("root"));

// const users = [
//   {
//     id: 1,
//     name: "Alberto Mussolinni",
//     image: "https://robohash.org/user1",
//   },
//   {
//     id: 2,
//     name: "Cristian Albergara",
//     image: "https://robohash.org/user2",
//   },
// ];

// const handleChange = (e) => {
//   console.log(e.target.value + "...");
// };



root.render(
  <>

    <Contador/>

    {/* {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image}/>
        </div>
      );
    })} */}

    {/* <TaskCard ready={false} />

    <Saludar />
    <Button text="Saludar"/>
    <input onChange={handleChange}/>

    <form onSubmit={(e) => {
      e.preventDefault()
      alert('enviado')
    }}>
      <h1>Registro User</h1>
      <button>Send</button>
    </form> */}

    {/* <Posts/> */}

    {/* <Button text="Click me" />
    <Button text="Pay" />
    <Button text="" name="Joe"/> */}

    {/* <UserCard
      name="Ismael Alejandro"
      amount={3000}
      isMarried={true}
      points={[22.3, 52.1, 65.7]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={() => {
        alert("Hello world");
      }}
    />
    <UserCard
      name="Rafael Castillo"
      amount={1000}
      isMarried={false}
      points={[100,20]}
      address={{ street: "Av Some 123", city: "New York" }}
    /> */}
  </>
);

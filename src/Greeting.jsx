// export function Greeting(prop) {
//     console.log(prop)
//     return <h1>{prop.title}</h1>
//   }

export function Greeting({title,name = 'User'}) {
  console.log(title)
  return <h1>{title} {name}</h1>
}

export function UserCard({name,amount,isMarried,address,greet}){
  return <div>
    <h1>{name}</h1>
    <p>💵{amount}</p>
    <p>{isMarried ? 'married':'single'}</p>
    <ul>
      <li>City: {address.city}</li>
      <li>Address: {address.street}</li>
    </ul>
  </div>
}
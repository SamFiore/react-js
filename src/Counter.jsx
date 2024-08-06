import {useState,useEffect} from 'react'

export function Contador(){

    let [msg,setMsg] = useState('')
    let [num,setNum] = useState(0)

    useEffect(() => console.log('render'),[num])

    return <div>
        {/* <h1>Counter: {num}</h1>
        <button onClick={()=>{setCounter(num+1)}}>
            Sumar
        </button>
        <button onClick={()=>{
            if(num <= 0){
                return setCounter(num)
            }
            return setCounter(num-1)}}>
            Restar
        </button>
        <button onClick={()=>{setCounter(0)}}>
            Reiniciar
        </button> */}

        <input onChange={e=>setMsg(e.target.value)}/>
        <button onClick={() => alert('El mensaje es "' + msg + '"')}>
            save
        </button>

        <hr/>

        <h1>Counter: {num}</h1>
        <button onClick={()=>{setNum(num+1)}}>
            Incrementar
        </button>

    </div>
}
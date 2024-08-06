import {VscGlobe} from 'react-icons/vsc'

async function loadData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        return console.log(data)
    }catch(err){
        console.error(err)
    }
}

export function Posts(){
    return <button onClick={() => {
        loadData()
    }}>
        <VscGlobe/>
        Traer datos
    </button>
}
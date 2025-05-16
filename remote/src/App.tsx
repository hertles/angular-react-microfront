import {useState} from 'react'
import './App.css'
import RemoteLogo from "./shared/components/RemoteLogo/RemoteLogo.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <RemoteLogo value={count} onCounterClick={() => setCount(prevCount => prevCount + 1)}/>
    )
}

export default App

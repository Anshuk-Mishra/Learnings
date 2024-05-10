import { useEffect } from "react"
import { useRef } from "react"
import { useCallback } from "react"
import { useState } from "react"

export default function App() {
  const [length,setLength] = useState(8)
  const [numallow,setNumallow] = useState(false)
  const [charallow,setCharallow] = useState(false)
  const [password,setPassword] = useState("")
  
  const generator = useCallback(()=>{
    let store = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz"
    if(numallow) store += "0123456789"
    if(charallow) store += ",./<>?;:[]{}=+-_)(*&^%$#@!~"
    let passcode = ""
    for(var i = 0; i < length; i++){
      let char = Math.floor(Math.random()*store.length+1)
      passcode += store.charAt(char)
    }
    setPassword(passcode)
  },[length,numallow,charallow,setPassword])
  
  const passowordRef = useRef(null)
  const copytoclipboard = useCallback(()=>{
    passowordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{generator()},[length,numallow,charallow,setPassword])
  
  return (
    <div className="my-8 py-3 bg-gray-800 w-full mx-auto shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-white my-4">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passowordRef}/>
          <button className="bg-blue-700 text-white px-3 py-0.5 shirnk-0" onClick={copytoclipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex gap-x-1 items-center">
            <input type="range" min={6}  max={100} value={length} className="cursor-pointer" onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className="flex gap-x-1 items-center">
            <input type="checkbox" defaultChecked={numallow} id="numberInput" onChange={() => {setNumallow((prev) => !prev)}} />
            <label>Numbers</label>
          </div>
          <div className="flex gap-x-1 items-center">
            <input type="checkbox" defaultChecked={charallow} id="characterInput" onChange={() => {setCharallow((prev) => !prev)}} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>

  )
}
import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-screen h-screen shadow-md rounded-lg px-4 py-3  bg-green-300 text-orange-500 flex flex-col items-center justify-center">
      
    <div className=" w-2/5 h-96 flex  justify-center flex-col shadow-lg bg-green-200 rounded-3xl overflow-hidden mb-6 mt-6 px-4">

        <h1 className=' text-center text-4xl text-black font-bold my-4 '>Password Generator</h1>

        <div className="flex  shadow-lg rounded-lg overflow-hidden mb-6 mt-6">
        <input
            type="text"
            value={password}
            className=" outline-none w-full py-1 px-3 text-lg text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none text-xl bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
        </div>
        

        <div className='flex items-center justify-evenly text-sm  mt-6 mb-4'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label className = "text-xl text-black">Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label className = "text-xl text-black" htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label 
          className = "text-xl text-black"
          htmlFor="characterInput">Characters</label>
      </div>
    </div>


    </div>
    
</div>
    
  )
}

export default App
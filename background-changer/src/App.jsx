import React from "react"
import { useState } from "react"

function App(){

  const [backgroundColor, setBackgroundColor] = useState('red')
  return(
    <div className="main w-full h-screen  flex justify-end"
    style={
      {backgroundColor:backgroundColor}
    }>
      <div className="nav h-auto w-auto bg-white flex flex-col items-center justify-center  rounded-full  mx-5 p-5 gap-5">
      
      <button onClick={()=> setBackgroundColor('black')} className="bg-black text-white px-5 py-2 rounded-3xl text-lg"
         style={
          {backgroundColor:'black'}
        }
        >Black</button>

      <button onClick={()=> setBackgroundColor('blue')}
      className="bg-blue-400 text-white px-6 py-2 rounded-3xl text-lg">Blue</button>

      <button  onClick={()=> setBackgroundColor('green')}
      className="bg-green-300 text-white px-4 py-2 rounded-3xl text-lg">Green</button>

      <button 
       onClick={()=> setBackgroundColor('Red')}
       className="bg-red-600 text-white px-6 py-2 rounded-3xl text-lg">Red</button>

      <button 
       onClick={()=> setBackgroundColor('yellow')}
      className="bg-yellow-200 text-white font-bold px-4 py-2 rounded-3xl text-lg">Yellow</button>

      <button 
       onClick={()=> setBackgroundColor('pink')}
      className="bg-pink-300 text-white px-6 py-2 rounded-3xl text-lg">Pink</button>

      <button 
       onClick={()=> setBackgroundColor('orange')}
      className="bg-orange-300 text-white px-4 py-2 rounded-3xl text-lg">Orange</button>

      <button 
       onClick={()=> setBackgroundColor('white')}
      className="bg-orange-300 text-white px-4 py-2 rounded-3xl text-lg">white</button>

      <button
       onClick={()=> setBackgroundColor('gray')}
       className="bg-gray-300 text-white px-6 py-2 rounded-3xl text-lg">Gray</button>
      
      


      </div>
      
    </div>
  )
}
export default App
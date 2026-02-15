// import { useState } from 'react'
// import { useEffect, useRef } from 'react'
// import { useState } from 'react'
import { Button, Typography } from '@mui/material';
import './App.css'
// import List from './List';
// import Child from './Child'

function App() {
  // const [count, setCount] = useState<number>(0);
  // const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(()=>{
  //   inputRef.current?.focus();
  // },[])
  // const [email, setEmail] = useState<string>("");

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
  //   setEmail(e.target.value)
  // }
  return (
    <>
      {/* <Child name='debraj' age={30} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <input type="text" ref={inputRef} />
      <input type="text" value={email} onChange={handleChange} placeholder='enter your email' />

      <List items={[1, 2, 3, 4, 5]} render={(item) => <p key={item}>{item}</p>} /> */}
      <Typography variant='h4'>Welcome</Typography>
      <Button>Click Me</Button>
    </>
  )
}

export default App

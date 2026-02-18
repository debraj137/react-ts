// import { useState } from 'react'
// import { useEffect, useRef } from 'react'
// import { useState } from 'react'
// import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import './App.css'
import Login from './Login'
import Signup from './Signup'
// import styled from '@emotion/styled';
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

  // const MyButton = styled(Button)({
  //   backgroundColor: "#222",
  //   color: "white",
  // })
  return (
    <>
      {/* <Child name='debraj' age={30} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <input type="text" ref={inputRef} />
      <input type="text" value={email} onChange={handleChange} placeholder='enter your email' />

      <List items={[1, 2, 3, 4, 5]} render={(item) => <p key={item}>{item}</p>} /> */}
      {/* <Typography variant='h4'>Welcome</Typography>
      <Button>Click Me</Button> */}
      {/* <Box sx={{ padding: 4 }}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Paper sx={{ padding: 2 }}>Left</Paper>
          </Grid>
          <Grid size={6}>
            <Paper sx={{ padding: 2 }}>Right</Paper>
          </Grid>
        </Grid>
      </Box> */}
      {/* <MyButton>Styled Button</MyButton> */}
      <Signup/>
      <Login/>
    </>
  )
}

export default App

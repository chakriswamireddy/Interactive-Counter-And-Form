import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import { Box, createTheme, Grid2, ThemeProvider } from '@mui/material'
import DataForm from './components/DataForm'
import RichTextEditor from './components/RichTextEditor'
import BezierCurveAnimation from './assets/BeizerAnimation'
import { useSpring, animated } from 'react-spring'
import useCounterStore from './stores/useCounterStore'
import { Navigate, Route, Routes } from 'react-router'
import Home from './pages/Home'

function App() {



  const { d } = useSpring({
    from: {
      d: "M0,192L48,186.7C96,181,192,171,288,192C384,213,480,267,576,282.7C672,299,768,277,864,240C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L0,320Z",
    },
    to: async (next) => {
      while (true) {
        await next({
          d: "M0,192L48,200C96,208,192,192,288,170C384,148,480,120,576,144C672,168,768,232,864,250C960,268,1056,240,1152,208C1248,176,1344,144,1392,128L1440,112L1440,320L0,320Z",
        });
        await next({
          d: "M0,192L48,186.7C96,181,192,171,288,192C384,213,480,267,576,282.7C672,299,768,277,864,240C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L0,320Z",
        });
      }
    },
    config: { duration: 3000 },
    reset: true,

  });


  let theme = createTheme({
    palette: {
      primary: {
        main: '#47A8BD',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
  });

  const count = useCounterStore((state) => state.count);
  const fillerHeight = 400 +(count*10) - 400; 

  

  return (

    <ThemeProvider theme={theme} >

      <Routes>
        <Route path='/' element={ <Navigate to='/home' /> } />
        <Route path='/home' element={<Home />} />
      </Routes>

    </ThemeProvider>

  )
}


export default App

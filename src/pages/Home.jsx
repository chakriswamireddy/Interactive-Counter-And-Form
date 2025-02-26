import React from 'react'
import { useSpring, animated } from 'react-spring'


import { Box, createTheme, Grid2, ThemeProvider } from '@mui/material'
import RichTextEditor from '../components/RichTextEditor';
import Counter from '../components/Counter';
import DataForm from '../components/DataForm';
import useCounterStore from '../stores/useCounterStore';


function Home() {
    
    
    const count = useCounterStore((state) => state.count);
    const fillerHeight = 400 +(count*10) - 400; 
    
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



  return (
    <Grid2 container width='90vw' justifyContent='center' margin='0 auto' alignContent='center' border={0}    >


    <Grid2 container direction='column' gap={1} border={0}   mt={{xs:0, sm:10}} size={{ xs: 12, sm: 10, md:8 }}  
      bgcolor='#B4D2E7' borderRadius={0}  position='relative' overflow='hidden'  
    >
      <Grid2 container border={0} gap={2} p={{xs:0, sm:1}} alignContent='center' borderColor='green' direction={{xs:'column',sm:'row'}} size={{xs:12}} sx={{zIndex:3}} >

        <Counter />
        <RichTextEditor />
      </Grid2>
      <Grid2 container border={0} p={1} sx={{ height:{xs:'auto', sm: '350px'}}}    >
        <DataForm />

      </Grid2>

      {/* <Grid2 container border={0} height={85} position='absolute' >

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 130 1440 320">
          <animated.path fill="#51BBFE" fillOpacity="1" d={d} />
        </svg>
      </Grid2> */}

<div style={{ position: "absolute", bottom: -70, width: "100%", zIndex: 2, pointerEvents: "none" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 110 1440 ${320+ (count*10)}`}>
        <animated.path fill="#51BBFE" fillOpacity="1" d={d} />
        
        <rect x="0" y="320" width="1440" height={fillerHeight} fill="#51BBFE" />
      </svg>
    </div>


    </Grid2>
  </Grid2>
  )
}

export default Home
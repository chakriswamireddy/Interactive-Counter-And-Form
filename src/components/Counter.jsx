import { Box, Button, Card, CardContent, Grid2, Typography } from '@mui/material'
import React from 'react'
import useCounterStore from '../stores/useCounterStore'

function Counter() {

  const count = useCounterStore((state) => state.count);
  const incrementCount = useCounterStore((state) => state.increment);
  const decrementCount = useCounterStore((state) => state.decrement);
  const resetCount = useCounterStore((state) => state.reset);

  return (
    <Grid2 border={0} borderRadius={3} gap={2} mt={1} p={1} container direction='column' alignContent='center' justifyContent='center' alignSelf='center' size={{ xs: 10, sm: 5.5 }}
      boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
    >

      <Grid2 alignSelf='center' border={0} width='max-content' >
        <Card variant='outlined' sx={{ borderRadius: '10px', width: '80%', minWidth: '170px', background: '#51BBFE' }} >
          <CardContent>

            <Typography fontWeight={800} fontSize={35} alignContent='center' textAlign='center' color='white'
              sx={{
                textShadow: ' 0px 2px 0px #b2a98f,0px 14px 10px rgba(0,0,0,0.15),0px 5px 2px rgba(0,0,0,0.1),0px 34px 30px rgba(0,0,0,0.1)'

                // 2px 2px 0px rgba(0,0,0,0.2)'
              }}
            >
              {count}
            </Typography>

          </CardContent>
        </Card>
      </Grid2>


      <Grid2 container border={0} gap={1} alignContent='center' justifyContent='center' >
        <Box  onClick={decrementCount}  border={2} borderColor='#47A8BD' borderRadius='50%' height='25px' width='25px' padding={0.2} alignSelf='center'
          sx={{placeContent:'center', textAlign:'center'}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#47A8BD" d="M18 16H6c-1.654 0-3-1.346-3-3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3M6 12c-.551 0-1 .449-1 1s.449 1 1 1h12c.551 0 1-.449 1-1s-.449-1-1-1z" />
          </svg>
        </Box>
        {/* <Button onClick={decrementCount} size='small' sx={{ fontWeight: '900', zIndex: 3, borderRadius: 10, }} variant="outlined"   >- </Button> */}
        <Button  onClick={resetCount} sx={{ fontWeight: 'bolder', zIndex: 3,borderWidth:2 }} variant="outlined"> Reset </Button>
        {/* <Button onClick={incrementCount} sx={{ fontWeight: 'bolder', zIndex: 3, borderRadius: 10 }} variant="outlined">+</Button> */}
        <Box  onClick={incrementCount}  border={2} borderColor='#47A8BD' borderRadius='50%' height='25px' width='25px' padding={0.2} alignSelf='center'
           sx={{placeContent:'center', textAlign:'center'}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#47A8BD" d="M4 9h5V4h6v5h5v6h-5v5H9v-5H4zm7 4v5h2v-5h5v-2h-5V6h-2v5H6v2z" />
          </svg>
        </Box>
      </Grid2>
    </Grid2>
  )
}

export default Counter
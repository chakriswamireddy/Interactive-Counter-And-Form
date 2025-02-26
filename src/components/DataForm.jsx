import { Button, Grid2, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import useUserStore from '../stores/useUserStore';

function DataForm() {

    const [uId, setuId] = useState();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    // const [userObj, setUserObj] = useState({})

    const [phone, setPhone] = useState(0);

    const userDetails = useUserStore((state) => state.userDetails);
    const saveIdName = useUserStore((state) => state.saveIdName);

    const saveOtherDetails = useUserStore((state) => state.saveOtherDetails);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        // if (userDetails.id) {
        //     setuId(userDetails.id)
        // } else {
        //     setuId()
        // }

        setuId(userDetails.id ?? nanoid(6))
        if (userDetails.name) setName(userDetails.name);
        if (userDetails.email) setEmail(userDetails.email);
        if (userDetails.address) setAddress(userDetails.address);
        if (userDetails.phone) setPhone(userDetails.phone);
    }, [userDetails]);

    const handleSaveIdName = () => {
        if ( !name) {
            setErrMsg('Name shouldnt be empty');
            return;
        } 
        saveIdName(uId, name);

    }

    const handleSaveContactDetails = () => {
        if (!address || !phone || ! email) {
            setErrMsg('all fields are important');
            return;
        }
        saveOtherDetails({phone, address, email});
    }


    useEffect(() => {

        const handleExitClick =(e) => {

            // console.log(userDetails);
            const currDetails = useUserStore.getState().userDetails;
            // console.log(currDetails)

            // console.log(name)

            if ( (name && ! currDetails.name)  || ( email && ! currDetails.email) ) {
                e.preventDefault();
            }
        }

        window.addEventListener('beforeunload' , handleExitClick);

        return (()=> {
        window.removeEventListener('beforeunload' , handleExitClick);

        })
    },[])



    return (

      
        <Grid2 item padding={{ xs: 0, sm: 2 }} container gap={{xs:2, sm:4}} border={0} alignContent='center' justifyContent='center' size={12}
            // boxShadow='rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' 
            borderRadius={4} direction={{ xs: 'column', sm: 'row' }} height='max-content' p={{xs:4, md:0}} pt={4} 
        >
            

            <Grid2 direction='column' gap={3}  size={{ xs: 12, sm: 5 }}  border={0} container justifyContent='end' >
                <TextField id="standard-basic" value={uId} label="User Id" variant="outlined" sx={{ zIndex: 3 }} />
                <TextField id="standard-basic" type='text' label="Name" variant="standard" sx={{ zIndex: 3 }}
                   value={name} onChange={(e) => setName(e.target.value)} />
                <Button variant="contained" sx={{ zIndex: 3 }} onClick={handleSaveIdName} >Save</Button>
            </Grid2>

            <Grid2 container gap={2} size={{ xs: 12, sm: 5 }}  pt={0} direction='column' alignContent='start' border={0}>

                <TextField id="standard-basic" type='address' label="Address" variant="standard" sx={{ zIndex: 3 }} 
                   value={address} onChange={(e) => setAddress(e.target.value)}      />
                <TextField id="standard-basic" type='email' label="Email" variant="standard" sx={{ zIndex: 3 }} 
                    value={email} onChange={(e) => setEmail(e.target.value)}  />

             
                <PhoneInput
                    defaultCountry="in"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    style={{
                        zIndex: 3,
                        // border:'1px solid red',
                        // backgroundColor: 'red',
                        width: '100%'
                    }}
                    inputClassName='custom-phone-input'
                    
                />

                <Button onClick={handleSaveContactDetails} variant="contained" sx={{ zIndex: 3 }} >Save</Button>
            </Grid2>


        </Grid2>
       

    )
}

export default DataForm
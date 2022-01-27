import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';


const MakeAdmin = () => {
const [email,setEmail]=useState('');
const [success,setSuccess]=useState(false);


const handleAdminSubmit = e => {
const user = {email};
fetch('https://damp-retreat-61919.herokuapp.com/users/admin',{
method: 'PUT',
headers:{
'content-type': 'application/json'
},
body: JSON.stringify(user)
})
.then(res=>res.json())
.then(data=>{
    if(data.modifiedCount){
        console.log(data);
        setSuccess(true);
    }

})
e.preventDefault();
}
const handleOnBlur = e =>{
setEmail(e.target.value);
}

    return (
        <div>
            <h1 className='text-center fw-bold mt-5 mb-5'>Make an user admin</h1>
<form onSubmit={handleAdminSubmit} className='text-center'>
<TextField id="standard-basic" label="Email" type="email" className='w-25' variant="standard"
onBlur={handleOnBlur}
/>
<br></br>
<br></br>
<Button variant='contained' type="submit" className='px-5 pe-5 pt-2 pb-2 mb-5'>Make Admin</Button>
</form>
{
    success && <Alert severity="success">Successfully Made Admin</Alert>

}
        </div>
    );
};

export default MakeAdmin;
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput ,Box,Button} from '@mantine/core';
function MemberInput(props){
    const [editable,setEdit]=useState(false);
    let [a,setA]=useState(props.page);
    const form = useForm(props.data?{
        initialValues: {
          name:props.data.name,
            email: props.data.email,
          pid:props.data.pid
        },
      }:{
        initialValues: {
          name:'',
            email:'',
          pid:''
        },
      });
    return <Box w='320px' m='auto'>
        <form onSubmit={function(e){
            e.preventDefault();
            if(props.page==='member'){
                form.onSubmit((values) => console.log(values));fetch("http://localhost:3000/api/updateBooks",{method: "POST",  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },body: JSON.stringify({...form.values,pid:Number(form.values.pid)})})
            }
            else{fetch("http://localhost:3000/api/createMember",{method: "POST",  headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },body: JSON.stringify({...form.values,pid:Number(form.values.pid)})})

            }
 }}>
        <TextInput placeholder="Your name"
      label="Full name"readOnly={a==='member'?true:false}
      withAsterisk {...form.getInputProps('name')}/>
      <TextInput withAsterisk placeholder='Your email' readOnly={a==='member'?true:false} label='Email' {...form.getInputProps('email')}/>
      <TextInput withAsterisk placeholder='Your ID' readOnly={a==='member'?true:false} label='ID' {...form.getInputProps('pid')}/>
      {props.page==='member' && <Button mr={16} onClick={function(){setA(false); }} >Edit</Button>}
        <Button mt={20} type='submit'  >Submit</Button>
    </form>
    </Box>
}
export default MemberInput;

import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput ,Box,Button} from '@mantine/core';
function MemberInput(props){
    const [editable,setEdit]=useState(false);
    let [a,setA]=useState(props.router);
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
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput placeholder="Your name"
      label="Full name" readOnly={a}
      withAsterisk {...form.getInputProps('name')}/>
      <TextInput withAsterisk placeholder='Your email' readOnly={a} label='Email' {...form.getInputProps('email')}/>
      <TextInput withAsterisk placeholder='Your ID' readOnly={a} label='ID' {...form.getInputProps('pid')}/>
      {form.values.pid && <Button mr={16} onClick={function(){setA(false);console.log(8)}} >Edit</Button>}
        <Button mt={20} type='submit' onClick={function(){
            fetch("http://localhost:3000/api/updateBooks",{method: "POST",headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },body: JSON.stringify(form.values)})
        }}>Submit</Button>
    </form>
    </Box>
}
export default MemberInput;
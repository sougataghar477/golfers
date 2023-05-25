'use client';
import MemberInput from "../../../components/MemberInput";
import { useRouter } from 'next/navigation';
function CreateMember(){
    let router=useRouter();
    return <MemberInput router={false}/>
}
export default CreateMember;
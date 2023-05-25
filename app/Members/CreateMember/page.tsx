'use client';
import MemberInput from "../../../components/MemberInput";
import { useRouter } from 'next/navigation';
function CreateMember(){
    let router=useRouter();
    return <MemberInput page='createMember'/>
}
export default CreateMember;
import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../redux/crudSlice";
const CreateForm  = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector((state)=>state.users.users)
    const handleSubmitForm = (e)=>{
        e.preventDefault();
        let newId = 1; 
        if (users.length > 0) {
            newId = users[users.length - 1].id + 1;
        }
        dispatch(createUser({
            id: newId,
            name:name, 
            email: email }));
        setEmail("");
        setName("");
        navigate("/");
    }
    return (
        <div className="bg-gray-500 p-10 w-max h-fit mt-4 rounded-md text-white">
            <h1 className="text-2xl font-semibold">Add New User</h1>
            <form className="mt-2 flex flex-col justify-center items-start" onSubmit={handleSubmitForm}>
            <label>User name</label>
            <input type="text" className="rounded-md mt-1 w-80 p-1 text-black" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <label className="mt-2">Email</label>
            <input type="email" className="rounded-md w-80 text-black p-1" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <button type="submit" className="mt-6 bg-white px-3 py-1 rounded-md text-black">Submit</button>
        </form>
        </div>
    )
}
export default CreateForm;
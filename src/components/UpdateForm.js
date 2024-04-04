import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/crudSlice';
const UpdateForm = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.users.users);
    const existingUser = users.filter((user)=>user.id == id);
    const {name, email} = existingUser[0];
    const [updatedName, setUpdatedName] = useState(name);
    const [updatedEmail, setUpdatedEmail] = useState(email);
    const handleUpdateUser =(e)=>{
        e.preventDefault();
        dispatch(updateUser({id: id,
        name: updatedName, email: updatedEmail}))
        navigate("/")
    }
  return (
      <div className="bg-gray-500 p-10 w-max h-fit mt-4 rounded-md text-white">
            <h1 className="text-2xl font-semibold">Add New User</h1>
            <form className="mt-2 flex flex-col justify-center items-start" onSubmit={handleUpdateUser}>
            <label>User name</label>
            <input type="text" className="rounded-md mt-1 w-80 p-1 text-black" value={updatedName} onChange={(e)=>setUpdatedName(e.target.value)}></input>
            <label className="mt-2">Email</label>
            <input type="email" className="rounded-md w-80 text-black p-1" value={updatedEmail} onChange={(e)=>setUpdatedEmail(e.target.value)}></input>
            <button type="submit" className="mt-6 bg-white px-3 py-1 rounded-md text-black">Submit</button>
        </form>
        </div>
  )
}

export default UpdateForm;

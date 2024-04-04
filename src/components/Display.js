import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/crudSlice";
const Display=()=>{
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.users.users);
    const handleDeleteUser = (userid)=>{
        dispatch(deleteUser({id: userid}))
    }
    // const handleEditUser = (user)=>{
    //     dispatch(editUser({user}))
    // }
    return(
        <div className="w-screen">
            <div className="flex flex-row justify-between items-center mx-36">
                <h1 className="text-2xl font-bold">Users</h1>
                <Link to="/createUser" className="bg-green-600 mt-2 text-white px-4 py-2 rounded-lg text-lg cursor-pointer">+ Add new user</Link>
            </div>     
        <div className="relative overflow-x-auto shadow-md mx-36 mt-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-md text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {users.map((user)=>(
                <tr className="odd:bg-white even:bg-gray-50 border-b" key={user.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {user.id}
                </th>
                <td className="px-6 py-4">
                   {user.name}
                </td>
                <td className="px-6 py-4">
                    {user.email}
                </td>
                <td className="px-6 py-4">
                    <Link to={`/edit/${user.id}`} className="bg-blue-500 text-white mr-4 px-3 py-1 rounded-md cursor-pointer">Edit</Link>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer" onClick={()=>handleDeleteUser(user.id)}>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

        </div>
    )
}
export default Display;

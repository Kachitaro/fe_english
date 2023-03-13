import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from "react";
import { getAllUser, deleteUser } from "../services/userService";

function ListUser (){
    const [data, setData] = useState([])
    useEffect(() => {
        listUser()
    }, [])

    async function listUser(){
        const result = await getAllUser();
        setData(result);
    }

    const handleDeleteUser = async (id: string) => {
        await deleteUser(id);
        await listUser()
    }
    

    return(
        <React.Fragment>
            <div className="text-3xl text-center">Manager User</div>
                <div className="flex justify-center content-center">
                    <table className="border-collapse border border-slate-500 table-auto">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 ...">Name</th>
                                <th className="border border-slate-600 ...">Email</th>
                                <th className="border border-slate-600 ...">Role</th>
                                <th className="border border-slate-600 ...">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map(({id, username, email }) => (
                            <tr key={id}>
                                <td className="border border-slate-700 ...">{username}</td>
                                <td className="border border-slate-700 ...">{email}</td>
                                <td className="border border-slate-700 ...">{id}</td>
                                <td className="border border-slate-700 ...">
                                    <Button  size="small" startIcon={<EditIcon />}>Edit</Button>
                                    <Button onClick={() => {handleDeleteUser(id)}}  size="small" startIcon={<DeleteIcon />}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
        </React.Fragment>
    );
}

export default ListUser;
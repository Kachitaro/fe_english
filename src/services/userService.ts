import * as axios from "../utils/axios";

const handleLogin  = async (email: any, password: any) => {
  try {
    const res = await axios.post('/users_login', {
      email,
      password
    })
    return res
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = async () =>{
  try {
    const res = await axios.get('/users')
    return res
  } catch (error) {
    console.log(error);
  }
}

const deleteUser = async (id: string) =>{
  try {
    await axios.del(`/delete_user/${id}`)
  } catch (error) {
    console.log(error);
  }
}

const updateUser = async (id: string, data: any) => {
  try {
    await axios.update(`/update_user/${id}`, {
      data
    })
  } catch (error) {
    console.log(error);
  }

}

export {
  handleLogin,
  getAllUser,
  updateUser,
  deleteUser,
}
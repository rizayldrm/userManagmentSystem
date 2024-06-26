import axios from "axios"

const UserRoutes = {
  getUsers: async () =>
    await axios.get("http://localhost:8080/api/users")
      .then(response => { return response })
      .catch(err => {
        console.error("Server connection Err: " + err);
        return [];
      }),

  getAUser: async (id) =>
    await axios.get("http://localhost:8080/api/users/" + id)
      .then(response => { return response })
      .catch(err => {
        console.error("User couldn't get: " + err)
        return []
      }),

  newUser: async (username, mail, pass) =>
    await axios.post("http://localhost:8080/api/users/newUser", {
      newUsername: username,
      newMail: mail,
      newPass: pass
    }).then(response => { return response })
      .catch(err => {
        console.error("Server post err: " + err)
        return []
      }),

  updateUser: async (id, username, mail, pass) =>
    await axios.put("http://localhost:8080/api/users/updateUser", {
      userId: id,
      newUsername: username,
      newMail: mail,
      newPass: pass
    }).then(response => { return response })
      .catch(err => {
        console.error("Server put err: " + err)
        return []
      }),
    
  deleteUser : async (id) => 
    await axios.delete("http://localhost:8080/api/users/deleteUser",{
      data : {id : id}
    }).then(response => {return response})
    .catch(err => {
      console.error("Server delete err: "+err)
      return []
    })
}

export default UserRoutes

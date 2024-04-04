import { createSlice } from "@reduxjs/toolkit";
export const crudSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {
        createUser(state, action){
            state.users.push(action.payload);
        },
        updateUser(state, action) {
            const { id, name, email } = action.payload;
            const userToUpdate = state.users.find(user => user.id == id);
            if (userToUpdate) {
              userToUpdate.name = name;
              userToUpdate.email = email;
            }
        },
        deleteUser(state, action) {
            state.users = state.users.filter((user) => user.id !== action.payload.id);
          }          
    }
})
export const {createUser, deleteUser, updateUser} = crudSlice.actions;
export default crudSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";

const currentUser = {
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',
    profilePicture: 'jose.png',
    bannerPicture: 'polyglot.png',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '7/7/1968',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223,
    tuitsCount: 6114,
}



const profileSlice = createSlice({
    name: 'profile',
    initialState: currentUser,
    reducers: {
        updateField(state, action) {
            const { field, value } = action.payload;
            state[field] = value;
        },
        updateName(state, action) {
            const {value} = action.payload;
            const newName = value.split(' ');
            state.firstName = newName[0] ||'';
            state.lastName = newName[1] || '';
        }
    },
});
export const {updateField, updateName}=profileSlice.actions;
export default profileSlice.reducer;
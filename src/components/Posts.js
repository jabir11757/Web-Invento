import { createSlice } from "@reduxjs/toolkit";
import { postData } from "./postData";


export const postSlice = createSlice({
    name: "posts",
    initialState: { value: postData },
    reducers: {
        createPost: (state, action) => {
            state.value.push(action.payload)
        },

        deletePost: (state, action) => {
            state.value = state.value.filter((post) => post.id !== action.payload.id)
        },
        updatePost: (state, action) => {
            state.value.map((post) => {
                if (post.id === action.payload.id) {
                    post.title = action.payload.title;
                    post.body = action.payload.body;
                }
            })
        }
    }
})

export const { createPost, deletePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
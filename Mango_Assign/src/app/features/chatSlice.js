import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chatArrData, mockChatData } from "../mockData";


export const fecthMsgs = createAsyncThunk(
    "chat/fetchMsgs",
    async () => {
        const res = await chatArrData()
        // console.log(res)
        return res
    }
)

const intialState =
{
    chatData: [],
    status: "idle",
    error: null
}

export const chatSlice = createSlice({
    name: "chat",
    initialState: intialState,
    reducers: {
        addData: (state, action) => {
            // console.log()
             return {...state,chatData: [...state.chatData,action.payload]}
        }
    },
    extraReducers: (build) => {
        build.addCase(fecthMsgs.pending, (state) => {
            state.status = "loading"
        }).addCase(fecthMsgs.fulfilled,(state, action) => {
            state.status = "success";
            // console.log(action.payload)
            state.chatData = action.payload
        }).addCase(fecthMsgs.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

export const { addData } = chatSlice.actions

export default chatSlice.reducer
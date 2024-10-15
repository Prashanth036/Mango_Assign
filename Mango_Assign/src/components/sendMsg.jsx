import React from "react";
import profile from "../assets/profile.jpeg"
import SendIcon from '@mui/icons-material/Send';
import { Typography } from "@mui/material";



export default function SendMsg({ handleMsg }) {

    const [userDetails, setUserDetails] = React.useState({
        id: 7,
        userName: "EthanHunt",
        message: "",
        userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5I17810GjwUzgRKTF-fxN5iLN4YRvORQYoQ&s"
    });

    function handleButton(e) {
        if (e.key === 'Enter') {
            if (userDetails.message !== "") {
                handleMsg(userDetails)
            }
        }
    };


    const styles={
        input:{ width: "95%", padding: "9px",border:"1px solid grey",borderRadius:2 },
        button:{
            backgroundColor:"#1976d2",
            border:"none",
            color:"white"
          }
    }


    return (
        <>
            <Typography sx={{ backgroundColor: "", display: "flex", width: "100%" }}>
                <input style={styles.input} type='text'
                    onChange={(e) => setUserDetails({ ...userDetails, message: e.target.value })}
                    value={userDetails.message} onKeyDown={handleButton} placeholder="Enter Your Msg"
                />
                <button onClick={(e) => { if (userDetails.message !== "") return handleMsg(userDetails) }}
                  style={styles.button}
                >
                    {/* <SendIcon sx={{ backgroundColor: "" }} /> */}
                    Send
                    </button>
            </Typography>
        </>
    )
}
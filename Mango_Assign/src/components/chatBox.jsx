import { Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { formatDistanceToNow, parseISO } from 'date-fns';

export default function Chatbox({ disData, chatUser }) {
  const lastMessageRef = useRef(null); 

  const style = {
    chatUsers: (isCurrentUser) => ({
      maxWidth: '70%',
      margin: isCurrentUser ? '10px auto 10px 0' : '10px 0 10px auto',
      position: 'relative',
    }),
    chatBubble: (isCurrentUser) => ({
      maxWidth: '70%',
      padding: '10px 15px',
      margin: isCurrentUser ? '10px auto 10px 0' : '10px 0 10px auto',
      borderRadius: '20px',
      backgroundColor: isCurrentUser ? '#B2FFFF' : '#5F9EA0',
      color: 'black',
      boxShadow: 1,
      position: 'relative',
      fontFamily: "'Times New Roman', Times, serif;",
    }),
  };

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [disData]); 

  return (
    <>
      {disData.length > 0 &&
        disData.map((ele, idx) => {
          const timeAgo = formatDistanceToNow(parseISO(ele.timestamp), { addSuffix: true });
          const isCurrentUser = ele.userName !== "EthanHunt";

          const LastMsg = idx === disData.length - 1; 
          return (
            <div key={idx} ref={LastMsg ? lastMessageRef : null}>
              <Typography sx={style.chatUsers(isCurrentUser)}>
                <img
                  src={ele.userImage}
                  width={30}
                  height={30}
                  style={{ borderRadius: "50%", marginRight: '10px' }}
                  alt={ele.userName}
                />
                <span style={{ fontWeight: 'bold', color: '#333' }}>{ele.userName}</span>
                <span style={{ marginLeft: "10px", fontSize: '0.8rem', color: '#888' }}>{timeAgo}</span>
              </Typography>
              <Typography sx={style.chatBubble(isCurrentUser)}>{ele.message}</Typography>
            </div>
          );
        })}
    </>
  );
}

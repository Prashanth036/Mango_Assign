import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { addData, fecthMsgs } from './app/features/chatSlice';
import Chatbox from './components/chatBox';
import SendMsg from './components/sendMsg';
import { mockChatData } from './app/mockData';


const styles = {
  chatBox: {
    boxShadow: {lg:4,xs:0,sm:0},
    backgroundColor: "",
    py: {xs:2,sm:2,md:2},
    px: {xs:0,sm:0},
    mx: { xs: "", sm: "", md: "25%",lg:"25%" },
    my: {xs:"",sm:"",md:"1%",lg:"1%"},
    width:  { xs: "100%", sm: "100%", md: "50%" },
    height: {md:"91vh",sm:"94vh",xs:"97vh"}
  },
  msgBubbles:{ 
    overflowY: "scroll",
     height: {lg:"75vh",md:"75vh",xs:"90vh",sm:"90vh"}, 
     width:{sm:"100%",xs:"100%"},
     border: "1px",
     p:3,
    //  mx: { xs: "", sm: "", md: "1%",lg:"1%" }, 
    },
    chatFullBox:{ boxShadow: 5 ,
      mx:{lg:3}
      // width:{xs:"100%"}
    }
}

export default function App() {
  const [chatUser, setChatUser] = React.useState(true);
  const { chatData, status, error } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (status === "idle") {
      dispatch(fecthMsgs());
    }
  }, [dispatch, status]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  function handleMsg(userDetails) {
    const messageWithTimestamp = {
      ...userDetails,
      timestamp: new Date().toISOString(),
    };

    dispatch(addData(messageWithTimestamp));
    setTimeout(() => {
      const ranId = Math.floor(Math.random() * 6)
      const filterArr = mockChatData.filter((e, i) => i == ranId)
      // [{...filterArr,timestamp: new Date().toISOString()}]
      // filterArr[0].timestamp=new Date().toISOString()

      // console.log()

      const AddAutoMaticMsg = { ...filterArr[0], timestamp: new Date().toISOString() }
      // console.log(filterArr)
      //  {,chatData:[...state.chatData, filterArr[0]]}
      dispatch(addData(AddAutoMaticMsg))
    }, 2000);
  }

  return (
    <Container maxWidth="lg sm md" sx={{ maxHeight: "100vh" }}>
      <Box sx={styles.chatBox}>
        <Typography sx={{ fontFamily: "serif", fontSize: "20px", textShadow: "1px 0px 2px black" }}>ChatBox</Typography>
        <Box sx={styles.chatFullBox}>
          <Box sx={styles.msgBubbles}>
            {chatData.length > 0 ? <Chatbox disData={chatData} chatUser={chatUser} setChatUser={setChatUser} /> : ""}
          </Box>
          <Box sx={{}}>
            <SendMsg handleMsg={handleMsg} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

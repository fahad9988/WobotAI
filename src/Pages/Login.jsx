import React from 'react';
import "./Login.css";
import {Box,Input,Stack,Flex,Image,Heading,Text} from "@chakra-ui/react";
import Form from '../Components/Form';

const Login = () => {
  return (
   <div id="container" >

   <Box position={"absolute"} top={8} left={20} >
   <Image src="https://app.wobot.ai/assets/images/wobot-logo.png" />
   </Box>

   <Form/>

   <div id="slantDiv"></div>
   <Box  position={"absolute"} left="43%" bottom="105px" zIndex={500} >
    <Text  color="#909091" fontWeight={600}  >Terms of use | Privacy Policy</Text>
   </Box>
   </div>
  )
}

export default Login
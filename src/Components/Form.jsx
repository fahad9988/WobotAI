import React from 'react';
import {Box,Input,Stack,Flex,Image,Heading,Text, FormControl, FormLabel, Select, Tag, Button} from "@chakra-ui/react";
import logo from "../Images/logo.png";

const tags=["1-20","21-50","51-200","201-500","500+"]


const Form = () => {

  const [location, setLocation] = React.useState("");
console.log(location)
  return (
    
    <Box position="absolute" top="75px" left="31%" zIndex={100}  w="40%" bgColor={"white"} p="40px" borderRadius={"10px"}  boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;" >
      <Stack gap="15px" w="70%" m="auto">
        <Image display={"block"} m="auto" w="40px" h="35px" src={logo} />
        <Heading size="lg">It's a delight to have you onboard</Heading>
        <Text color="#909091" fontWeight={600}>Help us know you better.</Text>
        <Text color="#909091" fontWeight={600} m="auto" w="80%">(This is how we optimize Wobot as per your business needs)</Text>
      </Stack>

      <Stack w="80%" m="auto" gap="15px" mt="15px">
      <FormControl>
       <FormLabel>Your name</FormLabel>
       <Input type='text' placeholder='e.g. John Smith' _placeholder={{fontWeight:"600",color:"#A5ACB6"}} />
      </FormControl>

      <FormControl>
       <FormLabel>Company name</FormLabel>
       <Input type='text' placeholder='e.g. Alpha Inc.' _placeholder={{fontWeight:"600",color:"#A5ACB6"}} />
      </FormControl>

      <FormControl>
       <FormLabel>Industry</FormLabel>
       <Select placeholder='Select' fontWeight={600} color="#A5ACB6" >
       <option>TATA Industries</option>
       <option>Tech Industries</option>
       </Select>
      </FormControl>
      </Stack>

      <Box  w="80%" m="auto" mt="25px">
      <FormControl>
       <FormLabel>Number of locations</FormLabel>
       <Box display={"flex"} >
{
  tags.map((e)=>{
    return <Tag  mr="6px" size="lg" cursor={"pointer"} color={location==e?"white":"black"} bgColor={location==e?"#3766E8":"#EDF2F7"} _hover={{bgColor:"#3766E8",color:"white"}}  onClick={()=>{

     setLocation(e)
    }} >
      {e}
    </Tag>
  })
}

       </Box>
      </FormControl>
      </Box>

      <Box w="80%" m="auto"  mt="30px">
        <Button bgColor={"#3766E8"} color="white" w="100%" _hover={{bgColor:"#3766E8",color:"white"}} >Get Started</Button>
      </Box>

      <Box  position={"absolute"} left="33%" bottom="-50px" zIndex={500} >
    <Text  color="#909091" fontWeight={600}  >Terms of use | Privacy Policy</Text>
   </Box>
    </Box>
  )
}

export default Form;
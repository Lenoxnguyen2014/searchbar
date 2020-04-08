import React, {useState} from 'react'
import 'gestalt/dist/gestalt.css'
import { Box, Text, Modal, Image , IconButton, Button, Avatar, Mask} from "gestalt"


function Pin(props){
    const [hover,setHover]=useState("none")
    const mouseEnter =(event) => {
        setHover("flex")
    }
    
    const mouseLeave = (event) => {
        setHover( "none")
    }
 
    return(
    <Box 
      maxWidth={320}
      height={330}
      padding={4}
      column={12} 
      onMouseOver={mouseEnter}
      onMouseOut={mouseLeave}
    >
    <Mask rounding={4} 
      padding={4}
      
      >
    <Image
    alt={props.data.title}
    naturalHeight={props.data.height}
    naturalWidth={props.data.width}
    src={props.data.image}>
    <Box   position="absolute"
            padding={2}
            bottom
            margin={2}
            display={hover}
            >
    <Button 
            text="open" size="sm" color="blue" inline padding={2} margin={2} onClick={props.data.open}></Button>
    <IconButton   
            color="red"
            accessibilityLabel="Love"
            bgColor="white"
            icon="heart"
            iconColor={ props.data.liked ? "red" : "gray"}
            onClick={props.onLike}
            margin={2}
            />
    </Box>
    </Image>
    </Mask>
    <Box >
    <Text weight="bold">{props.data.title}</Text>
    <Text>{props.data.author}</Text>
    </Box>
    </Box>      
    )
}

export default Pin

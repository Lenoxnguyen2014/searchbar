import React, {useState} from 'react'
import 'gestalt/dist/gestalt.css'
import {Box, Text, Modal, Image, IconButton, Avatar, Mask, Button, Masonry,Item} from 'gestalt'
import Pin from '../Pin/pin'


function PinMasonry(props){
    return(
        <Masonry
            comp={Pin}
            items={props.pins}
            minCols={1}
            layout ="MasonryUniformRowLayout"
        />

    )
}
export default PinMasonry
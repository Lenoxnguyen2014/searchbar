import React, {useState} from 'react'
import 'gestalt/dist/gestalt.css'
import {Box, IconButton, Icon,SearchField, Link, Text,Avatar} from 'gestalt'
import Search from '../SearchBar/search'

function LogIn(props){
  console.log(props.onChange)
    return (
        <Box color="white" rounding={2} padding={3} display="flex" direction="row" alignItems="center">
          <Box padding={3}>
          <Avatar
            name="Shanice"
            size="lg"
            src="https://i.ibb.co/7tGKGvb/shanice.jpg"
            verified
        />
          </Box>
          <Box flex="grow" paddingX={2}>
            <Search onChange={props.onChange}
            />
          </Box>
          <Box paddingX={1}>
          <Link href="https://pinterest.com">
            <Box padding={2}>
              <Text>Home</Text>
            </Box>
          </Link>
          </Box>
          <Box paddingX={1}>
          <Link href="https://pinterest.com">
            <Box padding={1}>
              <Text>Liked</Text>
            </Box>
          </Link>
          </Box>
          <Box paddingX={1}>
          <Link href="https://pinterest.com">
            <Box padding={1}>
              <Text>Log Out</Text>
            </Box>
          </Link>
          </Box>
        </Box>
      )
    }

export default LogIn
import React from 'react'
import 'gestalt/dist/gestalt.css'
import {Box, IconButton, Icon,SearchField, Link, Text, Avatar} from 'gestalt'
import Search from '../SearchBar/search'


function LogOut(props){
    return (
        <Box color="white" rounding={2} padding={3} display="flex" direction="row" alignItems="center">
          <Box padding={3}>
          <IconButton accessibilityLabel="Profile" icon="person" size="md" />
          </Box>
          <Box>
            <Search onChange={props.onChange}/>
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
              <Text>Sign Up</Text>
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

export default LogOut
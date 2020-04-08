import React, {useState} from 'react'
import 'gestalt/dist/gestalt.css'
import {Box,SearchField} from 'gestalt'

function Search(props){
    console.log(props.onChange)
    return(
        <Box flex="grow">
            <SearchField
              accessibilityLabel="Demo Search Field"
              id="searchField"
              placeholder="Search and explore"
              onChange={props.onChange}
            />
        </Box>
    )
}

export default Search
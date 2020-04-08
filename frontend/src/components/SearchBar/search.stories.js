import React, { Component } from 'react'
import Search from './search'
import { action } from "@storybook/addon-actions";

export default {
    title: 'Search',
    component: Search,
}


export const Default = () => (
    <Search onChange='something'/>
  )
import React, { useState, useEffect } from 'react'
import LogIn from './LogIn'
import LogOut from './logOut'
import { action } from "@storybook/addon-actions";

export default {
    title: 'NavBar',
    component: LogIn, LogOut
}

export const LoggedIn = () => (
    <LogIn />
  )

  export const LoggedOut = () => (
    <LogOut />
  )

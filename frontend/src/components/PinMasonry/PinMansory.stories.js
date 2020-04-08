import React,{useState,useEffect} from 'react'
import PinMasonry from './PinMansonry'
import {action} from "@storybook/addon-actions";
import Fakedata from './Fakedata'
import Pin from '../Pin/pin'


  // this basically add more 
  export default {
    title: 'PinMasonry',
    component: PinMasonry
  }

  export const Many = () => {  
  const [pins, setPins] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        const pins = Fakedata.map(pin => {
          return {
            ...pin,
            open() {
              console.log(pin)
            }
          }
        })
        resolve(pins)
      }, 2000) // two seconds to simulate network request
    })
  }

  // When loading is true, present some sort of loading message. 
  // When loading is false, display the Masonry.

  useEffect(()=>{
    setLoading(true)
    fetchData().then(pins => {
      setPins(pins)
      setLoading(false)
    })
  })
  if (loading){
    return(
      "Oops sorry! Data is not loading"
    )}
  else{
    return(
      <div>
         < PinMasonry pins={pins}/>
      </div>
    )
    }

}


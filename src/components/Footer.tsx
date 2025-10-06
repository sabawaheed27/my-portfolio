"use client"

import {useState} from 'react'

const Footer = () =>{

    const [name, setName]= useState('')
        const [email, setEmail]= useState('')
        const [message, setMessage]= useState('')

        const onSubmit= (e: React.FormEvent)=>{
            e.preventDefault()
            console.log(name, email, message)
        }
    
    return(
        
        <form onSubmit={onSubmit}>
          <input 
          value={name}
          onChange={(e)=>setName(e.target.value)}
           type= "text"
            placeholder="Name"/>

          <input 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
           type= "email"
            placeholder="Email"/>

          <textarea 
          placeholder="Message"
          rows={4}
          value={message}
          onChange={(e)=> setMessage(e.target.value)}>

          </textarea>
          <button type="submit">Submit</button>
        </form>
        
    )
}
export default Footer;
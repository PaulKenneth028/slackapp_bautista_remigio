 'use client'
import React, { FormEvent } from 'react';
import { LoginUser } from '../lib/types';

type Props = {
  response: LoginUser[];
}

const Messages = ({ response }: Props) => {
  const onClick = (event:FormEvent) => {
    event.preventDefault()
    console.log(response)
  }

  
  return (
    <form>
      <label htmlFor='message'></label>
      <textarea id="message" name='message'></textarea>
      <button type="submit" onClick={onClick} >Send</button>
    </form>
  )
}

 

 

 export default Messages
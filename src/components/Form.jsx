import React, { useEffect, useState } from 'react'

function Form() {
    const[ticketQuantity,setTicketQuantity]=useState(1);
    const [total,setTotal]=useState(459)
    const handleTicketQty=(e)=>{
        setTicketQuantity(e.target.value)
        
    }
    useEffect(()=>{
        console.log(ticketQuantity)
        setTotal(ticketQuantity * 459)
    },[ticketQuantity])
  return (
    <form >
        <div className='flex flex-col gap-4 border border-solid border-black min-h-[200px] w-[250px] items-center py-4 rounded-md'>
        
            <input type="text" placeholder='Name' className='w-[200px] border border-solid border-gray-400' />
        
            <input type="tel"  placeholder='Phone' className='w-[200px] border border-solid border-gray-400' />

            <input type="number" value={ticketQuantity} onChange={handleTicketQty} min={1} className='w-[200px] border border-solid border-gray-400' />
        <div>
            Total: <span>{total}</span>
        </div>
        <div className='flex gap-2'>
        <button className='border border-solid border-gray-400 w-[100px]'>Done</button>
        <button className='border border-solid border-gray-400 w-[100px]'>Cancel</button>
        </div>

        </div>
    </form>
  )
}

export default Form

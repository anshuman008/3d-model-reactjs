import React from 'react'

const Footer = ({currency}) => {
  return (
    <div className='flex justify-between items-center px-3 h-20 '>
     
     <div className='flex gap-x-3 text-white'>
        <span>Logo</span>
        <span>COPYRIGHT © 2024 WHOOP</span>
        <span>TERMS OF USE</span>
        <span>TERMS OF SALE</span>
        <span>PRIVACY POLICY</span>
        <span>REFUND POLICY</span>
     </div>



         <div className=''>
            <span className='px-4 py-2 rounded-xl bg-gray-400'>{currency}</span>
         </div>
    </div>
  )
}

export default Footer
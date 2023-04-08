import { Button } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Model = ({children,isOpen,onClose}) => {
  return (isOpen && (
    <div className='react-modal-overlay' onClick={onClose}>
        <div className='react-modal-wrapper' onClick={e=>e.stopPropagation()}>
<div className='react-modal-content'>
<CloseIcon style={{marginLeft:"35rem",fontSize:"larger"}}/>
    {children}
</div>
        </div>
    </div>
  ))
}

export default Model
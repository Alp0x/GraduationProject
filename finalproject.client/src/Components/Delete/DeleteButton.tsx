import React from 'react'
import '../LogoutButton/LogoutButton.css'

const DeleteButton = ({id}: any) => {
    const removeData = (id:string):void => {
        fetch(`https://finalprojectbackend.azurewebsites.net/api/User/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
    }
  return (
    <button 
    className={'delete--button'}
    onClick={() => removeData(id)}
    >
        Delete Data
    </button>
  )
}

export default DeleteButton
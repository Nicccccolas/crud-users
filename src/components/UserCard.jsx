import React, { useState } from 'react'
import './styles/cardUser.css'
import Swal from 'sweetalert2'

const UserCard = ({ user, deleteUserById, setUpdateInfo, setFormIsClose }) => {

  const handleEdit = () => {
    setUpdateInfo(user)
    setFormIsClose(false)
  }

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure to delete this user?',
      width:'70%',
      padding:'.5rem',
      background:'rgb(218, 218, 218)',
      backdrop:'true',
      position:'center',
      allowOutsideClick:false,
      allowEscapeKey: true,
      showCancelButton: true,
      customClass:{
        popup:'alert-popup',
        confirmButton: 'alert_btn',
        cancelButton: 'alert_btn',
      },
      buttonsStyling: false,
      confirmButtonColor: '#5d93c9',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
        )
        deleteUserById(user.id)
      }
    })
  }
  
  return (
    <article className='user'>
      <h2 className='user_name'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='user_list'>
        <li
          className='user_item'>
          <span className='user_span'>Email</span>{user.email}
        </li>
        <li
          className='user_item'><span className='user_span'>Birthday</span>
          <div className='user_item-container'>
            <i className="user_gift fa-solid fa-gift"></i> {user.birthday}
          </div>
        </li>
      </ul>
      <footer className='user_footer'>
        <button className='user_btn' onClick={handleDelete}>
        <i
          className="user_trash fa-solid fa-dumpster" >
        </i>
        </button>
        <button className='user_btn' onClick={handleEdit}>
          <i
          className="user_edit fa-regular fa-pen-to-square">
        </i>
        </button>
      </footer>
    </article>
  )
}

export default UserCard
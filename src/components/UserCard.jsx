import React from 'react'

const UserCard = ({ user, deleteUserById, updateUserById, setUpdateInfo }) => {

  const getInfoUpdate = () => {
    setUpdateInfo(user)
  }

  return (
    <article className='card'>
      <h2 className='card_title'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='card_list'>
        <li className='card_items'><span className='card_span'>Email</span>{user.email}</li>
        <li className='card_items'><span className='card_span'>Birthday</span>{user.birthday}</li>
      </ul>
      <footer>
        <i onClick={() => deleteUserById(user.id)} className="fa-solid fa-dumpster" ></i>
        <i onClick={getInfoUpdate} className="fa-regular fa-pen-to-square"></i>
      </footer>
    </article>
  )
}

export default UserCard
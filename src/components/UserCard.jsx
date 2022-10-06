import React from 'react'

const UserCard = ({user, deleteUserById, updateUserById, setUpdateInfo}) => {

  const getInfoUpdate = () => {
    setUpdateInfo(user)
  }

console.log(user)

  return (
    <article className='card'>
      <h2 className='card_title'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='card_list'>
        <li className='card_items'><span className='card_span'>Email</span>{user.email}</li>
        <li className='card_items'><span className='card_span'>Birthday</span>{user.birthday}</li>
      </ul>
      <footer>
        {/* <button onClick={() => deleteUserById(user)}>Delete</button>
        <button onClick={getInfoUpdate}>Update</button> */}
      <i onClick={() => deleteUserById(user.id)} className="fa-solid fa-trash-can" ></i>
      <i onClick={getInfoUpdate} className="fa-solid fa-pen-to-square"></i>
      </footer>
    </article>
  )
}

export default UserCard
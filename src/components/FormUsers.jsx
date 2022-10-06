import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  birthday: ''
}

const FormUsers = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo}) => {

  const { handleSubmit, reset, register } = useForm()
  
  const formData = useRef() 

  useEffect(() => {
    if (updateInfo) {
        formData.current.email.value = updateInfo.email
        formData.current.password.value = updateInfo.password
        formData.current.first_name.value = updateInfo.first_name
        formData.current.last_name.value = updateInfo.last_name
        formData.current.birthday.value = updateInfo.birthday
      }
  }, [updateInfo])

  const submit = data => {
    console.log(data)
    if (updateInfo){
      updateUserById(updateInfo.id)
      setUpdateInfo()
    }else {
      createNewUser(data)
    }
    reset(defaultValues)
  }


  return (
    <form className='form' ref={formData} onSubmit={handleSubmit(submit)}>
      <h2 className='form_title'>{updateInfo ? 'Update this card' : 'Create a new card'}</h2>
      <div className='form_input'>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' {...register('email')} />
      </div>
      <div className='form_input'>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' {...register('password')} />
      </div>
      <div className='form_input'>
        <label htmlFor="first_name">First Name</label>
        <input type="text" id='first_name' {...register('first_name')} />
      </div>
      <div className='form_input'>
        <label htmlFor="last_name">Last Name</label>
        <input type="text" id='last_name' {...register('last_name')} />
      </div>
      <div className='form_input'>
        <label htmlFor="birthday">Birthday</label>
        <input type="date" id='birthday' {...register('birthday')} />
      </div>
      <button className='form_btn'>{updateInfo ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUsers
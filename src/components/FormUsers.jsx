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

  const { handleSubmit, register, reset } = useForm()
  
  const formData = useRef() 

  useEffect(() => {
    if (updateInfo) {
        reset(updateInfo)
      }
  }, [updateInfo])

  const submit = data => {
    if(updateInfo){
      updateUserById(updateInfo.id, data)
      setUpdateInfo()
    } else {
      createNewUser(data)
    }
      reset(defaultValues)
  }


  return (
    <form className='form' ref={formData} onSubmit={handleSubmit(submit)}>
      <h2 className='form_title'>{updateInfo ? 'Update this user' : 'New user'}</h2>
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
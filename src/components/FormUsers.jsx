import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import './styles/cardForm.css'
  const defaultValues = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  birthday: ''
}

const FormUsers = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormIsClose}) => {

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
      setFormIsClose(true)
  }

  const handleCloseForm = () => {
    setFormIsClose(true)
  }

  return (
    <form className='form' ref={formData} onSubmit={handleSubmit(submit)}>
      <i onClick={handleCloseForm} className="form_close fa-solid fa-circle-xmark"></i>
      <h2 className='form_title'>{updateInfo ? 'Update this user' : 'New user'}</h2>
      <div className='form_div'>
        <label className='form_label' htmlFor="email"> 
        <span>Email</span>
        </label>
        <input className='form_input' placeholder='Enter your email'
        type="email" id='email' {...register('email')} />
      </div>
      <div className='form_div'>
        <label className='form_label' htmlFor="password">
        <span>Password</span>
        </label>
        <input className='form_input' placeholder='Enter your password'
        type="password" id='password' {...register('password')} />
      </div>
      <div className='form_div'>
        <label className='form_label' htmlFor="first_name">
        <span>First name</span>
        </label>
        <input className='form_input' placeholder='Enter your first name'
        type="text" id='first_name' {...register('first_name')} />
      </div>
      <div className='form_div'>
        <label className='form_label' htmlFor="last_name">
        <span>Last name</span>
        </label>
        <input className='form_input' placeholder='Enter you last name'
        type="text" id='last_name' {...register('last_name')} />
      </div>
      <div className='form_div'>
        <label className='form_label' htmlFor="birthday">
        <span>Birthday</span>
          </label>
        <input className='form_input' type="date" id='birthday' {...register('birthday')} />
      </div>
      <button className='form_btn'>{updateInfo ? 'Update' : 'Create'}</button>
    </form>
  );
}

export default FormUsers
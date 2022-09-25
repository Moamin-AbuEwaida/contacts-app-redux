import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';


const AddContacts = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');

    const contacts = useSelector((state) => state);
    // console.log(contacts)
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.number === number && number);

        if(!name || !email || !number){
            return toast.warning('Please fill all fields')
        }
        if(checkEmail){
            return toast.error('This Email is already exists')
        }
        if(checkNumber){
            return toast.error('This phone number is already exists')
        }

        const data = {
            id: contacts[contacts.length -1].id +1,
            name,
            email,
            number
        };
        // console.log(data);
        dispatch({type:'ADD_CONTACT', payload:data});
        toast.success('Contact was added successfully');
        history('/');
    };

    return (
    <div className='container'>
        <div className='row'>
            <h1 className='display-3 text-center my-5'>Add Contact</h1>
            <div className='col-md-6 shadow mx-auto py-5'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type="text" placeholder='Name' className='form-control' value={name} onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <input type="email" placeholder='Email' className='form-control my-3' value={email} onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <input type="number" placeholder='Phone Number' className='form-control' value={number} onChange={e=>setNumber(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <input type="submit" value='Add new contact' className='btn btn-block btn-dark mt-3'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddContacts
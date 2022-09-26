import React,{useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';


const EditContact = () => {
    const {id} = useParams();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');

    const dispatch = useDispatch();
    const history = useNavigate();

    const contacts = useSelector(state=>state);
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(()=>{
        if(currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    },[currentContact]);

   

    const handleSubmit = (e)=>{
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email);
        const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number));

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
            id: parseInt(id),
            name,
            email,
            number
        };
        // console.log(data);
        dispatch({type:'UPDATE_CONTACT', payload:data});
        toast.success('Contact was updated successfully');
        history('/');
    };


  return (
    <div className='container'>
        {currentContact ? 
        <>
            
                <div className='row'>
                <h1 className='display-3 text-center my-5'>Edit Contact {currentContact.name}</h1>
                <div className='col-md-6 shadow mx-auto py-5'>
                    <form onSubmit={handleSubmit }>
                        <div className='form-group'>
                            <input type="text" placeholder='Name' className='form-control' value={name} onChange={e=>setName(e.target.value)}/>
                        </div>
                        <div className='form-group my-3'>
                            <input type="email" placeholder='Email' className='form-control' value={email} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <input type="number" placeholder='Phone Number' className='form-control' value={number} onChange={e=>setNumber(e.target.value)}/>
                        </div>
                        <div className='form-group mt-3'>
                            <input type="submit" value='Update contact' className='btn btn-dark'/>
                            <Link to="/" className='btn btn-danger mx-3'> Cancel </Link>              
                        </div>
                    </form>
                </div>
            </div>
            
        </>
        :
        (<h1 className='display-3 text-center my-5'>Contact with the ID:{id} is not exist</h1>
        )}
    </div>
  )
}

export default EditContact
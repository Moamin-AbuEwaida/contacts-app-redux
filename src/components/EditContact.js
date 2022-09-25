import React from 'react'
import {Link, useParams} from 'react-router-dom'
const EditContact = () => {
    const {id} = useParams();
  return (
    <div className='container'>
        <div className='row'>
            <h1 className='display-3 text-center my-5'>Edit Contact {id}</h1>
            <div className='col-md-6 shadow mx-auto py-5'>
                <form>
                    <div className='form-group'>
                        <input type="text" placeholder='Name' className='form-control'/>
                    </div>
                    <div className='form-group my-3'>
                        <input type="email" placeholder='Email' className='form-control '/>
                    </div>
                    <div className='form-group'>
                        <input type="number" placeholder='Phone Number' className='form-control'/>
                    </div>
                    <div className='form-group mt-3'>
                        <input type="submit" value='Update contact' className='btn btn-dark'/>
                        <Link to="/" className='btn btn-danger mx-3'> Cancel </Link>              
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditContact
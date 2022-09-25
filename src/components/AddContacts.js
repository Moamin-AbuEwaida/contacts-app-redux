import React from 'react'

const AddContacts = () => {
  return (
    <div className='container'>
        <div className='row'>
            <h1 className='display-3 text-center my-5'>Add Contact</h1>
            <div className='col-md-6 shadow mx-auto py-5'>
                <form>
                    <div className='form-group'>
                        <input type="text" placeholder='Name' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <input type="email" placeholder='Email' className='form-control my-3'/>
                    </div>
                    <div className='form-group'>
                        <input type="number" placeholder='Phone Number' className='form-control'/>
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
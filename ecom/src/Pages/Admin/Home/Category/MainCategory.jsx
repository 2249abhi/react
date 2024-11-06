import React from 'react'
import Sidebar from '../../../Components/Sidebar'
import { Link } from 'react-router-dom'

export default function MainCategory() {
  return (
    <div className='container-fluid my-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Sidebar/>
                    </div>
                    <div className='col-md-9'>
                        <div className='bg-primary p-2 text-light text-center'>Main Category <Link to='/admin/maincategory/create' className='text-light float-right'><i className='fa fa-plus text-light'></i> Create Main Category</Link></div>
                    </div>
                </div>
            </div>
  )
}

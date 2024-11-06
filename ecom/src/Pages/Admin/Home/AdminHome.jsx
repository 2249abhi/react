import React from 'react'
import HeroSection from '../../Components/HeroSection'
import Sidebar from '../../Components/Sidebar'
import { Link } from 'react-router-dom'

export default function AdminHome() {
    return (
        <>
            {/* <HeroSection title="Admin Home Section"/> */}
            <div className='container-fluid my-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Sidebar />
                    </div>
                    <div className='col-md-9'>
                        <div className="row">
                            <div className="col-md-6">
                                <img src='img/noimage.png' height={475} width="100%" />
                            </div>
                            <div className="col-md-6">
                                <h5 className='bg-primary text-light text-center p-2'>Admin</h5>
                                <table className='table table-bordered' >
                                    <thead>
                                        <tr>
                                            <th>Column</th>
                                            <th>Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>Abhishek Shrivastav</td>
                                        </tr>
                                        <tr>
                                            <td>User Name</td>
                                            <td>abhishek</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>abhishekshr7@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>9711493272</td>
                                        </tr>
                                        <tr>
                                            <td>Role</td>
                                            <td>Admin</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}><Link className='btn btn-info text-light p-2 w-100 bg-primary' to="/update-profile">Update</Link></td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

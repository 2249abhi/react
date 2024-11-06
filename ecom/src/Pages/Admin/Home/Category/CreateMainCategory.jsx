import React, { useState } from 'react'
import Sidebar from '../../../Components/Sidebar'
import { Link } from 'react-router-dom'
import formValidator from '../../../Validators/formValidator'
import imageValidator from '../../../Validators/imageValidator'

export default function CreateMainCategory() {
    let [data, setData] = useState({
        name: "",
        pic: "",
        active: true

    })

    let [errorMessage, setErrorMessage] = useState({
        name: "Name field is mendatoy",
        pic: "Pic field is mendatory"
    })

    let [show, setShow] = useState(false)

    function getInputData(e) {
        let name = e.target.name
        let value = e.target.files ? e.target.files[0].name : e.target.value
        if (name !== 'active') {
            setErrorMessage((old) => {
                return {
                    ...old,
                    [name]: e.target.files ? imageValidator(e) : formValidator(e)
                }
            })
        }
        setData((old) => {
            return {
                ...old,
                [name]: name === 'active' ? (value === '1' ? true : false) : value
            }
        })
    }

    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find((x) => x !== '')
        if (error)
            setShow(true)
        else
            setShow(false)
        console.log(e);

    }
    return (
        <div className='container-fluid my-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    <div className='bg-primary p-2 text-light text-center'>Create Main Category <Link to='/maincategory' className='fa fa-backward float-end text-light' > Back</Link></div><br />
                    <div className='container'>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label >Main Category Name*</label>
                                    <input type="text" name="name" onChange={getInputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : ''}`} id="nameFormControlInput1" placeholder="Enter Main Category Name" />
                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : '   '}
                                </div>
                                <div className="form-group col-md-4">
                                    <label >Main Category Pic*</label>
                                    <input type="file" name="pic" onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : ''}`} id="picFormControlInput1" />
                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : '   '}
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Status</label>
                                    <select name='active' className='form-control'>
                                        <option value={1}>Active</option>
                                        <option value={0}>InActive</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary mt-2">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

import React from 'react'

function Dashboard() {
const logOut = () =>{
    localStorage.removeItem("SignUp")
    window.location.reload()
}
const deleteAccount = () =>{
        localStorage.clear()
        window.location.reload()
}

    return (
        <>
            <div className="container">
                <div className='row'>

                    <div className="col-md-12 m-auto shadow mt-3">
                        <h3 className='my-3'>Dashboard</h3>
                        <table className='table table-bordered'>
                            <tr>
                                <td className='p-3'>User Name</td>
                                <td className='p-3'> <b> {localStorage.getItem("name")} </b> </td>
                            </tr>
                            <tr >
                                <td className='p-3'>User Email</td>
                                <td className='p-3'><b> {localStorage.getItem("email")} </b></td>
                            </tr>


                        </table>
                        <div className='d-flex gap-2 my-5 '>
                            <button type='button' onClick={deleteAccount} className='btn btn-danger'>
                                Delete Account
                            </button>
                            <button type='button' onClick={logOut} className='btn btn-secondary'>
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
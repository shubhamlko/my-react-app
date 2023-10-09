import React, { useState } from 'react'
const Postform = () => {
    const [inputFeild, setInputfield] = useState({
        userId: "",
        title: "",
        body: ""
    });

const [records , setRecords] = useState([]);

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name , value) 
        setInputfield({...inputFeild, [name]: value })
    }
    const submitHandler = e => {
        e.preventDefault();
        const formData = {...inputFeild, id:new Date().getTime().toString()};
        setRecords([...records, formData]);
        setInputfield({userId:" ",title:" ",body:" "});
       console.log(setInputfield)
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>


                        <form onSubmit={submitHandler}>

                            <div className='form-group mb-3'>
                                <label className="mb-1"> User Id :</label>
                                <input type="text" value={inputFeild.userId} className='form-control'name="userId"  onChange={changeHandler} />
                            </div>
                            <div className='form-group mb-3'>
                                <label className="mb-1"> Title : </label>
                                <input type="text" value={inputFeild.title} className='form-control' name="title"  onChange={changeHandler} />
                            </div>
                            <div className='form-group mb-3'>
                                <label className="mb-1">   Body :</label>
                                <input type="text"  value={inputFeild.body} className='form-control' name="body" onChange={changeHandler} />
                            </div>
              m              <div>
                                <button  type="submit" className='btn-primary btn'>Submit</button> 
                            </div>
                        </form>

                        <div className='my-5'>
                           
                                {
                                    records.map((curElem) =>{
                                        const { id, username, title, bodycontent} = curElem;
                                        return(
                                            <div className='d-flex align-items-center gap-3' key={curElem.id}>
                                            <div>{curElem.userId}</div>
                                            <div>{curElem.title}</div>
                                            <div>{curElem.body}</div>
                                            </div>
                                        )
                                    })
                                }
                               
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Postform
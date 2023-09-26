import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            comments: '',
            topic: "React"
        }
    }
    handlerUsernameChane = (event) => {
        this.setState({
            userName: event.target.value
        })

    }
    handlercommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handlertopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.userName} ||  ${this.state.comments} || ${this.state.topic}`);
        //event.prevantDefault();
    }
    render() {
        return (
            <>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-6 p-5'>


                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="userName">User Name</label>
                                    <input type="text" className="form-control" value={this.state.userName} onChange={this.handlerUsernameChane} />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Message</label>
                                    <input type="text" className="form-control" value={this.state.comments} onChange={this.handlercommentsChange} placeholder="Message" />
                                </div>
                                <div className="form-check p-0 my-3">
                                    <label htmlFor="">Topic</label>
                                    <select className="form-select" value={this.state.topic} onChange={this.handlertopicChange}>


                                        <option value="Angular">Angular</option>
                                        <option value="React">React</option>
                                        <option value="Vue">Vue</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form> 
                            </div>
                    </div>
                    </div>
            </>
        )
    }
}

export default Form
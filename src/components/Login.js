import React,{Component} from 'react';
import fire from '../config/fire';

class Login extends Component{

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);

        this.state = {
            email : "",
            password : ""
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then( (u) => {
                console.log(u)
            }).catch((err) => {
                console.log(err)
            });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then( (u) => {
                console.log(u)
            }).catch( (err) => {
                console.log(err)
            })
    }

    render(){

        const cardPosition = {
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            marginTop: '5%'
        } 
        const SingupStyle = {
            opacity: '0.5'
        }

        return(

            <div>
                <h3 className="mt-5">Welcome to Todo-App</h3>
                <hr />
                <p>Please login to continue.</p>

                <div className="card col-6" style={cardPosition}>
                    
                    <h5 className="card-header">Login <span style={SingupStyle}>/ Signup</span></h5>
                    
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label className="float-left" htmlFor="email">Email</label>
                                <input 
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <label className="float-left" htmlFor="password">Password</label>
                                <input 
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                />
                            </div>
                        </form>

                        <button className="btn btn-light mr-2" onClick={this.login}>Login</button>
                        <button className="btn btn-primary" onClick={this.signup}>Signup</button>

                    </div>
                </div>
           </div>
        )
    }
}

export default Login;
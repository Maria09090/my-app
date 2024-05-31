import React from 'react';

class Login {
    constructor(props){
                super(props);
                this.state = {
                        username: '',
                        password: '',
                        isLoggedin: false,
                
        };
    }
    
        handleInputChange = (event) => {
                const name = event.target.name;
                const value = event.target.value;
                this.setState({[name]: value})
        };
    handleLoggin = () => {
        const { username, pasword} = this.state;
        if ( username === 'username' && pasword === 'password') {
            this.thisState ({ isLoggedin: true});
            alert('Loggin successful');
        } else {
            alert('Loggin failed, please check your username and password');
        }
    };
    render() {
        if (this.state.isLoggedIn) {
            return <div> You are logged in! </div>;
        }
        return (
            <div className="login-container">
                <h1> Loigin </h1>
        <div className="input-conteiner">
            <label htmlFor="username"> username: </label>
            <input
            type="tekst"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputeChange}
        />
        </div>
        <div className="input-conteiner">
            <label htmlFor="passaword">password:</label>
            <input 
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            />
        </div>
        <button onClick={this.handleLoggin}>Login</button>
        </div>
        );
    }
}

export default Login;
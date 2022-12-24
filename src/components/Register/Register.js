import React from 'react';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            surname: "",
            email: "",
            password: ""
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onSurnameChange = this.onSurnameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmitRegister = this.onSubmitRegister.bind(this);
    }

    onNameChange(event){
        this.setState({name: event.target.value})
    }
    onSurnameChange(event){
        this.setState({surname: event.target.value})
    }
    onEmailChange(event){
        this.setState({email: event.target.value})
    }
    onPasswordChange(event){
        this.setState({password: event.target.value})
    }
    onSubmitRegister(){
        const { name,surname,email,password } = this.state;
        fetch("https://feycback-api.vercel.app/register",{ 
        // fetch("http://localhost:3000/register",{
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                surname: surname,
                email: email,
                password: password
            })
        })
            .then(response => response.json())
            .then( user => {
                if(user.id){
                    this.props.loadUser(user);
                    this.props.onRouteChange("signedIn");
                }
            })
    }

    render(){
        return (
            <div>
                <article className='br3 ba b--black-10 mv2 w-100 w-50-m w-25-l mw6 shadow-5 center' >
                    <main className="pa4 black-80" style={{zIndex: 1}}>
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Register</legend>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name(s)</label>
                                    <input 
                                        type="text" name="name"  id="name"
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        onChange={ this.onNameChange }
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Surname</label>
                                    <input 
                                        type="text" name="surname"  id="surname"
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        onChange={ this.onSurnameChange }
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input 
                                        type="email" name="email-address"  id="email-address" 
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        onChange={ this.onEmailChange }
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input 
                                        type="password" name="password"  id="password"
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        onChange={ this.onPasswordChange }
                                    />
                                </div>
                            </fieldset>
                            <div className="">
                                <input 
                                    type="submit" value="register" 
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    onClick={ this.onSubmitRegister }
                                />
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        )
    }
}

export default Register;

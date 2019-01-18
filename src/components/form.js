import React, { Component } from 'react'
import './form.css'
import './layout.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaUser,FaPencilAlt ,FaEnvelope} from 'react-icons/fa';
import {handler} from '../../lambda/test.js'
import {FormGroup} from 'reactstrap'

class Form extends Component {


    state={
       name:'',
       subject:'',
       email:'',
       message:''
    }

    handleChangeName = (event) => {
        this.setState({name: event.target.value});
      }
    handleChangeSubject = (event) => {
        this.setState({subject: event.target.value});
      }
    handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
      }
      handleChangeMessage= (event) => {
        this.setState({message: event.target.value});
      }

      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name, this.state.subject, this.state.email, this.state.message);
        handler(this.state.name, this.state.subject, this.state.email, this.state.message);
        this.setState({
            name:'',
            email:'',
            subject:'',
            message:''
        })
      }
    
    render() {
           
        
        return (
            <section id="contact">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12">
                            <h1 class="heading-large section-color-1">
                                CONTACT US
                            </h1>
                        </div>
                        <div className="col-sm-12">
                            <p className="text-large section-color-1">

                                If you would like to order a custom package, request a quote on a project or any other
                                queries,
                                <br />
                                feel free to send us a message either by our contact form or contact details below.
                            </p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-sm-6 col-sm-offset-3">
                            <form onSubmit={this.handleSubmit}id="contact_form"
                                action="https://dd5a1125ad6ad533c4897c968c501a3268e1c116.googledrive.com/host/0Bza3emUujzWYU3hvVE5ucy0wTlU/red/contact/email.php"
                                method="post" name="contactform">
                                <FormGroup>
                                    <FaUser size="20"/>
                                    <input onChange={this.handleChangeName} id="name" name="name" type="text" value={this.state.name} className="form-control"
                                        placeholder="Full Name*" required />
                                    <p></p>
                                </FormGroup>
                                <FormGroup>
                                    <FaPencilAlt size="20"/>
                                    <input onChange={this.handleChangeSubject} id="subject" name="subject" type="text" value={this.state.subject} className="form-control"
                                        placeholder="Subject*" required />
                                </FormGroup>
                                <FormGroup>
                                    <i>@</i>
                                    <input onChange={this.handleChangeEmail} id="email" name="email" value={this.state.email}  type="email" className="form-control"
                                        placeholder="Email Address*" required />
                                </FormGroup>
                                <div className="form-group">
                                    <FaEnvelope size="20"/>
                                    <textarea onChange={this.handleChangeMessage} name="message" id="message" value={this.state.message} className="form-control" rows="7"
                                        placeholder="Message*" required></textarea>
                                </div>
                                <div className="form-group">
                                    <button id="send_message" type="submit"  className="btn btn-1" value="Submit">Submit
                                        Your Message
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-12 section-color-1">
                            <ul className="contact-details">
                                <li>
                                    <h2>Jaše Prodanovića 16, Belgrade, Serbia <br />
                                        Drinčićeva 32, Belgrade, Serbia </h2>
                                </li>

                                <li>
                                    <h2>ateljeoffice@gmail.com </h2>
                                </li>
                                <li>
                                    <h2>(381) 11 322 4 772
                                        <br />
                                        (381) 65 329 29 73
                                    </h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
            // <!-- End Contact Form -->

            // <!-- Success Message -->

        )
    }
}


export default Form
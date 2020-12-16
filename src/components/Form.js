import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      text: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:8080/mail.php', 
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({...this.state})
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.status){
        this.setState({msg: jsonResponse.msg});
        this.setState({status: jsonResponse.status});
      }
      setInterval(() => { 
        this.setState({msg: null}) 
        this.setState({status: null}) 
      }
      , 5000);
    }).catch (error => {
      console.log(error)
    })
  }
  render() {
    const failedMsg = () => {
      return (
        this.state.msg ? 
        (<p className={"msg alert alert-" + this.state.status}>{this.state.msg}</p>) : 
        (
          <div className="form-layout">
            <div className="right-layout">
              <div className="text"><span className="info">פנו אלינו בכל דרך שתעדיפו </span> <br/>
                בטלפון, בפקס, בדואר או באמצעות טופס הפניות.<br/> אנו ב”המצבר״ נשתדל להיענות בהקדם לכל פנייה.
              </div>
              <div className="contact-info">
                טלפון:<span className="info"> 073-2200000</span>
                <br/>
                פקס:<span className="info"> 0732200002</span>
                <br/>
                כתובת:<span className="info"> יוסף ספיר 6, ראשון לציון.</span>
                <br/>
                אימייל :<span className="info"> hamazber@gmail.com</span>
                <br/>
                שעות פעילות:<span className="info"> א-ה בין השעות: 09:00-15:00</span>
              </div>
              <p className="join">הצטרפו לאתר המצבר</p>
            </div>
            <div className="left-layout  pt-3">
              <form className="form-controls" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input 
                  className="name form-control" 
                  name="name" 
                  type="text" 
                  placeholder="שם מלא"
                  onChange={(e) => this.setState({[e.target.name]: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  className="email form-control" 
                  name="email" 
                  type="email" 
                  placeholder="דואר אלקטרוני"
                  onChange={(e) => this.setState({[e.target.name]: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  className="phone form-control" 
                  name="phone" 
                  type="tel" 
                  placeholder="טלפון"
                  onChange={(e) => this.setState({[e.target.name]: e.target.value })}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  className="text form-control" 
                  name="text" 
                  type="text" 
                  placeholder="מה תרצה להגיד לנו?"
                  rows="7"
                  onChange={(e) => this.setState({[e.target.name]: e.target.value })}
                  required
                />
              </div>
                <button className="btn btn-send">שליחת פנייה</button>
              </form>
              <p className="join join-mobile">הצטרפו עוד היום למשפחת המצבר &gt;</p>
            </div>
        </div>
        )
      );
    }
    return (
      <div className="main mb-5 mt-5">
        <h1>צור קשר</h1>
        <div className="underscore"></div>
        {failedMsg()}
      </div>
    );
  }
}

export default Form;

import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    firstnameError: false,
    lastnameError: false,
    success: false,
  }

  onClickFirstName = event => {
    const fname = event.target.value
    if (fname === '') {
      this.setState({firstnameError: true})
    } else {
      this.setState({firstname: fname, firstnameError: false})
    }
  }

  onClickLastName = event => {
    console.log('cliked')
    const lname = event.target.value
    if (lname === '') {
      this.setState({lastnameError: true})
    } else {
      this.setState({lastname: lname, lastnameError: false})
    }
  }

  onSubmitSuccess = () => {
    console.log('submit success')
    this.setState({success: true})
  }

  onSubmitForm = event => {
    event.preventDefault()
    console.log('clicked')
    const {firstname, lastname} = this.state
    if (firstname !== '' && lastname !== '') {
      this.onSubmitSuccess()
    } else if (firstname !== '' && lastname === '') {
      this.setState({lastnameError: true})
    } else if (firstname === '' && lastname !== '') {
      this.setState({firstnameError: true})
    } else {
      this.setState({firstnameError: true, lastnameError: true})
    }
  }

  renderLoginPage = () => {
    const {firstnameError, lastnameError} = this.state
    return (
      <div>
        <form className="card-container" onSubmit={this.onSubmitForm}>
          <label htmlFor="username">FIRST NAME</label>
          <br />
          <input
            type="text"
            id="username"
            placeholder="First name"
            onBlur={this.onClickFirstName}
          />
          {firstnameError && <p>*Required</p>}
          <br />
          <label htmlFor="password">LAST NAME</label>
          <br />
          <input
            type="text"
            id="password"
            placeholder="Last name"
            onBlur={this.onClickLastName}
          />
          {lastnameError && <p>*Required</p>}
          <br />
          <div className="button-container">
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }

  onClickAnotherResponse = () => {
    this.setState({
      firstname: '',
      lastname: '',
      firstnameError: false,
      lastnameError: false,
      success: false,
    })
  }

  renderSuccesPage = () => (
    <div className="success-page">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.onClickAnotherResponse}>
        Submit another response
      </button>
    </div>
  )

  render() {
    const {success} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        {success ? this.renderSuccesPage() : this.renderLoginPage()}
      </div>
    )
  }
}

export default RegistrationForm

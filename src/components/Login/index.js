// Write your JS code here
import './index.css'

import Cookies from 'js-cookie'

import {Redirect, withRouter} from 'react-router-dom'

const Login = props => {
  // console.log('triggered')
  const userDetails = {username: 'rahul', password: 'rahul@2021'}
  const {history} = props
  const fetchLogin = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    // console.log(data)
    Cookies.set('jwt_token', data.jwt_token, {expires: 30})

    history.replace('/')
    console.log('clicked fetch')
  }
  const onClickLogin = () => {
    fetchLogin()
  }

  const token = Cookies.get('jwt_token')

  return (
    <div>
      <h1>Please Login</h1>
      <button type="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login

// Write your JS code here
import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    console.log('triggered')
    history.replace('/')
  }
  return (
    <button type="button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)

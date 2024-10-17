import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'
import './index.css'

const Login = props => {
  const onClickButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/')
  }
  return (
    <div>
      <button type="button" onClick={onClickButton}>
        Login
      </button>
    </div>
  )
}
export default withRouter(Login)

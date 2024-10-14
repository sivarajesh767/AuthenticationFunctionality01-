import './index.css'
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  const setCookiesAndNavigativeToHome = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expire: 30})
    history.replace('/')
  }
  const onClickLogin = async () => {
    const userDetails = {username: 'siva', password: 'siva@123'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.strigify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      setCookiesAndNavigativeToHome(data.jwt_token)
    }
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <h1>Place Login</h1>
      <button type="button" onClick={onClickLogin}>
        Login With sample credit
      </button>
    </div>
  )
}
export default withRouter(Login)

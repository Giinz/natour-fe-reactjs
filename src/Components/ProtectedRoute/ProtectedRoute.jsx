import {Route} from 'react-router-dom'

const ProtectedRoute = (auth, {component:Component,...rest}) => {
  return (
    <Route {...rest} render={()=>{
        <Component/>
    }}/>
  )
}

export default ProtectedRoute
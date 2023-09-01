import { Link , Route,Routes } from 'react-router-dom';
import { Nav } from './Navigation';
import { AuthData } from '../../auth/AuthWrapper';


export const  RenderRoutes = ()=>{
  const { user } = AuthData();

  return(
      <Routes>
        {
          Nav.map((r,i)=>{
            if (r.isPrivate && user.isAuthenticated) {
              return <Route key={i} path={r.path} element={r.element}   />
            } else if(!r.isPrivate){
              return <Route key={i} path={r.path} element={r.element}  />
            }
            
          })
        }
      
      </Routes>
  )
}


export const RenderMenu = () => {

  const { user, logout } = AuthData();

  const MenuItem = ({r})=>{
    return(
      <div className='menuItem'><Link to={r.path} >{r.name}</Link></div>
    )}
  


  return (
    <div className='menu'>
      { Nav.map((r, i) => {
   
   if (!r.isPrivate && r.isMenu) {
        return (
             <MenuItem key={i} r={r}/>
        )
   } else if (user.isAuthenticated && r.isMenu) {
        return (
             <MenuItem key={i} r={r}/>
        )
   } else return false
} )}

        {
          user.isAuthenticated ? 
          <div className='newItem'><Link to={'/'} onClick={logout}>Log Out</Link></div>
          :
          <div className='newItem'><Link to={'/login'} >Log In</Link></div>


        }
    </div>
  );
}


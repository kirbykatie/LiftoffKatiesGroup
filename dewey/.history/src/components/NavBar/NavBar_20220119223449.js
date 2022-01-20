import { Toolbar, Typography, AppBar} from "@material-ui/core";
import {NavLink} from 'react-router-dom';


function NavBar() {
    return (
        <div>
            {/* <AppBar>
                <Toolbar>
                    <Typography>
                <nav>
                    <Link to='Userlogin'>Login</Link>
                    <Link to='UserSignUp'>Sign Up</Link>
                </nav>
                 </Typography>
                </Toolbar>
            </AppBar>
        conditional links if logged in */}
        {/* <AppBar>
                <Toolbar>        
                    <Typography>  */}
                         <nav>
                            <li>
                            <NavLink activeClassName='active'to='/'>Home</NavLink>
                            </li>
                            <li>
                            <NavLink activeClassName='active' to='/userLogin'>Login</NavLink>
                            </li>
                            <li>
                            <NavLink activeClassName='active' to='/search'>Search</NavLink>
                            </li>
                            <li>
                            <NavLink  to='/bookShelf'>BookShelf</NavLink>
                            </li>
                        </nav>
                    {/* </Typography>
                 </Toolbar>
            </AppBar> */}

        </div>
    )
}

export default NavBar


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
                            <NavLink activeClassNameto='/'>Home</NavLink>
                            </li>
                            <li>
                            <NavLink to='/userLogin'>Login</NavLink>
                            </li>
                            <li>
                            <NavLink to='/search'>Search</NavLink>
                            </li>
                            <li>
                            <NavLink to='/bookShelf'>BookShelf</NavLink>
                            </li>
                        </nav>
                    {/* </Typography>
                 </Toolbar>
            </AppBar> */}

        </div>
    )
}

export default NavBar


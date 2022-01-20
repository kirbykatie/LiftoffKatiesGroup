import { Toolbar, Typography, AppBar} from "@material-ui/core";
import {Link} from 'react-router-dom';


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
                            <Link to='/landingPage'>Home</Link>
                            </li>
                            <li>
                            <Link to='/userLogin'>Login</Link>
                            </li>
                            <li>
                            <Link to='/search'>Search</Link>
                            </li>
                            <li>
                                
                            </li>
                            <Link to='/bookShelf'>BookShelf</Link>
                        </nav>
                    {/* </Typography>
                 </Toolbar>
            </AppBar> */}

        </div>
    )
}

export default NavBar


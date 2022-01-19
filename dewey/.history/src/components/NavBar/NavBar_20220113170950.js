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
                            <Link to=''
                            <Link to='/userLogin'>Login</Link>
                            <Link to='/search'>Search</Link>
                            <Link to='/bookShelf'>BookShelf</Link>
                        </nav>
                    {/* </Typography>
                 </Toolbar>
            </AppBar> */}

        </div>
    )
}

export default NavBar


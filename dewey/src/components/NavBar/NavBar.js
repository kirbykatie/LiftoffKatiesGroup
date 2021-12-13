import { Typography} from "@material-ui/core";
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Typography>
                <Link to='/LandingPage'>Home</Link>
            </Typography>
        </div>
    )
}

export default NavBar


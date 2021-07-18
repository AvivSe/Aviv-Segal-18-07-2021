import {Button} from "@material-ui/core";
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();

    return <header>
        <Button onClick={()=> history.push('/')}>Purchase by item</Button>
        <Button onClick={()=> history.push('/stores')}>Purchase by stores</Button>
    </header>;
}

export default Header;

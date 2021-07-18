import {Route, Switch} from "react-router-dom";
import Delivery from "./Delivery";
import ArchiveItems from "./ArchiveItems";
import { useHistory } from 'react-router-dom';
import {Button} from "@material-ui/core";

function PurchaseByItem() {
    const history = useHistory();

    return <div>
        <header>
            <Button onClick={() => history.push('/')}> Delivery </Button>
            <Button onClick={() => history.push('/archive')}> Archive items </Button>
        </header>
        <Switch>
            <Route path={'/archive'}>
                <ArchiveItems/>
            </Route>
            <Route path={'/'}>
                <Delivery/>
            </Route>
        </Switch>
    </div>;
}

export default PurchaseByItem;

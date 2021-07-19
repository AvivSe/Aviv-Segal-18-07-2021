import {Route, Switch} from "react-router-dom";
import Delivery from "./Delivery";
import ArchiveItems from "./ArchiveItems";
import { useHistory } from 'react-router-dom';
import {AppBar, Button, Toolbar} from "@material-ui/core";
import styled from "styled-components";


const StyledAppBar = styled(AppBar)`
  background-color: #eeeeee !important;
  height: 64px;
  padding: unset;
  @media (max-width: 768px) {
    height: unset;
    }
    
`

const StyledToolBar = styled(Toolbar)`
  button {
    margin: 4px;
  }
  display: unset;

  @media (max-width: 768px) {
    padding: 12px;
    display: flex;
    button {
      width: 200px;
      margin: 4px;
    }
  }
`

function PurchaseByItem() {
    const history = useHistory();

    return <div>
        <header>
            <StyledAppBar position={"sticky"}>
                <StyledToolBar>
                    <Button color={'primary'} variant={'contained'} onClick={() => history.push('/')}> Delivery </Button>
                    <Button color={'primary'} variant={'contained'} onClick={() => history.push('/archive')}> Archive items </Button>
                </StyledToolBar>
            </StyledAppBar>

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

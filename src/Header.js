import {AppBar, Button, Menu, Toolbar} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import styled from "styled-components";
import MenuItem from '@material-ui/core/MenuItem';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrency} from "./redux/currency/currency.actions";
import {getSelectedCurrency} from "./redux/currency/currency.selectors";

const StyledToolBar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  button {
    margin: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12px;
    button {
      width: 300px;
      margin: 4px;
    }
  }
`

function Header() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [currencyMenuAnchorElement, setCurrencyMenuAnchorElement] = useState(null);
    const { symbol } = useSelector(getSelectedCurrency);
    const handleClick = (event) => {
        setCurrencyMenuAnchorElement(event.currentTarget);
    };

    const handleClose = () => {
        setCurrencyMenuAnchorElement(null);
    };

    const handleCurrencyChange = currency => {
        return () => {
            handleClose();
            dispatch(setCurrency(currency));
        }
    }

    return <header>
        <AppBar position={"sticky"}>
            <StyledToolBar>
                <div>
                    <Button color={"secondary"} variant={"contained"} onClick={() => history.push('/')}>Purchase by
                        item</Button>
                    <Button color={"secondary"} variant={"contained"} onClick={() => history.push('/stores')}>Purchase
                        by
                        stores</Button>
                </div>
                <div>
                    <Button variant={'contained'} color={'secondary'} aria-controls="currencyMenu" aria-haspopup="true" onClick={handleClick}>
                        {symbol}
                    </Button>
                    <Menu
                        id="currencyMenu"
                        anchorEl={currencyMenuAnchorElement}
                        keepMounted
                        open={Boolean(currencyMenuAnchorElement)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleCurrencyChange('USD')}>$ USD</MenuItem>
                        <MenuItem onClick={handleCurrencyChange('ILS')} >₪ ILS</MenuItem>
                    </Menu>
                </div>
            </StyledToolBar>
        </AppBar>
    </header>;
}

export default Header;

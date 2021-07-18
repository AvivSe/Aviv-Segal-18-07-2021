import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PurchaseByItem from "./purchase-by-item/PurchaseByItem";
import PurchaseByStore from "./purchase-by-stores/PurchaseByStore";
import Header from "./Header";

function App() {
    return <Router>
        <div>
            <Header/>
            <Switch>
                <Route path={'/stores'}><PurchaseByStore /></Route>
                <Route path={'/'}><PurchaseByItem /></Route>
            </Switch>
        </div>
    </Router>;
}

export default App;

import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import HouseIndex from './HouseIndex/houseIndex.jsx';
import HouseRead from './HouseRead/houseRead.jsx';
import ApartmentIndex from './ApartmentIndex/apartmentIndex.jsx';
import ApartmentRead from './ApartmentRead/apartmentRead.jsx';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>React Realty Course</h2>

                    <div>
                        <Link to={"/house/index"}>Browse all houses</Link>
                    </div>
                    <div>
                        <Link to={"/house/read/1"}>Single house info</Link>
                    </div>
                    <div>
                        <Link to={"/apartment/index"}>Browse all apartments</Link>
                    </div>
                    <div>
                        <Link to={"/apartment/read/1"}>View single apatment</Link>
                    </div>

                    <Switch>
                        <Route path="/house/index" component={HouseIndex}/>
                        <Route path="/house/read/:id" component={HouseRead}/>
                        <Route path="/apartment/index" component={ApartmentIndex}/>
                        <Route path="/apartment/read/:id" component={ApartmentRead}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
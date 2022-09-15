import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import HouseIndex from './HouseIndex/houseIndex.jsx';
import HouseRead from './HouseRead/houseRead.jsx';
import ApartmentIndex from './ApartmentIndex/apartmentIndex.jsx';
import ApartmentRead from './ApartmentRead/apartmentRead.jsx';

import Header from './Header/header.jsx';
import { Layout } from 'antd';
const { Content, Footer } = Layout;

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Header />
                    <Layout className="site-layout">
                        <Content style={{margin: "0 16px"}}>
                            <div>
                                <h2>React Realty Course</h2>

                                <Switch>
                                    <Route path="/house/index" component={HouseIndex} />
                                    <Route path="/house/read/:id" component={HouseRead} />
                                    <Route path="/apartment/index" component={ApartmentIndex} />
                                    <Route path="/apartment/read/:id" component={ApartmentRead} />
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Realty Course, 2022</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}
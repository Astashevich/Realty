import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';

const { Sider } = Layout;

export default class Header extends React.Component {

    render() {
        return (
            <Sider>
                <div className="logo"></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to={"/house/index"}>Browse all houses</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={"/apartment/index"}>Browse all apartments</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

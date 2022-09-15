import React from 'react';
import { connect } from 'react-redux';
import { getHouses } from './houseIndexActions.jsx';
import { Table, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from "@ant-design/icons"

class HouseIndex extends React.Component {
    componentDidMount() {
        this.props.getHouses();
    }

    render() {
        let housesInfo = this.props.housesInfo;
        let isLoading = this.props.isLoading;
        let error = this.props.error;

        let columnsInfo = [{
            title: '№',
            dataIndex: 'id',
            key: 'id'
            },
            {
                title: 'Build year',
                dataIndex: 'buildYear',
                key: 'buildYear'
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Link to={"/house/read/" + record.id}><SearchOutlined/> View</Link>
                )
            }];

        if (error) {
            return (
                <div>Error in data loading: {error}</div>
            );
        }

        return (
            <div>
                <Divider orientation={"center"}>House list</Divider>

                <Table
                    dataSource={housesInfo}
                    columns={columnsInfo}
                    loading={isLoading}
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        housesInfo: state.HouseIndexReducer.housesInfo,
        isLoading: state.HouseIndexReducer.isLoading,
        error: state.HouseIndexReducer.error
    }
};

let mapActionsToProps = (dispatch) => {
    return {
        getHouses: () => dispatch(getHouses())
    };
};

export default connect(mapStateToProps, mapActionsToProps)(HouseIndex);
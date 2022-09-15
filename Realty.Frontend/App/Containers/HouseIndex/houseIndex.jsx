import React from 'react';
import { connect } from 'react-redux';
import { getHouses } from './houseIndexActions.jsx';
import { Table, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from "@ant-design/icons"

class HouseIndex extends React.Component {
    componentDidMount() {
        this.props.getHouses(new Object());
    }

    handleTableChange(pagination, filters, sorter) {
        this.props.getHouses(pagination);
    }

    columnsInfo = [{
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

    render() {
        let housesInfo = this.props.housesInfo.map(item => ({ ...item, key: item.id }));
        let isLoading = this.props.isLoading;
        let error = this.props.error;
        let totalCount = this.props.totalCount;

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
                    columns={this.columnsInfo}
                    loading={isLoading}
                    pagination={{ total: totalCount }}
                    onChange={this.handleTableChange.bind(this)}
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        housesInfo: state.HouseIndexReducer.housesInfo,
        isLoading: state.HouseIndexReducer.isLoading,
        error: state.HouseIndexReducer.error,
        totalCount: state.HouseIndexReducer.totalCount
    }
};

let mapActionsToProps = (dispatch) => {
    return {
        getHouses: (pagination) => dispatch(getHouses(pagination))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(HouseIndex);
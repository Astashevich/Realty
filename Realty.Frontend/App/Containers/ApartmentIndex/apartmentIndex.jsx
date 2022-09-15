import React from 'react';
import { connect } from 'react-redux';
import { getApartments } from './apartmentIndexActions.jsx';
import { Table, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from "@ant-design/icons"

class ApartmentIndex extends React.Component {
    componentDidMount() {
        this.props.getApartments(new Object());
    }

    handleTableChange(pagination, filters, sorter) {
        this.props.getApartments(pagination);
    }

    columnsInfo = [{
            title: '№',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'House ID',
            dataIndex: 'houseId',
            key: 'houseId',
            render: (text, record) => (
                <Link to={"/house/read/" + record.houseId}><SearchOutlined /> {record.houseId}</Link>
            )
        },
        {
            title: 'Room amount',
            dataIndex: 'roomAmount',
            key: 'roomAmount'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Link to={"/apartment/read/" + record.id}><SearchOutlined /> View</Link>
            )
        }];

    render() {
        let apartmentsInfo = this.props.apartmentsInfo.map(item => ({ ...item, key: item.id }));
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
                <Divider orientation={"center"}>Apartments list</Divider>

                <Table
                    dataSource={apartmentsInfo}
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
        apartmentsInfo: state.ApartmentIndexReducer.apartmentsInfo,
        isLoading: state.ApartmentIndexReducer.isLoading,
        error: state.ApartmentIndexReducer.error,
        totalCount: state.ApartmentIndexReducer.totalCount
    }
};

let mapActionsToProps = (dispatch) => {
    return {
        getApartments: (pagination) => dispatch(getApartments(pagination))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(ApartmentIndex);
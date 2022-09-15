import React from 'react';
import { connect } from 'react-redux';
import { getApartments } from './apartmentIndexActions.jsx';
import { Table, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from "@ant-design/icons"

class ApartmentIndex extends React.Component {
    componentDidMount() {
        this.props.getApartments();
    }

    render() {
        let apartmentsInfo = this.props.apartmentsInfo;
        let isLoading = this.props.isLoading;
        let error = this.props.error;

        let columnsInfo = [{
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
                    columns={columnsInfo}
                    loading={isLoading}
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        apartmentsInfo: state.ApartmentIndexReducer.apartmentsInfo,
        isLoading: state.ApartmentIndexReducer.isLoading,
        error: state.ApartmentIndexReducer.error
    }
};

let mapActionsToProps = (dispatch) => {
    return {
        getApartments: () => dispatch(getApartments())
    };
};

export default connect(mapStateToProps, mapActionsToProps)(ApartmentIndex);
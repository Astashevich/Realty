import React from 'react';
import { connect } from 'react-redux';
import { getApartment } from './apartmentReadActions.jsx';
import { Link } from 'react-router-dom';
import { Descriptions, Divider, Row, Col, Spin } from 'antd';
import { RollbackOutlined } from "@ant-design/icons"

class ApartmentRead extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getApartment(id);
    }

    render() {
        let apartmentInfo = this.props.apartmentInfo;
        let isLoading = this.props.isLoading;
        let error = this.props.error;

        if (isLoading) {
            return (
                <div style={{ textAlign: "center", marginTop: "200px" }}>
                    <Spin size="large" />
                </div>
            );
        }

        if (error) {
            return (
                <div>Error in data loading: {error}</div>
            );
        }

        return (
            <div>
                <Divider orientation={"center"}>Information about single apartment</Divider>

                <Row>
                    <Col span={4}>
                        <img key="house_logo" width={160} height={160} src="/images/apartment_logo.png" />
                    </Col>
                    <Col span={20}>
                        <Descriptions bordered column={2}>
                            <Descriptions.Item label="Id in DB">{apartmentInfo.id}</Descriptions.Item>
                            <Descriptions.Item label="House id:">{apartmentInfo.houseId}</Descriptions.Item>
                            <Descriptions.Item label="Floor:">{apartmentInfo.floor}</Descriptions.Item>
                            <Descriptions.Item label="Price:">{apartmentInfo.price}</Descriptions.Item>
                            <Descriptions.Item label="Room amount:">{apartmentInfo.roomAmount}</Descriptions.Item>
                            <Descriptions.Item label="Living space:">{apartmentInfo.livingSpace}</Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>
                <div style={{ textAlign: "center", marginTop: "50px", fontWeight: "bold" }}>
                    <Link to={"/apartment/index"}><RollbackOutlined /> Back to apartment list</Link>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        apartmentInfo: state.ApartmentReadReducer.apartmentInfo,
        isLoading: state.ApartmentReadReducer.isLoading,
        error: state.ApartmentReadReducer.error
    }
};

let mapActionsToProps = (dispatch) => {
    return {
        getApartment: (id) => dispatch(getApartment(id))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(ApartmentRead);
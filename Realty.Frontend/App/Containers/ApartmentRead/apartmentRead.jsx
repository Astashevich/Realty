import React from 'react';
import { connect } from 'react-redux';
import { getApartment } from './apartmentReadActions.jsx';

class ApartmentRead extends React.Component {
    componentDidMount() {
        this.props.getApartment(1);
    }

    render() {
        let apartmentInfo = this.props.apartmentInfo;
        let isLoading = this.props.isLoading;
        let error = this.props.error;

        if (isLoading) {
            return (
                <div>Loading data...</div>
            );
        }

        if (error) {
            return (
                <div>Error in data loading: {error}</div>
            );
        }

        return (
            <div>
                <h3>Information about single apartment</h3>

                <div>
                    <span>Floor: </span>
                    <span>{apartmentInfo.floor} </span>
                </div>
                <div>
                    <span>Price: </span>
                    <span>{apartmentInfo.price} </span>
                </div>
                <div>
                    <span>Room amount: </span>
                    <span>{apartmentInfo.roomAmount} </span>
                </div>
                <div>
                    <span>Living space: </span>
                    <span>{apartmentInfo.livingSpace} </span>
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
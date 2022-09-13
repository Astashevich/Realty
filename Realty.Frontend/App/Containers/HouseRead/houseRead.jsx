import React from 'react';
import { connect } from 'react-redux';
import { getHouse } from './houseReadActions.jsx';

class HouseRead extends React.Component {
    componentDidMount() {
        this.props.getHouse(1);
    }

    render() {
        let houseInfo = this.props.houseInfo;
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
                <h3>Information about single house</h3>

                <div>
                    <span>Adress: </span>
                    <span>{houseInfo.address} </span>
                </div>
                <div>
                    <span>Build year: </span>
                    <span>{houseInfo.buildYear} </span>
                </div>
                <div>
                    <span>Max floor: </span>
                    <span>{houseInfo.maxFloor} </span>
                </div>
            </div>
            );
    }
}

let mapStateToProps = (state) => {
    return {
        houseInfo: state.HouseReadReducer.houseInfo,
        isLoading: state.HouseReadReducer.isLoading,
        error: state.HouseReadReducer.error
    }
};

let mapActionsToProps = (dispatch) => {
    return {
        getHouse: (id) => dispatch(getHouse(id))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(HouseRead);
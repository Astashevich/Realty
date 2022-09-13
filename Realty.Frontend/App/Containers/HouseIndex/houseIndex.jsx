import React from 'react';
import { connect } from 'react-redux';
import { getHouses } from './houseIndexActions.jsx';

class HouseIndex extends React.Component {
    componentDidMount() {
        this.props.getHouses();
    }

    render() {
        let housesInfo = this.props.housesInfo;
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
                <h3>House list</h3>

                <table>
                    <thead>
                        <th>ID</th>
                        <th>Creation Date</th>
                        <th>Address</th>
                    </thead>
                    <tbody>
                        {housesInfo.map(house => (
                            <tr key={house.id}>
                                <td>{house.id}</td>
                                <td>{house.buildYear}</td>
                                <td>{house.address}</td>
                            </tr>
                            ))}
                    </tbody>
                </table>
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
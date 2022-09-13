import React from 'react';
import { connect } from 'react-redux';
import { getApartments } from './apartmentIndexActions.jsx';

class ApartmentIndex extends React.Component {
    componentDidMount() {
        this.props.getApartments();
    }

    render() {
        let apartmentsInfo = this.props.apartmentsInfo;
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
                <h3>Apartment list</h3>

                <table>
                    <thead>
                        <th>Floor</th>
                        <th>Price</th>
                        <th>Room amount</th>
                        <th>Living space</th>
                    </thead>
                    <tbody>
                        {apartmentsInfo.map(apartment => (
                            <tr key={apartment.id}>
                                <td>{apartment.floor}</td>
                                <td>{apartment.price}</td>
                                <td>{apartment.roomAmount}</td>
                                <td>{apartment.livingSpace}</td>
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
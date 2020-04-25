import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { tokenSelector } from '../store/user/selectors';
import jwt_decode from 'jwt-decode';

const PrivateRoute = ({ component: Component, accessRole = null, ...rest }) => {
    const token = localStorage.getItem('token');;


    function hasRightRole() {
        if (!accessRole) {
            return true;
        }

        var roles = [];

        if (token != null) {
            roles = jwt_decode(token).role;
        }

        const role = roles.filter(val => accessRole.includes(val));
        return role.length > 0;
    }

    return (
        <Route
            {...rest}
            render={props => token && hasRightRole() ? (<Component {...props} />) : (<Redirect to="/page-not-found" />)}
        />
    );
};

export default PrivateRoute;
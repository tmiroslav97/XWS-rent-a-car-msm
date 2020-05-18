import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { tokenSelector } from '../store/user/selectors';
import jwt_decode from 'jwt-decode';

const PrivateRoute = ({ component: Component, accessRole = null, ...rest }) => {
    const token = useSelector(tokenSelector);


    function hasRightRole() {

        if (!accessRole) {
            return true;
        }


        if (token != null) {
            const roles = jwt_decode(token).roles;
            const role = roles.filter(val => accessRole.includes(val));
            return role.length > 0;
        } else {
            return true;
        }

    }

    return (
        <Route
            {...rest}
            render={props => token && hasRightRole() ? (<Component {...props} />) : (<Redirect to="/page-not-found" />)}
        />
    );
};

export default PrivateRoute;
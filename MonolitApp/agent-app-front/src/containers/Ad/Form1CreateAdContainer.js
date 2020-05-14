import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form1CreateAd from '../../components/Ad/Form1CreateAd'

const Form1CreateAdContainer = () => {
    const dispatch = useDispatch();

    return (
        <Form1CreateAd />
    );
}
export default Form1CreateAdContainer;
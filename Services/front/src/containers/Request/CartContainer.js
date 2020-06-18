import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { history } from '../../index';
import CartComponent from '../../components/Request/CartComponent';
import { useSelector } from 'react-redux';
import { searchDataSelector } from '../../store/ad/selectors';
import { isEmptyObject } from 'jquery';

const CartContainer = () => {
    const [cart, setCart] = useState(new Map(JSON.parse(localStorage.getItem('cart'))));
    const searchData = useSelector(searchDataSelector);

    const handleBundle = (event, item) => {
        cart.get(item).bundle = event.target.checked;
        setCart(cart);
        localStorage.setItem('cart', JSON.stringify(Array.from(cart.entries())));
    };

    const handleClearCart = () => {
        const temp = new Map();
        localStorage.setItem('cart', JSON.stringify(Array.from(temp.entries())));
        setCart(temp);
    };

    const handleRemoveItem = (item) => {
        cart.delete(item);
        const temp = new Map(cart);
        localStorage.setItem('cart', JSON.stringify(Array.from(temp.entries())));
        setCart(temp);
    };

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 8, offset: 2 }} xs={12}>
                    <CartComponent cart={cart} startDate={searchData.startDate} endDate={searchData.endDate} handleRemoveItem={handleRemoveItem} handleClearCart={handleClearCart} handleBundle={handleBundle} />
                </Col>
            </Row>
        </Container >
    );
}

export default CartContainer;

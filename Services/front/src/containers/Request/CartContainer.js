import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { history } from '../../index';
import CartComponent from '../../components/Request/CartComponent';

const CartContainer = () => {
    const [cart, setCart] = useState(new Map(JSON.parse(localStorage.getItem('cart'))));

    const getCurrentDate = () => {
        let newDate = new Date()
        //48h od trenutka pretrage
        newDate.setHours(48);
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let hours = newDate.getHours();
        let minutes = newDate.getMinutes();
        let rez = "";
        if (month < 10) {
            month = "0" + month;
        }
        if (date < 10) {
            date = "0" + date;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        rez = year + "-" + month + "-" + date + "T" + hours + ":" + minutes;
  
        return rez;
    }

    const handleBundle = (event, item) =>{
        cart.get(item).bundle = event.target.checked;
        setCart(cart);
        localStorage.setItem('cart', JSON.stringify(Array.from(cart.entries())));
    };

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 8, offset: 2 }} xs={12}>
                    <CartComponent cart={cart} getCurrentDate={getCurrentDate} handleBundle={handleBundle} />
                </Col>
            </Row>
        </Container >
    );
}

export default CartContainer;

import React from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap'
import PaginationComponent from '../../components/Pagination/Pagination';

const Pagination = (props) => {

    let items = [];

    for (let i = 1; i <= props.totalPageCnt; i++) {
        items.push(
            <Pagination.Item key={i} active={i === props.nextPage}>
                {i}
            </Pagination.Item>
        );
    }


    const handlePagination = (event) => {
        event.preventDefault();
        let clicked = event.target.text;
        if (clicked != undefined && props.totalPageCnt > 0) {
            if (clicked.includes('First')) {
                props.setNextPage(1);
            } else if (clicked.includes('Last')) {
                props.setNextPage(props.totalPageCnt);
            } else if (clicked.includes('Next')) {
                props.setNextPage(props.nextPage + 1);
            } else if (clicked.includes('Previous')) {
                props.setNextPage(props.nextPage - 1);
            } else {
                props.setNextPage(props.nextPage);
            }
        }
    }

    return (
        <PaginationComponent onClick={handlePagination} items={items}></PaginationComponent>
    );
}

export default Pagination;

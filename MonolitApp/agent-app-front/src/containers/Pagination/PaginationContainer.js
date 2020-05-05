import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from 'react-bootstrap'
import PaginationComponent from '../../components/Pagination/PaginationComponent';
import { totalPageCntSelector } from '../../store/common/selectors';

const PaginationContainer = (props) => {
    const totalPageCnt = useSelector(totalPageCntSelector);

    let items = [];

    for (let i = 0; i < totalPageCnt; i++) {
        items.push(
            <Pagination.Item key={i} active={i === props.nextPage}>
                {i + 1}
            </Pagination.Item>
        );
    }


    const handlePagination = (event) => {
        event.preventDefault();
        let clicked = event.target.text;
        if (clicked != undefined && totalPageCnt > 0) {
            if (clicked.includes('First')) {
                props.setNextPage(0);
            } else if (clicked.includes('Last')) {
                props.setNextPage(totalPageCnt - 1);
            } else if (clicked.includes('Next')) {
                if (props.nextPage < totalPageCnt - 1) {
                    props.setNextPage(props.nextPage + 1);
                }
            } else if (clicked.includes('Previous')) {
                if (props.nextPage > 0) {
                    props.setNextPage(props.nextPage - 1);
                }
            } else {
                props.setNextPage(clicked-1);
            }
        }
    }

    return (
        <PaginationComponent onClick={handlePagination} items={items}></PaginationComponent>
    );
}

export default PaginationContainer;

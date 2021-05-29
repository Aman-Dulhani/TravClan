import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';
import CustomerBidTable from './customerBidTable';
import { api, maxMinValue } from '../Utils';

const CustomerBidContainer = (props) => {
    const[customers, setCustomers] = useState([]);
    const[page, setPage] = useState(0);
    const[size, setSize] = useState(10);
    const[list, setList] = useState([]);

    useEffect(() => {
        Axios.get(api.merchantApi)
            .then(res => {
                setCustomers(res.data);
                setList(res.data.slice(0, size));
            })
    }, []);

    const sortData = (sortDirection) => {
        if (sortDirection === "asc") {
            const sortedData = customers.sort((a,b) => maxMinValue('max', a.bids).amount > maxMinValue('max', b.bids).amount ? 1 : -1);
            const newList = sortedData.slice((page)*size, Math.min((page+1)*size, customers.length));
            setCustomers(sortedData)
            setList(newList);
        } else {
            const sortedData = customers.sort((a,b) => maxMinValue('max', a.bids).amount < maxMinValue('max', b.bids).amount ? 1 : -1);
            const newList = sortedData.slice((page)*size, Math.min((page+1)*size, customers.length));
            setCustomers(sortedData);
            setList(newList);
        }
    }

    const handlePageChange = (e) => {
        const partSize = size;
        if (e.currentTarget.ariaLabel === "Next Page") {
            const list = customers.slice((page+1)*partSize, Math.min((page+2)*partSize, customers.length));
            setList(list);
            setPage(page+1);
        } else {
            setList(customers.slice((page-1)*partSize, (page)*partSize));
            setPage(page-1);
        }
    }

    const handleRowsPerPageChange = (e) => {
        setPage(0);
        setSize(e.target.value)
        setList(customers.slice(0, e.target.value));
    }

    return (
        <div>
            <h1>Customers Table</h1>
            <Grid container justify="center" style={{ marginTop: '2em', maxHeight: '50em' }}>
                <Grid item sm={11} md={11} lg={11}>
                    <CustomerBidTable
                        handlePage={handlePageChange}
                        handleRowsPerPage={handleRowsPerPageChange}
                        list={list}
                        page={page}
                        size={size}
                        totalElements={customers.length}
                        sortData={sortData}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default CustomerBidContainer;

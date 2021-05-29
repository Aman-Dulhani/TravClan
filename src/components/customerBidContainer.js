import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';
import CustomerBidTable from './customerBidTable';

const CustomerBidContainer = (props) => {
    const[customers, setCustomers] = useState([]);

    useEffect(() => {
        Axios.get('https://intense-tor-76305.herokuapp.com/merchants')
            .then(res => {
                setCustomers(res.data);
            })
    }, []);

    return (
        <Grid container justify="center" style={{ marginTop: '2em' }}>
            <Grid item sm={11} md={11} lg={11}>
                <CustomerBidTable
                    // handlePage={this.handlePageChange}
                    // handleRowsPerPage={this.handleRowsPerPageChange}
                    list={customers}
                    // page={page}
                    // size={size}
                    totalElements={customers.length}
                />
            </Grid>
        </Grid>
    );
};

export default CustomerBidContainer;

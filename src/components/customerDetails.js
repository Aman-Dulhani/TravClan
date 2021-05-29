import React from 'react';
import { Paper, Avatar, Grid, Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { isArrayValidAndNotEmpty, maxMinValue } from '../Utils';

const styles = (theme) => ({
    root: {
        maxHeight: '50em',
        justifyContent: "center"
    },
    paper: {
        height: '300px',
        width: '80%',
        marginTop: '2em',
        background: 'lightgray'
    },
    imageContainer: {
        marginTop: '27px',
        padding: '10px'
    },
    image: {
        borderRadius: '50%',
        border: '3px solid'
    },
    details: {
        marginTop: '20px',
        padding: '10px',
        textAlign: 'left',
    },
    label: {
        marginBottom: '5px',
    },
    gridItem: {
        marginLeft: '60px'
    },
    paper2: {
        height: '250px',
        width: '80%',
        marginTop: '2em',
        padding: '20px',
        overflowY: 'auto'
    },
    head: {
        backgroundColor: '#D3D3D3',
        color: 'black',
        fontSize: '1.2em',
        fontWeight: 'Bold',
    },
    row: {
        cursor: 'pointer',
        backgroundColor: '#F5F5F5',
    },
    table: {
        fontSize: '12px',
        position: 'relative'
    }
})

const CustomerDetails = (props) => {

    const data  = props.location.state;
    const { classes } = props;

    const maxBid = maxMinValue('max', data.bids);
    const minBid = maxMinValue('min', data.bids);

    return (
        <div className={classes.root}>
            <Grid container justify="center">
                <Paper className={classes.paper} elevation={3}>
                    <Grid container direction="row">
                        <Grid className={classes.imageContainer} item sm={3} md={3} lg={3}>
                            <img className={classes.image} src={data.avatarUrl} alt="customer-avatar" />
                        </Grid>
                        <Grid item sm={8} md={8} lg={8} className={classes.details}>
                            <Grid container justify="flex-start" direction="column">
                                <h1>{`${data.firstname} ${data.lastname}`}</h1>
                                <label className={classes.label}>{data.email}</label>
                                <label className={classes.label}>{data.phone}</label>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid container justify="center">
                <Grid className={classes.gridItem} item sm={4} md={4} lg={4}>
                    <Paper className={classes.paper2} elevation={3}>
                        <h2>All Bids</h2>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow className={classes.row}>
                                    <TableCell className={classes.head}>Car</TableCell>
                                    <TableCell className={classes.head}>Bid id</TableCell>
                                    <TableCell className={classes.head}>Bid Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    isArrayValidAndNotEmpty(data.bids) &&
                                    data.bids.map((bid) => {
                                        return(
                                            <TableRow key={bid.id} className={classes.row}>
                                                <TableCell>{bid.carTitle}</TableCell>
                                                <TableCell>{bid.created}</TableCell>
                                                <TableCell>{bid.amount}</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
                <Grid item sm={3} md={3} lg={3}>
                    <Paper className={classes.paper2} elevation={3}>
                        <h2>Max Bid</h2>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow className={classes.row}>
                                    <TableCell className={classes.head}>Max Bid Id</TableCell>
                                    <TableCell className={classes.head}>Max Bid Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow className={classes.row}>
                                    <TableCell>{maxBid.created}</TableCell>
                                    <TableCell>{maxBid.amount}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>

                </Grid>
                <Grid item sm={3} md={3} lg={3}>
                    <Paper className={classes.paper2} elevation={3}>
                        <h2>Min Bid</h2>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow className={classes.row}>
                                    <TableCell className={classes.head}>Min Bid Id</TableCell>
                                    <TableCell className={classes.head}>Min Bid Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow className={classes.row}>
                                    <TableCell>{minBid.created}</TableCell>
                                    <TableCell>{minBid.amount}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(CustomerDetails);
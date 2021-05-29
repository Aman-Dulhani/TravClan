import React from 'react';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRounded from '@material-ui/icons/Cancel';
import { TableRow, TableCell, Avatar, Button } from '@material-ui/core';
import { maxMinValue } from '../Utils';

class CustomerBidTableRow extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isMax: true,
        }
    }

    onRowClick = (e, data) => {
        this.props.history.push(`/CustomerDetails/${data.id}`, data);
    }

    handleOnChange = (e) => {
        this.setState({ isMax: !this.state.isMax });
        e.stopPropagation();
    }

    render() {
        const { classes, data } = this.props;
        const bid = this.state.isMax ? maxMinValue('max', data.bids).amount : maxMinValue('min', data.bids).amount;
        return (
            <TableRow key={data.id} className={classes.row} onClick={(e) => this.onRowClick(e, data)} >
                <TableCell className={classes.row}><Avatar src={data.avatarUrl} /></TableCell>
                <TableCell className={classes.row}>{`${data.firstname || ""} ${data.lastname || ""}`}</TableCell>
                <TableCell className={classes.row}>{data.email}</TableCell>
                <TableCell className={classes.row}>{data.phone}</TableCell>
                <TableCell className={classes.row}>{data.hasPremium ? <CheckCircleRoundedIcon color="action" fontSize="small" /> : <CancelRounded color="error" fontSize="small" />}</TableCell>
                <TableCell className={classes.row}>{bid}</TableCell>
                <TableCell className={classes.actionRow}>
                    <Button onClick={this.handleOnChange} variant="contained" color="primary">{this.state.isMax ? 'Show Min Bid' : 'Show Max Bid'}</Button>
                </TableCell>
            </TableRow>
        )
    } 
}

export default CustomerBidTableRow;
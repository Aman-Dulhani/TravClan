import React, { useState } from 'react';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRounded from '@material-ui/icons/Cancel';
import { TableRow, TableCell, Avatar, Button } from '@material-ui/core';
import { maxMinValue } from '../Utils';

const CustomerBidTableRow = (props) => {
    const[isMax, setIsMax] = useState(true);
    
    const onRowClick = (e, data) => {
        this.props.history.push(`/CustomerDetails/${data.id}`, data);
    }

    const handleOnChange = (e) => {
        setIsMax(!isMax);
        e.stopPropagation();
    }

    const { classes, data } = props;
    const bid = isMax ? maxMinValue('max', data.bids).amount : maxMinValue('min', data.bids).amount;
    
    return (
        <TableRow key={data.id} className={classes.row} onClick={(e) => onRowClick(e, data)} >
            <TableCell className={classes.row}><Avatar src={data.avatarUrl} /></TableCell>
            <TableCell className={classes.row}>{`${data.firstname || ""} ${data.lastname || ""}`}</TableCell>
            <TableCell className={classes.row}>{data.email}</TableCell>
            <TableCell className={classes.row}>{data.phone}</TableCell>
            <TableCell className={classes.row}>{data.hasPremium ? <CheckCircleRoundedIcon color="action" fontSize="small" /> : <CancelRounded color="error" fontSize="small" />}</TableCell>
            <TableCell className={classes.row}>{bid}</TableCell>
            <TableCell className={classes.actionRow}>
                <Button onClick={handleOnChange} variant="contained" color="primary">{isMax ? 'Show Min Bid' : 'Show Max Bid'}</Button>
            </TableCell>
        </TableRow>
    )
}

export default CustomerBidTableRow;
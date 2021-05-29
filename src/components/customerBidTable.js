import React, { useState } from 'react';
import {
    Table, TableBody, TableHead, TableCell, TableRow, Avatar,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRounded from '@material-ui/icons/Cancel';
import Switch from '@material-ui/core/Switch';
import { KeyboardArrowDown, KeyboardArrowUpRounded } from '@material-ui/icons';
import { maxMinValue, isArrayValidAndNotEmpty } from '../Utils';

const styles = (theme) => ({
    root: {
        overflow: 'auto',
        fontSize: '12px',
        border: '1px solid',
        padding: '20px',
        borderRadius: 8
    },
    head: {
        backgroundColor: '#D3D3D3',
        color: 'black',
        position: 'sticky',
        fontSize: '1.2em',
        fontWeight: 'Bold',
    },
    row: {
        cursor: 'pointer',
        backgroundColor: '#F5F5F5',
    },
    label: {
        fontSize: '8px'
    }
});

const CustomerBidTable = (props) => {

    const {
        classes, list, page, size, totalElements
    } = props;

    const array = new Array(totalElements).fill(true);

    const RenderTableRow = (data, classes) => {
        const[isMax, setIsMax] = useState(true);
        const bid = isMax ? maxMinValue('max', data.bids).amount : maxMinValue('min', data.bids).amount;

        const handleOnChange = (e) => {
            setIsMax(e.target.checked);
        } 
        return (
            <TableRow key={data.id} className={classes.row}>
                <TableCell className={classes.row}><Avatar src={data.avatarUrl} /></TableCell>
                <TableCell className={classes.row}>{`${data.firstname} ${data.lastname}`}</TableCell>
                <TableCell className={classes.row}>{data.email}</TableCell>
                <TableCell className={classes.row}>{data.phone}</TableCell>
                <TableCell className={classes.row}>{data.hasPremium ? <CheckCircleRoundedIcon color="action" fontSize="small" /> : <CancelRounded color="error" fontSize="small" />}</TableCell>
                <TableCell className={classes.row}>{bid}</TableCell>
                <TableCell className={classes.row}>
                    <Switch
                        checked={isMax}
                        onChange={handleOnChange}
                        name="Max/Min"
                        color="default"
                        icon={<CancelRounded/>}
                        checkedIcon={<CheckCircleRoundedIcon/>}
                        key={data.id}
                    />
                </TableCell>
            </TableRow>
        )
    }

    return (
        <Table className={classes.root}>
            <TableHead>
                <TableRow>
                    <TableCell className={classes.head} />
                    <TableCell className={classes.head}>Customer Name</TableCell>
                    <TableCell className={classes.head}>Email</TableCell>
                    <TableCell className={classes.head}>Phone No.</TableCell>
                    <TableCell className={classes.head}>Premium</TableCell>
                    <TableCell className={classes.head}>Bid</TableCell>
                    <TableCell className={classes.head} />
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    isArrayValidAndNotEmpty(list) &&
                    list.map((data, index) => RenderTableRow(data, classes, index))
                }
            </TableBody>
        </Table>
    )

}

export default withStyles(styles)(CustomerBidTable);
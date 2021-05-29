import React, { useState } from 'react';
import {
    Table, TableBody, TableHead, TableCell, TableRow,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import TablePagination from '@material-ui/core/TablePagination';
import { isArrayValidAndNotEmpty } from '../Utils';
import CustomerBidTableRow from './customerBidTableRow';
import { useHistory } from 'react-router-dom';

const styles = (theme) => ({
    root: {
        overflow: 'auto',
        fontSize: '14px',
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
    actionRow: {
        cursor: 'pointer',
        backgroundColor: '#F5F5F5',
        zIndex: '22',
    },
    label: {
        fontSize: '8px'
    }
});

const CustomerBidTable = (props) => {

    const {
        classes, list, page, size, totalElements, handleRowsPerPage, handlePage, sortData,
    } = props;

    const history = useHistory();
    const[sortDirection, setSortDirection] = useState("asc");

    const sortDirectionChange = () => {
        if (sortDirection === "asc") {
            sortData("asc")
            setSortDirection("desc");
        } else {
            sortData("desc");
            setSortDirection("asc");
        }
    }

    return (
        <div>
            <Table className={classes.root}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.head} />
                        <TableCell className={classes.head}>Customer Name</TableCell>
                        <TableCell className={classes.head}>Email</TableCell>
                        <TableCell className={classes.head}>Phone No.</TableCell>
                        <TableCell className={classes.head}>Premium</TableCell>
                        <TableCell className={classes.head} onClick={sortDirectionChange}>Bid</TableCell>
                        <TableCell className={classes.head} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        isArrayValidAndNotEmpty(list) &&
                        list.map((data, index) => <CustomerBidTableRow data={data} classes={classes} history={history}/>)
                    }
                </TableBody>
            </Table>
            <TablePagination
                component="div"
                // ActionsComponent={TablePaginationActions}
                count={totalElements}
                rowsPerPage={size}
                page={page}
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                    'aria-hidden': false,
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                    'aria-hidden': false,
                }}
                onChangePage={handlePage}
                onChangeRowsPerPage={handleRowsPerPage}
            />
        </div>
    )

}

export default withStyles(styles)(CustomerBidTable);
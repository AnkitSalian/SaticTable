import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CloseIcon from '@mui/icons-material/Close';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(docName, request, received, status, errors) {
    return { docName, request, received, status, errors };
}

const rows = [
    createData('Invoice', '10-02-2023', '10-02-2023 12:15:00', <CheckCircleIcon style={{ color: "green" }} />, 0),
    createData('Fax', '10-02-2023', '', <WarningAmberIcon style={{ color: "orange" }} />, 0),
    createData('Tax', '10-02-2023', '10-02-2023 12:15:00', <CloseIcon style={{ color: "red" }} />, 24),
    createData('Statement', '10-02-2023', '10-02-2023 12:15:00', <CheckCircleIcon style={{ color: "green" }} />, 0),
    // createData('Gingerbread', 356, 16.0, 49),
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Document Name</StyledTableCell>
                        <StyledTableCell>Request Date</StyledTableCell>
                        <StyledTableCell>Received Time</StyledTableCell>
                        <StyledTableCell>State</StyledTableCell>
                        <StyledTableCell>Errors</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.docName}>
                            <StyledTableCell component="th" scope="row">
                                {row.docName}
                            </StyledTableCell>
                            <StyledTableCell>{row.request}</StyledTableCell>
                            <StyledTableCell>{row.received}</StyledTableCell>
                            <StyledTableCell>{row.status}</StyledTableCell>
                            <StyledTableCell>{row.errors}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
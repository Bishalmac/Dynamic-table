
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Tablecomponent = (props) => {
    const { dataFromdropDown } = props
    console.log(dataFromdropDown)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            dataFromdropDown.data ?
                                Object.keys(dataFromdropDown.data[0]).map(item => (
                                    <>
                                        <TableCell>{item}</TableCell>
                                    </>

                                ))
                                :
                                Object.keys(dataFromdropDown).map(item => (
                                    <>
                                        <TableCell>{item}</TableCell>
                                    </>
                                ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        dataFromdropDown.data ?
                            dataFromdropDown.data.map(i => (
                                <TableRow>
                                    {Object.keys(dataFromdropDown.data[0]).map(item => (
                                        <TableCell component="th" scope="row">
                                            {i[item]}
                                        </TableCell>

                                    ))}

                                </TableRow>
                            ))
                            :
                            <TableRow>
                                {Object.values(dataFromdropDown).map(item => (

                                    <TableCell component="th" scope="row">
                                        {item}
                                    </TableCell>
                                ))}
                            </TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default Tablecomponent

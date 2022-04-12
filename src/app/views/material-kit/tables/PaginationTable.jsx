import React from 'react'
import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
    Dialog,
    DialogActions,
    Button,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useMediaQuery,
    useTheme,
    TextField

} from '@mui/material'
import { Box, styled } from '@mui/system'


const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                textTransform: 'capitalize',
            },
        },
    },
}))

const subscribarList = [
    {
        name: 'john doe',
        date: '18 january, 2019',
        amount: 1000,
        status: 'close',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'kessy bryan',
        date: '10 january, 2019',
        amount: 9000,
        status: 'open',
        company: 'My Fintech LTD.',
    },
    {
        name: 'kessy bryan',
        date: '10 january, 2019',
        amount: 9000,
        status: 'open',
        company: 'My Fintech LTD.',
    },
    {
        name: 'james cassegne',
        date: '8 january, 2019',
        amount: 5000,
        status: 'close',
        company: 'Collboy Tech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
]

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))


const PaginationTable = () => {
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const [open, setOpen] = React.useState(false);
    const [addUser, setAddUser] = React.useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpenAddUser = () => {
        setAddUser(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseAddUser = () => {
        setAddUser(false);
    };

    return (
        <Container>
            <Box sx={{ width: '100%' }} style={{ textAlign: "right" }}>
                <StyledButton variant="contained" color="primary"  onClick={handleClickOpenAddUser}>
                    <Icon>add</Icon>
                    &nbsp;
                    Add User
                </StyledButton>
            </Box>
           
                <Box width="100%" overflow="auto">
                    <StyledTable>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: "40%" }}>Name</TableCell>
                                <TableCell style={{ width: "50%" }}>UserName</TableCell>
                                <TableCell style={{ width: "10%" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {subscribarList
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((subscriber, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="left">
                                            {subscriber.name}
                                        </TableCell>
                                        <TableCell align="left">
                                            {subscriber.company}
                                        </TableCell>

                                        <TableCell>
                                            <IconButton onClick={handleClickOpen}>
                                                <Icon color="dark">edit</Icon>
                                            </IconButton>
                                            <IconButton>
                                                <Icon color="error">close</Icon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </StyledTable>

                    <TablePagination
                        sx={{ px: 2 }}
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={subscribarList.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        backIconButtonProps={{
                            'aria-label': 'Previous Page',
                        }}
                        nextIconButtonProps={{
                            'aria-label': 'Next Page',
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />


                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {"Edit User"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField sx={{ mb: 3 }} fullWidth id="outlined-basic fullWidth" label="Enter User Name" variant="outlined" margin="normal" />
                                    <br />
                                    <TextField fullWidth id="outlined-basic fullWidth" label="Enter User Name" variant="outlined" />
                                </Box>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                Cancle
                            </Button>
                            <Button onClick={handleClose} autoFocus>
                                Save
                            </Button>
                        </DialogActions>
                    </Dialog>


                    <Dialog
                        fullScreen={fullScreen}
                        open={addUser}
                        onClose={handleCloseAddUser}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {"Add User"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField sx={{ mb: 3 }} fullWidth id="outlined-basic fullWidth" label="Enter User Name" variant="outlined" margin="normal" />
                                    <br />
                                    <TextField fullWidth id="outlined-basic fullWidth" label="Enter User Name" variant="outlined" />
                                </Box>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleCloseAddUser}>
                                Cancle
                            </Button>
                            <Button onClick={handleCloseAddUser} autoFocus>
                                Save
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            
        </Container>
    )
}

export default PaginationTable

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
    TextField,
    TextareaAutosize,
    Select,
    SelectChangeEvent,
    FormControl,
    MenuItem,
    InputLabel 

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
        name: 'Tata Steel',
        version: 2.5,
        quantity: 120,
        rate: 300,
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


const ProductType = () => {
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
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

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <Container>
            <Box sx={{ width: '100%' }} style={{ textAlign: "right" }}>
                <StyledButton variant="contained" color="primary" onClick={handleClickOpenAddUser}>
                    <Icon>add</Icon>
                    &nbsp;
                    Add Product
                </StyledButton>
            </Box>

            <Box width="100%" overflow="auto">
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: "20%" }}>Name</TableCell>
                            <TableCell style={{ width: "20%" }}>Version</TableCell>
                            <TableCell style={{ width: "30%" }}>opQuantity</TableCell>
                            <TableCell style={{ width: "10%" }}>Rate</TableCell>
                            <TableCell style={{ width: "10%" }}>Amount</TableCell>
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
                                        {subscriber.version}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.quantity}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.rate}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.quantity * subscriber.rate}
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
                        {"Edit Party Information"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField sx={{ my: 3 }} fullWidth id="outlined-basic fullWidth" label="Enter Product Name" variant="outlined" />
                                <br />
                                <TextField sx={{ mb: 3 }} fullWidth id="outlined-basic fullWidth" label="Enter Version" variant="outlined" />
                                <br />
                                <TextField sx={{ mb: 3 }} type="number" fullWidth id="outlined-basic fullWidth" label="Enter Quantity" variant="outlined" />
                                <br />
                                <TextField sx={{ mb: 3 }} type="number" fullWidth id="outlined-basic fullWidth" label="Enter Rate" variant="outlined" />
                                <br />
                                <TextField sx={{ mb: 3 }} type="number" fullWidth id="outlined-basic fullWidth" label="Enter Amount" variant="outlined" />
                                
                              
                               
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
                        {"Add Party Information"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField sx={{ my: 3 }} fullWidth id="outlined-basic fullWidth" label="Enter Product Name" variant="outlined" />
                                <br />
                                <TextField sx={{ mb: 3 }} fullWidth id="outlined-basic fullWidth" label="Enter Version" variant="outlined" />
                                <br />
                                <TextField sx={{ mb: 3 }} type="number" fullWidth id="outlined-basic fullWidth" label="Enter Quantity" variant="outlined" />
                                <br />
                                <TextField sx={{ mb: 3 }} type="number" fullWidth id="outlined-basic fullWidth" label="Enter Rate" variant="outlined" />
                                <br />
                                <TextField sx={{ mb: 3 }} type="number" fullWidth id="outlined-basic fullWidth" label="Enter Amount" variant="outlined" />
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

export default ProductType

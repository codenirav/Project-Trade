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
        companyName: 'Tata Steel',
        ownerName: 'Ratan Tata',
        address: 'Jamshedpur',
        gst: "25a1s1s2151a1s",
        partyType: "Private",
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


const PartyType = () => {
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
                    Add Party
                </StyledButton>
            </Box>

            <Box width="100%" overflow="auto">
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: "20%" }}>Company Name</TableCell>
                            <TableCell style={{ width: "20%" }}>Owner Name</TableCell>
                            <TableCell style={{ width: "30%" }}>Address</TableCell>
                            <TableCell style={{ width: "10%" }}>Gst No.</TableCell>
                            <TableCell style={{ width: "10%" }}>Party Type</TableCell>
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
                                        {subscriber.companyName}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.ownerName}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.address}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.gst}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.partyType}
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
                                <TextField sx={{ my: 3 }} fullWidth id="outlined-basic fullWidth" label="Enter Comapny Name" variant="outlined" />
                                <br />
                                <TextField sx={{ mb: 3 }} fullWidth id="outlined-basic fullWidth" label="Enter Owner Name" variant="outlined" />
                                <br />
                                <TextareaAutosize style={{
                                    width: "100%", padding: "16.5px 14px", border: "1px solid rgba(0, 0, 0, 0.23)", marginBottom: "20px", fontSize: "14px",
                                    fontfamily: "Roboto",
                                }} minRows={3} fullWidth id="outlined-basic fullWidth" placeholder="Enter Address" variant="outlined" />
                                <br />
                                <TextField sx={{ mb: 3 }} type="number" fullWidth id="outlined-basic fullWidth" label="Enter Gst No." variant="outlined" />
                                <br />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
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
                                <TextField sx={{ my: 3 }} fullWidth id="outlined-basic fullWidth" label="Enter Comapny Name" variant="outlined" />
                                <br />
                                <TextField sx={{ mb: 3 }} fullWidth id="outlined-basic fullWidth" label="Enter Owner Name" variant="outlined" />
                                <br />
                                <TextareaAutosize style={{
                                    width: "100%", padding: "16.5px 14px", border: "1px solid rgba(0, 0, 0, 0.23)", marginBottom: "20px", fontSize: "14px",
                                    fontfamily: "Roboto",
                                }} minRows={3} fullWidth id="outlined-basic fullWidth" placeholder="Enter Address" variant="outlined" />
                                <br />
                                <TextField sx={{ mb: 3 }} type="number" fullWidth id="outlined-basic fullWidth" label="Enter Gst No." variant="outlined" />
                                <br />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
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

export default PartyType

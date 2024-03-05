import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import styles from './CreateNewRecruiter.module.css'
import companyService from '../../services/CompanyService';
import recruiterService from '../../services/RecruiterService';
import { Fragment, useEffect, useState } from 'react';

const filter = createFilterOptions();

export default function CreateNewRecruiter() {


    const [companies, setCompanies] = useState([""])
    const [recruiter, setRecruiter] = useState([""])
    const [company, setCompany] = useState("")
    const [password, setPassword] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [addCompany, setAddCompany] = useState(false)

    useEffect(() => {
        companyService.retunAllCompanies().then(response => {
            setCompanies(response.data)
        }
        ).catch(error => {
            //  TODO: throw Error here
        })

    }, []);



    const [value, setValue] = useState(null);
    const [open, toggleOpen] = useState(false);

    const handleClose = () => {
        setDialogValue({
            title: '',
            year: '',
        });
        toggleOpen(false);
    };

    const [dialogValue, setDialogValue] = useState({
        title: '',
        year: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({
            title: dialogValue.title,
            year: parseInt(dialogValue.year, 10),
        });
        handleClose();
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecruiter({ ...recruiter, [name]: value });
    };
    const handleCompanyChange = (e) => {
        const { name, value } = e.target;
        setCompany({ ...company, [name]: value });
    };

    function register() {

        if (addCompany) {
            saveCompany();
        } else {
            saveRecruiter();
        }



    }

    function saveRecruiter() {
        if (recruiter.password != password) {
            alert("Passwords doesn't match!") //TODO: toast
        } else {
            recruiterService.saveRecruiter(recruiter)
                .then(response => {
                    alert("Successfully Registered")
                    redirectToHomePage()

                })
                .catch(error => {
                    alert(error)
                });
        }

    }

    function saveCompany() {

        companyService.saveCompany(company)
            .then(response => {
                saveRecruiter();
            })
            .catch(error => {
                alert(error)
            });
    }

    function redirectToHomePage() {
        window.location.href = "http://localhost:3000/recruiter";
    }

    return (
        <div className={styles.outerDiv}>
            <div className={styles.mainDiv}>
                <div className={styles.divBlock}>
                    <Fragment>
                        <Autocomplete
                            value={recruiter.company}
                            onChange={(event, newValue) => {
                                if (typeof newValue === 'string') {
                                    // timeout to avoid instant validation of the dialog's form.
                                    setTimeout(() => {
                                        toggleOpen(true);
                                        setDialogValue({
                                            title: newValue,
                                            year: '',
                                        });
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    toggleOpen(true);
                                    setDialogValue({
                                        title: newValue.inputValue,
                                        year: '',
                                    });
                                } else {
                                    setRecruiter({ company: newValue.name, });
                                }
                            }}

                            filterOptions={(options, params) => {
                                const filtered = filter(options, params);

                                if (params.inputValue !== '') {
                                    filtered.push({
                                        inputValue: params.inputValue,
                                        name: `Add "${params.inputValue}"`,
                                    });
                                }

                                return filtered;
                            }}
                            // id="free-solo-dialog-demo"
                            options={companies}
                            getOptionLabel={(option) => {
                                // e.g. value selected with enter, right from the input
                                if (typeof option === 'string') {
                                    return option;
                                }
                                if (option.inputValue) {
                                    return option.inputValue;
                                }
                                return option.name;
                            }}
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            renderOption={(props, option) => <li {...props}>{option.name}</li>}
                            sx={{ width: 300 }}
                            freeSolo
                            renderInput={(params) => <TextField {...params} name="company" id="company" label="Search Your Company" onChange={(e) => {
                                setCompanyName(e.target.value);
                            }} />}

                        />

                        <Dialog open={open} onClose={handleClose}>

                            <DialogTitle>Add Your Company</DialogTitle>
                            <hr></hr>

                            <DialogContent>
                                <div className={styles.PopupParent}>
                                    <div>
                                        <div className={styles.popupChild}>
                                            <TextField
                                                className={styles.popupTextField}
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                name="name"
                                                value={dialogValue.name}
                                                onChange={handleCompanyChange}
                                                label="Name"
                                                type="text"
                                                variant="outlined"
                                            />

                                            <TextField
                                                className={styles.popupTextField}
                                                autoFocus
                                                margin="dense"
                                                id="phone"
                                                name="phone"
                                                value={dialogValue.town}
                                                onChange={handleCompanyChange}
                                                label="Phone"
                                                type="text"
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className={styles.popupChild}>
                                            <TextField
                                                className={styles.popupTextField}
                                                autoFocus
                                                margin="dense"
                                                id="city"
                                                name="city"
                                                value={dialogValue.city}
                                                onChange={handleCompanyChange}
                                                label="City"
                                                type="text"
                                                variant="outlined"
                                            />

                                            <TextField
                                                className={styles.popupTextField}
                                                autoFocus
                                                margin="dense"
                                                id="town"
                                                name="town"
                                                value={dialogValue.town}
                                                onChange={handleCompanyChange}

                                                label="Town"
                                                type="text"
                                                variant="outlined"
                                            />
                                        </div>



                                        <TextField
                                            className={styles.popupTextField}
                                            autoFocus
                                            margin="dense"
                                            id="postcode"
                                            name="postcode"
                                            value={dialogValue.postcode}
                                            onChange={handleCompanyChange}
                                            label="Post Code"
                                            type="text"
                                            variant="outlined"
                                        />

                                    </div>
                                </div>


                            </DialogContent>

                            <hr></hr>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={() => {
                                    setAddCompany(true);
                                    handleClose();
                                    setRecruiter({ ...recruiter, company: companyName });
                                    setCompany({ ...company, name: companyName });

                                }}>Add</Button>

                            </DialogActions>




                        </Dialog>
                    </Fragment>

                </div>
                <div>
                    <hr></hr>
                </div>


                <div className={styles.inlineParent}>

                    <div >
                        <TextField id="outlined-basic" className={styles.textField} name="first_name" label="First Name" variant="outlined" onChange={handleChange} />
                        <TextField id="outlined-basic" className={styles.textField} name="phone" label="Phone" variant="outlined" onChange={handleChange} />
                        <TextField id="outlined-basic" className={styles.textField} type='password' name="password" label="Password" variant="outlined" onChange={handleChange} />

                    </div>


                    <div >
                        <TextField id="outlined-basic" className={styles.textField} name="surname" label="Surname" variant="outlined" onChange={handleChange} />
                        <TextField id="outlined-basic" className={styles.textField} name="email" label="Email" variant="outlined" onChange={handleChange} />
                        <TextField id="outlined-basic" className={styles.textField} type='password' name="password1" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                    </div>


                </div>

                <hr></hr>
                <div className={styles.centerDiv}>
                    <Button variant="outlined" onClick={() => register()}>Register</Button>
                </div>


            </div>








        </div>




    );
}
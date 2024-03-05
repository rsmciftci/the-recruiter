import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import styles from './CreateNewRecruiter.module.css'
import { TableRow } from '@mui/material';
import companyService from '../../services/CompanyService';

const filter = createFilterOptions();

export default function CreateNewRecruiter() {


    const [companies, setCompanies ] = React.useState([""])

    React.useEffect(() => {
        companyService.retunAllCompanies().then(response => {
            setCompanies(response.data)
        }
        ).catch(error => {
            //  TODO: throw Error here
        })

    }, []);



    const [value, setValue] = React.useState(null);
    const [open, toggleOpen] = React.useState(false);

    const handleClose = () => {
        setDialogValue({
            title: '',
            year: '',
        });
        toggleOpen(false);
    };

    const [dialogValue, setDialogValue] = React.useState({
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

    return (
        <div className={styles.outerDiv}>

            <div className={styles.mainDiv}>
                <div className={styles.divBlock}>
                    <React.Fragment>
                        <Autocomplete
                            value={value}
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
                                    setValue(newValue);
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
                            id="free-solo-dialog-demo"
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
                            renderInput={(params) => <TextField {...params} label="Search Your Company" />}
                        />







                        <Dialog open={open} onClose={handleClose}>
                            <form onSubmit={handleSubmit}>
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
                                                    value={dialogValue.name}
                                                    onChange={(event) =>
                                                        setDialogValue({
                                                            ...dialogValue,
                                                            title: event.target.value,
                                                        })
                                                    }
                                                    label="Name"
                                                    type="text"
                                                    variant="outlined"
                                                />

                                                <TextField
                                                    className={styles.popupTextField}
                                                    autoFocus
                                                    margin="dense"
                                                    id="town"
                                                    value={dialogValue.town}
                                                    onChange={(event) =>
                                                        setDialogValue({
                                                            ...dialogValue,
                                                            title: event.target.value,
                                                        })
                                                    }
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
                                                    value={dialogValue.city}
                                                    onChange={(event) =>
                                                        setDialogValue({
                                                            ...dialogValue,
                                                            title: event.target.value,
                                                        })
                                                    }
                                                    label="City"
                                                    type="text"
                                                    variant="outlined"
                                                />

                                                <TextField
                                                    className={styles.popupTextField}
                                                    autoFocus
                                                    margin="dense"
                                                    id="town"
                                                    value={dialogValue.town}
                                                    onChange={(event) =>
                                                        setDialogValue({
                                                            ...dialogValue,
                                                            title: event.target.value,
                                                        })
                                                    }
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
                                                value={dialogValue.postcode}
                                                onChange={(event) =>
                                                    setDialogValue({
                                                        ...dialogValue,
                                                        title: event.target.value,
                                                    })
                                                }
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
                                    <Button type="submit">Add</Button>
                                </DialogActions>
                            </form>



                        </Dialog>




                    </React.Fragment>

                </div>
                <div>
                    <hr></hr>
                </div>


                <div className={styles.inlineParent}>

                    <div >
                        <TextField id="outlined-basic" className={styles.textField} name="first_name" label="First Name" variant="outlined" />
                        <TextField id="outlined-basic" className={styles.textField} name="phone" label="Phone" variant="outlined" />
                        <TextField id="outlined-basic" className={styles.textField} name="password" label="Password" variant="outlined" />


                    </div>


                    <div >
                        <TextField id="outlined-basic" className={styles.textField} name="surname" label="Surname" variant="outlined" />
                        <TextField id="outlined-basic" className={styles.textField} name="email" label="Email" variant="outlined" />
                        <TextField id="outlined-basic" className={styles.textField} name="password" label="Password" variant="outlined" />
                    </div>


                </div>

                <hr></hr>
                <div className={styles.centerDiv}>
                    <Button variant="outlined">Register</Button>
                </div>


            </div>








        </div>




    );
}
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

const filter = createFilterOptions();

export default function CreateNewRecruiter() {
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
                            options={londonSoftwareCompanies}
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

const londonSoftwareCompanies = [
    {
        name: "SoftTech Solutions Ltd.",
        city: "London",
        town: "Silicon Roundabout",
        phone: "+44 20 1234 5678",
        postcode: "EC1Y 1AE",
        country: "United Kingdom"
    },
    {
        name: "CodeCrafters",
        city: "London",
        town: "Tech Hub",
        phone: "+44 20 9876 5432",
        postcode: "E1 6AN",
        country: "United Kingdom"
    },
    {
        name: "ByteBlasters",
        city: "London",
        town: "Innovation District",
        phone: "+44 20 5555 5555",
        postcode: "WC1E 7HU",
        country: "United Kingdom"
    },
    {
        name: "TechNest",
        city: "London",
        town: "Tech Square",
        phone: "+44 20 1111 1111",
        postcode: "SE1 7PB",
        country: "United Kingdom"
    },
    {
        name: "InnoSoft",
        city: "London",
        town: "Digital Park",
        phone: "+44 20 2222 2222",
        postcode: "N1 6DR",
        country: "United Kingdom"
    },
    {
        name: "CyberNexus",
        city: "London",
        town: "Cyber Centre",
        phone: "+44 20 3333 3333",
        postcode: "W1A 1AA",
        country: "United Kingdom"
    },
    {
        name: "PixelPioneers",
        city: "London",
        town: "Pixel Place",
        phone: "+44 20 4444 4444",
        postcode: "SW1A 2AA",
        country: "United Kingdom"
    },
    {
        name: "DataDriven",
        city: "London",
        town: "Data District",
        phone: "+44 20 5555 5555",
        postcode: "EC2R 8AH",
        country: "United Kingdom"
    },
    {
        name: "CloudCoders",
        city: "London",
        town: "Cloud Campus",
        phone: "+44 20 6666 6666",
        postcode: "EC4N 6EU",
        country: "United Kingdom"
    },
    {
        name: "CodeGenius",
        city: "London",
        town: "Tech Towers",
        phone: "+44 20 7777 7777",
        postcode: "W1S 1AD",
        country: "United Kingdom"
    }
];
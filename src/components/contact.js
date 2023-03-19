import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { makeStyles } from '@mui/styles';
import { Button, Dialog, DialogActions, DialogTitle, FormControlLabel, Link, Radio, RadioGroup, } from "@mui/material";

// npm i @emailjs/browser

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        textDecoration: 'none',
    },
});


export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_axb72th",
                "template_amqy59q",
                form.current,
                "9JfDxk7Rw4WLI8EcW"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const classes = useStyles();
    return (
        <div className="container mt-5">
            <form class="card" ref={form} onSubmit={sendEmail}>
                <div className="mb-3 name">
                    <input className="form-control" type="text" name="user_name" id="name" placeholder="Name" required />
                </div>
                <div className="mb-3">
                    <input className="form-control" type="email" name="user_email" id="email" placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <input className="form-control" type="phone" name="user_phone" id="phone" placeholder="Phone" required />
                </div>
                <div className="radio">
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="like" control={<Radio />} name="like" label="Like" required/>
                        <FormControlLabel value="dislike" control={<Radio />} name="dislike" label="Dislike" required/>
                    </RadioGroup>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" name="message" id="message" placeholder="Message" required />
                </div>
                <div>
                    <button className="button" value="Send" type="submit" onClick={handleClickOpen}>Submit</button>
                </div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Thank You"}
                    </DialogTitle>
                    {/* <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Let Google help apps determine location. This means sending anonymous
                                location data to Google, even when no apps are running.
                            </DialogContentText>
                        </DialogContent> */}
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Link href="/home"><Button onClick={handleClose} autoFocus className={classes.root}>Agree</Button></Link> 
                    </DialogActions>
                </Dialog>
            </form>
        </div>

    );

};





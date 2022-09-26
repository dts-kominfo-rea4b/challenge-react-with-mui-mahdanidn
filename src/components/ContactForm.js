// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ContactForm = ({ saveContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [newContact, setNewContact] = useState({});

  useEffect(() => {
    setNewContact({
      name,
      phone,
      email,
      photoUrl,
    });
  }, [name, phone, email, photoUrl]);

  // const contactHandler = () => {
  //   console.log(newContact);
  // };

  return (
    <>
      <Card sx={{ width: 275, height: 500 }}>
        <CardContent>
          <TextField
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name*"
            variant="standard"
            role="text-box"
          />
          <TextField
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="Phone*"
            variant="standard"
            role="text-box"
          />
          <TextField
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="standard"
            role="text-box"
          />
          <TextField
            id="photoUrl"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            label="Photo URL*"
            variant="standard"
            role="img"
          />
          <Button variant="text" onClick={() => saveContact(newContact)}>
            ADD NEW
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;

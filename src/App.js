import React, { useState } from "react";

import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contactList, setContactsList] = useState([...contactsJSON]);
  // console.log(contactList);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const saveContact = (newContact) => {
    const oldContactList = [...contactList];
    setContactsList([...oldContactList, newContact]);
    // console.log(newContact);
  };

  return (
    <div className="App">
      <Header />
      <div
        style={{
          // background: "red",
          margin: "0 auto",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ContactForm saveContact={saveContact} />
        <div>
          {contactList.map((contacts) => {
            return <Contact data={contacts} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

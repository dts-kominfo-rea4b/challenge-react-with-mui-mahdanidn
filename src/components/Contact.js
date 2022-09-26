// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // console.log(data);
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <List
        sx={{
          width: 460,
          bgcolor: "background.paper",
          margin: "0 auto",
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar src={data.photo}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={data.name}
            secondary={
              <React.Fragment>
                <Typography component="p" variant="body2" color="text.primary">
                  {data.phone}
                </Typography>
                <Typography component="p" variant="body2" color="text.primary">
                  {data.email}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem></ListItem>
      </List>
    </>
  );
};

export default Contact;

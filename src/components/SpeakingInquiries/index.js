import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

function SpeakingEngagementsRequests() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    title: "",
    organization: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the form values from the `formState` object
    console.log(formState);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        name="firstName"
        label="First Name"
        value={formState.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        name="lastName"
        label="Last Name"
        value={formState.lastName}
        onChange={handleChange}
        required
      />
      <TextField
        name="title"
        label="Title"
        value={formState.title}
        onChange={handleChange}
        required
      />
      <TextField
        name="organization"
        label="Organization"
        value={formState.organization}
        onChange={handleChange}
        required
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        value={formState.email}
        onChange={handleChange}
        required
      />
      <TextField
        name="phone"
        label="Phone"
        value={formState.phone}
        onChange={handleChange}
        required
      />
      <TextField
        name="inquiryType"
        label="I'm inquiring about"
        value={formState.inquiryType}
        onChange={handleChange}
        required
      />
      <TextField
        name="message"
        label="Your message"
        multiline
        rows={4}
        value={formState.message}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit your inquiry
      </Button>
    </Box>
  );
}

export default SpeakingEngagementsRequests;

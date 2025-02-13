"use client";

import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ContactUs = () => {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [inquiry, setInquiry] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent SSR rendering issues

  const handleSubmit = async () => {
    const formData = {
      name,
      email,
      phoneNumber,
      inquiryType,
      inquiry,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Your message has been sent successfully!");
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      alert("An error occurred while submitting your form.");
    }
  };

  return (
    <div
      className="h-[60rem] md:h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/contact_us/1.jpg')" }}
    >
      <div className="text-white w-[90%] lg:w-[75%] mx-auto min-h-screen">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 pt-16">
            <div>
              <h1 className="text-[3.25rem] lg:text-7xl font-bold mb-2">
                Contact Us
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">Singapore</h2>
              <p className="text-base lg:text-lg mb-8 whitespace-pre-line tracking-wide">
                We&apos;re here to move mountains for you. Reach out today to
                get personalized support, request a quote, or inquire about our
                products and services.
              </p>

              <p className="text-lg font-bold mb-4">SILVER MOUNTAIN PTE LTD</p>
              <p className="text-base lg:text-lg mb-4">
                7 Temasek Boulevard, #12-07 <span className="md:block"></span>{" "}
                Singapore 038987
              </p>
              <p className="text-base lg:text-lg">
                Email: sales@silvermountainpteltd.com
              </p>
            </div>

            <div className="bg-white rounded-2xl mt-6 p-10 h-fit">
              <Grid container spacing={6}>
                <Grid size={{ xs: 6, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid size={{ xs: 6, md: 6 }}>
                  <TextField
                    type="email"
                    fullWidth
                    label="Email"
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid size={{ xs: 6, md: 6 }}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Phone Number"
                    variant="standard"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Grid>
                <Grid size={{ xs: 6, md: 6 }}>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel>Inquiry Type</InputLabel>
                    <Select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                    >
                      <MenuItem value={"Oil"}>Oil</MenuItem>
                      <MenuItem value={"Natural Rubber"}>
                        Natural Rubber
                      </MenuItem>
                      <MenuItem value={"Wood Pellets"}>Wood Pellets</MenuItem>
                      <MenuItem value={"General Inquiry"}>
                        General Inquiry
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Share your inquiry with us"
                    variant="standard"
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value)}
                  />
                </Grid>

                <Grid size={12}>
                  <Button variant="contained" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;

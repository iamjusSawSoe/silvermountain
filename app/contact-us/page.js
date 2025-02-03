import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

const ContactUs = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/service/1.jpg')" }}
    >
      <div className="text-white  w-[75%] mx-auto h-full">
        <div className="grid grid-cols-[40%_60%] gap-8 pt-16">
          <div>
            <h1 className="text-7xl font-bold mb-2">Contact Us</h1>
            <h2 className="text-3xl font-bold mb-6">Singapore</h2>
            <p className="text-lg mb-8 whitespace-pre-line tracking-wide">
              We're here to move mountains for you. Reach out{" "}
              <span className="block"></span> today to get personalized support,
              request a <span className="block"></span> quote, or inquire about
              our products and services.
            </p>

            <p className=" text-lg font-bold mb-4">SILVER MOUNTAIN PTE LTD</p>
            <p className="text-lg mb-4">
              7 Temasek Boulevard, #12-07 <span className="block"></span>{" "}
              Singapore 038987
            </p>
            <p className="text-lg mb-4">Tel: Your Number</p>
            <p className="text-lg">Email: silvermountainpteltd@gmail.com</p>
          </div>

          <div className="bg-white rounded-2xl p-10">
            <Grid container spacing={6}>
              <Grid size={{ xs: 6, md: 6 }}>
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Name"
                  variant="standard"
                />
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Email"
                  variant="standard"
                />
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Phone Number"
                  variant="standard"
                />
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                {" "}
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Name"
                  variant="standard"
                />
              </Grid>

              <Grid size={12}>
                {" "}
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Share your inquiry with us"
                  variant="standard"
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

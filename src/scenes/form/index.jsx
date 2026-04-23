import {
  Box,
  Button,
  Divider,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box sx={{ px: { xs: 2, md: 3 }, pb: { xs: 3, md: 4 }, pt: { xs: 2, md: 3 } }}>
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Paper
        elevation={0}
        sx={{
          overflow: "hidden",
          borderRadius: "24px",
          border: `1px solid ${colors.primary[600]}`,
          background:
            theme.palette.mode === "dark"
              ? `linear-gradient(180deg, ${colors.primary[400]} 0%, ${colors.primary[500]} 100%)`
              : `linear-gradient(180deg, ${colors.primary[400]} 0%, #ffffff 100%)`,
        }}
      >
        <Box
          sx={{
            px: { xs: 2.5, md: 4 },
            py: { xs: 3, md: 4 },
            background:
              theme.palette.mode === "dark"
                ? `linear-gradient(135deg, ${colors.blueAccent[800]} 0%, ${colors.primary[400]} 100%)`
                : `linear-gradient(135deg, ${colors.blueAccent[900]} 0%, ${colors.primary[400]} 100%)`,
          }}
        >
          <Typography variant="h3" fontWeight={700} color={colors.grey[100]}>
            User Details
          </Typography>
          <Typography
            variant="h6"
            color={theme.palette.mode === "dark" ? colors.grey[300] : colors.grey[400]}
            sx={{ mt: 1, maxWidth: 620 }}
          >
            Create a polished profile card with basic identity, contact details, and location information.
          </Typography>
        </Box>

        <Divider sx={{ borderColor: colors.primary[600] }} />

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                px: { xs: 2.5, md: 4 },
                py: { xs: 3, md: 4 },
              }}
            >
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h5" fontWeight={700} color={colors.grey[100]}>
                    Personal Information
                  </Typography>
                  <Typography variant="body1" color={colors.grey[400]} sx={{ mt: 0.75 }}>
                    Fill in the essentials for the new team member profile.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "grid",
                    gap: "20px",
                    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    "& .MuiFilledInput-root": {
                      borderRadius: "14px",
                      backgroundColor:
                        theme.palette.mode === "dark" ? colors.primary[400] : "#ffffff",
                      border: `1px solid ${colors.primary[600]}`,
                    },
                    "& .MuiFilledInput-root:hover": {
                      backgroundColor:
                        theme.palette.mode === "dark" ? colors.primary[400] : "#ffffff",
                    },
                    "& .MuiFilledInput-root.Mui-focused": {
                      backgroundColor:
                        theme.palette.mode === "dark" ? colors.primary[400] : "#ffffff",
                    },
                    "& .MuiFilledInput-root:before, & .MuiFilledInput-root:after": {
                      display: "none",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="email"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Role"
                    select
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.role}
                    name="role"
                    error={!!touched.role && !!errors.role}
                    helperText={touched.role && errors.role}
                    sx={{ gridColumn: "span 2" }}
                  >
                    {["Admin", "Manager", "Analyst", "Support"].map((role) => (
                      <MenuItem key={role} value={role}>
                        {role}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Contact Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contact}
                    name="contact"
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="City"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.city}
                    name="city"
                    error={!!touched.city && !!errors.city}
                    helperText={touched.city && errors.city}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address 1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address1}
                    name="address1"
                    error={!!touched.address1 && !!errors.address1}
                    helperText={touched.address1 && errors.address1}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address 2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address2}
                    name="address2"
                    error={!!touched.address2 && !!errors.address2}
                    helperText={touched.address2 && errors.address2}
                    sx={{ gridColumn: "span 4" }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: { xs: "stretch", sm: "center" },
                    gap: 2,
                    flexDirection: { xs: "column", sm: "row" },
                    pt: 1,
                  }}
                >
                  <Typography variant="body1" color={colors.grey[400]}>
                    All fields are required before a new user can be created.
                  </Typography>
                  <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{
                      minWidth: 180,
                      borderRadius: "999px",
                      px: 3,
                      py: 1.25,
                      fontWeight: 700,
                      boxShadow: "none",
                    }}
                  >
                    Create New User
                  </Button>
                </Box>
              </Stack>
            </Box>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  role: yup.string().required("required"),
  city: yup.string().required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  role: "",
  city: "",
  address1: "",
  address2: "",
};

export default Form;

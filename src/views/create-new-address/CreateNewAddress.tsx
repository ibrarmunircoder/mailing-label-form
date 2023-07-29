import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import { InputField, SelectField } from "shared/components";
import { colors, fontsWeight } from "styles/vars";
import { useFormik } from "formik";
import { SelectChangeEvent } from "@mui/material/Select";
import {
  useCreateNewAddressSchema,
  useSubmit,
} from "views/create-new-address/hooks";
import { isError, isErrorMessage } from "shared/utils";
import USData from "data/us-states-cities.json";
import { RecycleDonate } from "shared/enums";
import CloseIcon from "@mui/icons-material/Close";

const formHeaderTypographyStyles = {
  fontWeight: fontsWeight.fontBold,
  fontFamily: "Syncopate",
  fontSize: { xs: "27px", sm: "34px" },
  lineHeight: "40px",
  letterSpacing: "-3px",
  textAlign: "center",
  color: colors.wineBerry,
};

const typographyFontStyles = {
  fontSize: "14px",
  fontFamily: "Inter",
  color: colors.wineBerry,
  fontWeight: fontsWeight.fontNormal,
};

export const CreateNewAddress = () => {
  const {
    initialValues,
    onSubmit,
    isShippingLabelSent,
    handleCloseThanksMessage,
  } = useSubmit();
  const validationSchema = useCreateNewAddressSchema();
  const {
    handleSubmit,
    setFieldValue,
    getFieldProps,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const statesElement = USData.map(({ state_code, name }, index) => (
    <MenuItem key={index} value={state_code}>
      {name}
    </MenuItem>
  ));

  const handleStateOnChange = async (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => {
    const stateCode = event.target.value as string;
    setFieldValue("state", stateCode);
  };
  const handleRecycleDonateOnChange = async (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => {
    setFieldValue("recycleDonate", event.target.value);
  };

  const shippingFormElement = (
    <Card
      sx={{
        borderRadius: { xs: 0, sm: "30px" },
        width: "540px",
        maxWidth: "100%",
        backgroundColor: colors.prelude,
        padding: { xs: "12px", sm: "50px 70px 60px 70px" },
        boxShadow: "none",
      }}
    >
      <CardContent sx={{ padding: 0, "&:last-child": { paddingBottom: 0 } }}>
        <Box
          sx={{
            maxWidth: "100%",
            marginBottom: "40px",
          }}
        >
          <Typography
            component="h1"
            textTransform="uppercase"
            sx={{
              ...formHeaderTypographyStyles,
            }}
          >
            Drop your deets, Grab your label
          </Typography>
        </Box>
        <Grid container component="form" onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <InputField
              fullWidth
              placeholder="First Name"
              variant="outlined"
              helperText={isErrorMessage("firstName", errors)}
              error={isError("firstName", errors, touched)}
              {...getFieldProps("firstName")}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              fullWidth
              placeholder="Last Name"
              variant="outlined"
              helperText={isErrorMessage("lastName", errors)}
              error={isError("lastName", errors, touched)}
              {...getFieldProps("lastName")}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              fullWidth
              placeholder="Email Address"
              variant="outlined"
              helperText={isErrorMessage("email", errors)}
              error={isError("email", errors, touched)}
              {...getFieldProps("email")}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              fullWidth
              placeholder="Address Line 1"
              variant="outlined"
              helperText={isErrorMessage("addressLine1", errors)}
              error={isError("addressLine1", errors, touched)}
              {...getFieldProps("addressLine1")}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              fullWidth
              placeholder="Address Line 2"
              variant="outlined"
              helperText={isErrorMessage("addressLine2", errors)}
              error={isError("addressLine2", errors, touched)}
              {...getFieldProps("addressLine2")}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              fullWidth
              placeholder="City"
              variant="outlined"
              helperText={isErrorMessage("city", errors)}
              error={isError("city", errors, touched)}
              {...getFieldProps("city")}
            />
          </Grid>
          <Grid item xs={12}>
            <SelectField
              fullWidth
              label="State"
              variant="outlined"
              helperText={isErrorMessage("state", errors)}
              error={isError("state", errors, touched)}
              {...getFieldProps("state")}
              onChange={handleStateOnChange}
            >
              {statesElement}
            </SelectField>
          </Grid>
          <Grid item xs={12}>
            <InputField
              fullWidth
              placeholder="Zip"
              variant="outlined"
              helperText={isErrorMessage("zipcode", errors)}
              error={isError("zipcode", errors, touched)}
              {...getFieldProps("zipcode")}
            />
          </Grid>
          <Grid item xs={12}>
            <SelectField
              fullWidth
              label="Recycle or Donate"
              variant="outlined"
              helperText={isErrorMessage("recycleDonate", errors)}
              error={isError("recycleDonate", errors, touched)}
              {...getFieldProps("recycleDonate")}
              onChange={handleRecycleDonateOnChange}
            >
              <MenuItem value={RecycleDonate.recycle}>Recycle</MenuItem>
              <MenuItem value={RecycleDonate.donate}>Donate</MenuItem>
            </SelectField>
          </Grid>

          {/* <Grid item xs={12}>
            <Typography
              component="p"
              sx={{
                lineHeight: "40px",
                textAlign: "center",
                color: colors.wineBerry,
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
              }}
            >
              By submitting your data on this form, you acknowledge that Pact
              Collective will use the information provided in accordance with
              their{" "}
              <Typography
                component="a"
                href="https://www.pactcollective.org/terms-and-conditions"
                target="__blank"
                sx={{
                  lineHeight: "40px",
                  textAlign: "center",
                  color: colors.wineBerry,
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                }}
              >
                terms of use and privacy policy
              </Typography>
            </Typography>
          </Grid> */}

          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <LoadingButton
              variant="contained"
              type="submit"
              loading={isSubmitting}
              sx={{
                background: colors.viking,
                color: colors.wineBerry,
                borderRadius: "30px",
                fontWeight: fontsWeight.fontBold,
                fontSize: "14px",
                lineHeight: "24px",
                height: "44px",
                padding: "10px",
                minWidth: "210px",
                "&:hover": {
                  background: colors.viking,
                },
              }}
            >
              <span>Submit</span>
            </LoadingButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const shippingLabelSuccessMessageElement = (
    <Card
      sx={{
        borderRadius: { xs: 0, sm: "30px" },
        width: "480px",
        height: "514px",
        maxWidth: "100%",
        position: "relative",
        backgroundColor: colors.sidecar,
        padding: { xs: "12px", sm: "32px" },
      }}
    >
      <CardContent
        sx={{
          padding: 0,
          "&:last-child": { paddingBottom: 0 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          component="div"
          textTransform="uppercase"
          sx={{ ...formHeaderTypographyStyles }}
        >
          Thanks for taking the first step towards recycling your old toOL
        </Typography>
        <Typography
          component="div"
          textAlign="center"
          sx={{
            ...typographyFontStyles,
            padding: "27px",
          }}
        >
          Your pre-paid shipping label and instructions are being sent to you
          via email.
        </Typography>
        <Typography
          component="div"
          textAlign="center"
          sx={{ ...typographyFontStyles }}
        >
          You’re making a difference for our planet!
        </Typography>
        <CloseIcon
          onClick={handleCloseThanksMessage}
          sx={{
            position: "absolute",
            top: { xs: "15px", sm: "66px" },
            right: { xs: "12px", sm: "24px" },
            cursor: "pointer",
            color: colors.wineBerry,
          }}
        />
      </CardContent>
    </Card>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {isShippingLabelSent
        ? shippingLabelSuccessMessageElement
        : shippingFormElement}
    </Box>
  );
};

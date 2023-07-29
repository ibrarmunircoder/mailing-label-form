import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { colors, fontsWeight } from "styles/vars";

export const CustomeFormControl = styled(FormControl)(() => ({
  marginTop: 0,
  marginBottom: "16px",
  minWidth: "150px",

  "& .MuiSelect-icon": {
    width: "16px",
    height: "20px",
    marginRight: "8px",
    marginTop: "2px",
  },
  "& .MuiOutlinedInput-root": {
    marginTop: 0,
    border: `1px solid ${colors.lightMediumGray}`,
    height: "44px",
    borderRadius: "30px",
    // paddingLeft: "8px",
    backgroundColor: colors.colorWhite,
    "&.Mui-focused": {
      border: `1px solid ${colors.lightRed} !important`,
    },
    "&.Mui-error": {
      border: `1px solid ${colors.lightRed} !important`,
    },
    "&.Mui-disabled": {
      backgroundColor: colors.lightGray,
    },
    "&.Mui-disabled fieldset": {
      borderColor: "rgba(15, 23, 42, 0.26)",
    },
    "& fieldset": {
      border: "none",
    },
    "& .MuiInputBase-input": {
      // padding: "16px 20px",
      paddingRight: "10px",
      height: "auto",
      fontSize: "14px",
      lineHeight: "24px",
      color: colors.colorBlack,
      "&.Mui-disabled": {
        "-webkit-text-fill-color": "rgba(15, 23, 42, 0.38)",
      },
    },
  },
  "& .MuiFormLabel-root": {
    fontWeight: fontsWeight.fontMedium,
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    lineHeight: "24px",
    opacity: 1,
    color: colors.mediumDarkGray,
    transform: "translate(20px, 10px) scale(1)",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    display: "none",
  },
  "& .MuiFormLabel-root.MuiFormLabel-filled": {
    display: "none",
  },
  "& legend": {
    maxWidth: 0,
  },
  "& .MuiFormLabel-root.Mui-error": {
    color: colors.error,
  },
  "& .MuiFormHelperText-root": {
    marginTop: "5px",
    marginLeft: "10px",
    fontWeight: 500,
    fontSize: "14px",
    color: `${colors.error} !important`,
  },
}));

export const CustomeSelect = styled(Select)(() => ({
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#64748B",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: colors.primary,
  },
  "& .MuiSelect-icon": {
    color: colors.colorBlack,
  },
}));

import { makeStyles } from "@material-ui/core/styles";

const inputContainerStyles = makeStyles({
  root: {
    "& > .MuiFilledInput-underline:hover:before, & > .MuiFilledInput-underline:after, & > .MuiFilledInput-underline:before, .MuiFilledInput-root": {
      background: "none",
      border: "none",
    },

    width: "49%",
    borderRadius: "15px",
    background: `#fff`,
    borderBottom: "none",
    margin: "0 0 8px 0",
  },
});

export default inputContainerStyles;

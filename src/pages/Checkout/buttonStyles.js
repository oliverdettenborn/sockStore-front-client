import { makeStyles } from "@material-ui/core/styles";

import Colors from "../../config/colors";
import Typography from "../../config/typography";

const ButtonStyles = makeStyles({
  root: {
    fontFamily: `${Typography.Poppins}`,
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "15px",
    lineHeight: "27px",
    textAlign: "center",
    wordWrap: "break-word",
    padding: "8px 10px",
    background: `${Colors.yellow}`,
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margin: "10px 0 0 0",
  },
});

export default ButtonStyles;

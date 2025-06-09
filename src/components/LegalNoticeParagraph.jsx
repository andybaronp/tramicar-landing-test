import { Typography, useTheme } from "@mui/material"

const LegalNoticeParagraph = ({ children }) => {
  const theme = useTheme();
  return (

    <Typography component="p" sx={{
      color: theme.palette.custom.textBlue,
      fontSize: '14px',
      lineHeight: '24px',
      fontFamily: 'DM Sans, sans-serif',
      paragraphSpacing: '15px',
      letterSpacing: '-1.1%',
    }} >{children}</Typography>
  )
}
export default LegalNoticeParagraph
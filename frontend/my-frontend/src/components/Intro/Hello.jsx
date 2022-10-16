import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import PhoneIcon from "@mui/icons-material/Phone";
import ArticleIcon from "@mui/icons-material/Article";
import defResume from "../../static/DeFrancisco_ResumeF22.pdf";

export default function Hello() {
  return (
    <>
      <Paper
        elevation={5}
        sx={{
          textAlign: "center",
          alignItems: "center",
          borderRadius: "0px 0px 0px 15px",
          borderColor: "secondary.main",
          borderBottom: 1,
        }}>
        <br></br>
        <br></br>
        <Typography
          variant='h1'
          component='p'
          sx={{ fontFamily: "Roboto Condensed" }}>
          Sam DeFrancisco
        </Typography>
        <Typography
          variant='h4'
          color='secondary.light'
          sx={{ fontFamily: "Roboto Condensed" }}>
          (Software Engineer)
        </Typography>

        <Stack
          direction='row'
          spacing={1}
          sx={{ mt: 4, mb: 2, justifyContent: "center" }}>
          <Link
            href='https://github.com/sjdefran1'
            target='_blank'
            rel='noreferrer'>
            <Button
              variant='contained'
              sx={{
                ml: 1,
                mr: 1,
                fontFamily: "Roboto Condensed",
              }}>
              <GithubIcon color='action' sx={{ mr: 1 }} />
              Github!
            </Button>
          </Link>

          <Link
            href='https://www.linkedin.com/in/sam-defrancisco-4373361b3/'
            target='_blank'
            rel='noreferrer'>
            <Button
              variant='contained'
              color='secondary'
              sx={{
                ml: 1,
                fontFamily: "Roboto Condensed",
              }}>
              <LinkedInIcon color='action' sx={{ mr: 1 }} /> LinkedIn
            </Button>
          </Link>
        </Stack>
        <Divider variant='middle' color='grey' sx={{ ml: "34%", mr: "34%" }} />

        <Stack
          direction='column'
          spacing={1}
          sx={{ mt: 1, mb: 2, display: "inline-block" }}>
          <Stack direction='row' spacing={1} sx={{ justifyContent: "left" }}>
            <EmailIcon />
            <Typography>sjdefran@gmail.com</Typography>
          </Stack>
          <Stack direction='row' spacing={1} sx={{ justifyContent: "left" }}>
            <PhoneIcon />
            <Typography>(515)505-4146</Typography>
          </Stack>
          <br></br>
          <Link href={defResume} target='_blank' rel='noreferrer'>
            Resume PDF
          </Link>
        </Stack>
      </Paper>
    </>
  );
}

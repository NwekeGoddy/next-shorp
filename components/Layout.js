import React, { useEffect } from 'react';
import Head from "next/head";
import 
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import useStyles from "@/utils/styles";

function Layout({ children }) {

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);


  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Shorp | Experience Immersive Shopping</title>
      </Head>

      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Shorp</Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All right reserved. Shorping</Typography>
      </footer>
    </div>
  );
}

export default Layout;

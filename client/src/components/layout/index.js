import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { MemoryRouter as Router } from "react-router";
import SvgIcon from "@material-ui/core/SvgIcon";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  icon: {
    margin: theme.spacing(2),
    "&:hover": {
      color: "white"
    }
  },
  footer: {
    paddingTop: theme.spacing(6)
  },
  main: {
    marginTop: theme.spacing(12)
  },
  navroot: {
    flexGrow: 1
  },
  title: {
    marginRight: theme.spacing(2),
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    "&:hover": {
      color: "white"
    }
  },
  footerLink: {
    "&:not(:last-child)": {
      marginRight: theme.spacing(2)
    }
  }
});

class Layout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <AppBar className={classes.navroot}>
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="Home"
                component={RouterLink}
                to="/"
                className={classes.menuButton}
              >
                <HomeIcon />
              </IconButton>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                mindspace pitch
              </Typography>
              <Button
                color="inherit"
                component={RouterLink}
                to="/websites/"
                className={classes.menuButton}
              >
                Websites
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/servers/"
                className={classes.menuButton}
              >
                Servers
              </Button>
            </Toolbar>
          </AppBar>
          <main className={classes.main}>{this.props.children}</main>
          <footer className={classes.footer}>
            <Typography align="center" component="p">
              <Link
                component={RouterLink}
                to="/imprint/"
                className={classes.footerLink}
              >
                Imprint
              </Link>
              <Link
                component={RouterLink}
                to="/info/"
                className={classes.footerLink}
              >
                Info
              </Link>
            </Typography>
          </footer>
        </Container>
      </React.Fragment>
    );
  }
}

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

Layout.propTypes = {
  children: PropTypes.any
};

export default withStyles(styles)(Layout);

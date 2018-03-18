import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TopBar from "./TopBar";
import Drawer from "material-ui/Drawer"

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

//App component represents the whole app
class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className="container">
                <TopBar />
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    teste
                </Drawer>
            </div>
        );
    }

}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
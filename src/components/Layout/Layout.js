import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classess from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosedHandler} />
                <main className={classess.Component}>
                    {this.props.children}
                </main>
            </Aux>)
    }
}

export default Layout;
import React, { Component } from 'react';
import Model from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';
// import axios from '../../axios-orders';
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        componentWillMount() {
            this.reqInteceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
                // return res;
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInteceptor);
            axios.interceptors.response.eject(this.resInteceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Model
                        show={this.state.error}
                        modelClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Model>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;
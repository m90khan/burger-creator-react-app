import React from 'react';
class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorMessage: '',
  };

  componentDidCatch = (err, info) => {
    this.setState({
      hasError: true,
      errorMessage: err.message,
    });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

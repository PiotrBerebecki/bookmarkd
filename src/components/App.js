import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider, injectGlobal } from 'styled-components';
import theme from '../theme';

import Home from './Home';
import PageHeader from './PageHeader';
// import BottomNav from './BottomNav';
import Reader from './Reader';
import Snackbar from './Snackbar';

// eslint-disable-next-line
injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 112.5%;
  }

  input,
  button,
  label,
  textarea {
    font-family: inherit;
    font-size: 100%;
    color: inherit;
    background: none;
    border: none;
  }

  body,
  ul,
  h1,
  h2,
  h3,
  p,
  figure {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: ${theme.textDark};
    background-color: ${theme.bgLight};
  }

  a {
  color: inherit;
  text-decoration: none;
}
`;

const mapStateToProps = state => ({
  message: state.message,
});

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div>
            <PageHeader />
            <Route exact path="/" component={Home} />
            <Route path="/browse" component={Home} />
            <Route path="/library" component={Home} />
            <Route
              path="/reader/:slug"
              render={({ match }) => {
                return <Reader slug={match.params.slug} />;
              }}
            />

            {this.props.message && <Snackbar message={this.props.message} />}

            {/* <BottomNav /> */}
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
// THIS IS HOW TO USE showSnackbar
// export default connect(mapStateToProps, { showSnackbar })(App);

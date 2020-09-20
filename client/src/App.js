import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.css';

// route imports
import Header from './components/sub/header';
import Footer from './components/sub/buttons';
import Login from './components/view/login';
import Register from './components/view/login';
// import DirectMessage from './components/view/content';
import DirectMessage from './components/view/content/direct_message_contacts';
import DirectMessageCompose from './components/view/content/direct_message_compose';
// import Notifications from './components/view/content';
import Notifications from './components/view/content/notifications';
// import Notification from './components/view/content';
import Notification from './components/view/content/notification';
import Search from './components/view/search';
// import Profile from './components/view/content';
import Profile from './components/view/content/profile';

function App() {
  return (
    <div className={styles.body}>
      <Router>
        <Route path="/" component={Header} />
        <main>
          <Route path="/" exact component={Login} Route />
          <Route path="/logout" exact component={Login} Route />
          <Route path="/register" exact component={Register} Route />
          <Route path="/" exact component={DirectMessage} Route />
          <Route path="/notifications" exact component={Notification} Route />
          <Route path="/notification" exact component={Notifications} Route />
          <Route
            path="/direct-message-contacts"
            exact
            component={DirectMessage}
            Route
          />
          <Route
            path="/direct-message-compose"
            exact
            component={DirectMessageCompose}
            Route
          />
          <Route path="/search" exact component={Search} Route />
          <Route path="/profile" exact component={Profile} Route />
        </main>
        <Route
          path={[
            '/notifications',
            '/notification',
            '/direct-message-contacts',
            '/direct-message-compose',
            '/search',
            '/profile',
          ]}
          component={Footer}
        />
      </Router>
    </div>
  );
}

export default App;

// import React, { Component } from 'react';

// import logo from './logo.svg';

// import './App.css';

// class App extends Component {
//   state = {
//     response: '',
//     post: '',
//     responseToPost: '',
//   };

//   componentDidMount() {
//     this.callApi()
//       .then((res) => this.setState({ response: res.express }))
//       .catch((err) => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();
//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('/api/world', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();

//     this.setState({ responseToPost: body });
//   };

//   render() {
//     return (
//       <div className='App'>
//         <header className='App-header'>
//           <img src={logo} className='App-logo' alt='logo' />
//           <p>Updated component</p>
//           <a
//             className='App-link'
//             href='https://reactjs.org'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             Learn React
//           </a>
//         </header>
//         <p>{this.state.response}</p>
//         <form onSubmit={this.handleSubmit}>
//           <p>
//             <strong>Post to Server:</strong>
//           </p>
//           <input
//             type='text'
//             value={this.state.post}
//             onChange={(e) => this.setState({ post: e.target.value })}
//           />
//           <button type='submit'>Submit</button>
//         </form>
//         <p>{this.state.responseToPost}</p>
//       </div>
//     );
//   }
// }

// export default App;

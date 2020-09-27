import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import styles from './app.module.css';

// Give app access to the store
import { Provider } from 'react-redux';
// Import the store to use
import store from './store';

// route imports
import Header from './components/sub/header';
import Footer from './components/sub/buttons';
import Login from './components/view/login';
import Register from './components/view/login';
// import DirectMessage from './components/view/content';
import DirectMessageContacts from './components/view/content/direct_message_contacts';
import DirectMessageCompose from './components/view/content/direct_message_compose';
// import Notifications from './components/view/content';
import Notifications from './components/view/content/notifications';
// import Notification from './components/view/content';
import NotificationCompose from './components/view/content/notification_compose';
import Search from './components/view/search';
// import Profile from './components/view/content';
import Profile from './components/view/content/profile';
import store from './store';

function App() {
  // Wrap entire application with Store Provider
  return (
    <Provider store={store}>
      <div className={styles.body}>
        <Router>
          <Route path="/" component={Header} />
          <main>
            <Route path="/" exact component={Login} Route />
            <Route path="/logout" exact component={Login} Route />
            <Route path="/register" exact component={Register} Route />
            {/* <Route path="/" exact component={DirectMessage} Route /> */}
            <Route
              path="/notifications"
              exact
              component={Notifications}
              Route
            />
            <Route
              path="/notification-compose"
              exact
              component={NotificationCompose}
              Route
            />
            <Route
              path="/direct-message-contacts"
              exact
              component={DirectMessageContacts}
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
              '/notification-compose',
              '/direct-message-contacts',
              '/direct-message-compose',
              '/search',
              '/profile',
            ]}
            component={Footer}
          />
        </Router>
      </div>
    </Provider>
  );
}

export default App;

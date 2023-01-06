import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { GetUser } from './supabase';

import App from './App';
import { DarkMode } from './scripts/settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
DarkMode();
console.log(localStorage.getItem('User'));
//console.log(localStorage.getItem('UserBranch'));
//GetUser();
//console.log('Account connected')
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);


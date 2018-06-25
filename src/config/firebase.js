import * as firebase from 'firebase';

import { FirebaseConfig } from '../config/keys';
firebase.initializeApp(FirebaseConfig);

const database = firebase.database().ref();
export const todosRef = database.child('todos');
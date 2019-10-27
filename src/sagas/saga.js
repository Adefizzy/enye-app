// eslint-disable-next-line no-unused-vars
import {takeLatest, put, call, fork, take, all} from 'redux-saga/effects';
import { eventChannel} from 'redux-saga';
// eslint-disable-next-line no-unused-vars
import {switchToTable} from '../Components/action/switchPage';
// eslint-disable-next-line no-unused-vars
import {postApi} from '../api';
import firebase from 'firebase';
import {updateUser} from '../Components/action/updateUser';
// import {createUser} from '../Components/action/createUser';

const Config = {
  apiKey: "AIzaSyANUWOZhjCf8AW3o9N2_lIexYKObn5-oWQ",
  authDomain: "enye-app.firebaseapp.com",
  databaseURL: "https://enye-app.firebaseio.com",
  projectId: "enye-app",
  storageBucket: "enye-app.appspot.com",
  messagingSenderId: "263555802799",
  appId: "1:263555802799:web:256eeca98fa1348090565a",
  measurementId: "G-84E8XNB508"
};


firebase.initializeApp(Config);
const database = firebase.database();

function createEventChannel(){
  const listener = eventChannel(
    emit => {
      console.log('emitting');
      database.ref('/users')
       .on('value', data => {
         console.log(data.val());
         emit(data.val());
        });

    return () => database.ref('users').off(listener);

    }
  );

  return listener;

  // const channel = new eventChannel(
  //   emiter => {
  //   console.log('channel');
  //   const listener = database.ref('users').on('value', snapshot => {
  //     console.log(snapshot);
  //     emiter({data:snapshot.val() || {}});
  //   });
  //   return () => listener.off();
  // });

  // while(true){
  //   const {data} = yield take(channel);

  //   yield put(updateUser(data));
  // }

}

function* updateUserSaga(){
  console.log('update');
  const updateChannel = createEventChannel();
  while(true){
    
    const user = yield take(updateChannel);
    console.log(user);
    yield put(updateUser(user));
  }
}

function* createUserSaga(){
  console.log('create')
  const action = yield take('CREATE_USER');

  const  users  = action.payload;
  // console.log(users);
  try {
    yield call(postApi, users)
    yield put(switchToTable)
  } catch (error) {
    console.error(error);
  }
}

export default function* rootSaga(){
  yield fork(createUserSaga);
  yield fork(updateUserSaga);
}


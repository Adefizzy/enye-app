
import {put, call, fork, take} from 'redux-saga/effects';
import { eventChannel} from 'redux-saga';
import {switchToTable} from '../Components/action/switchPage';
import {postApi} from '../api';
import firebase from 'firebase';
import {updateUser} from '../Components/action/updateUser';


const Config = {
  apiKey: "AIzaSyANUWOZhjCf8AW3o9N2_lIexYKObn5-oWQ",
  authDomain: "enye-app.firebaseapp.com",
  databaseURL: "https://enye-app.firebaseio.com",
  storageBucket: "enye-app.appspot.com",
  messagingSenderId: "263555802799",
};

firebase.initializeApp(Config);
const database = firebase.database();

function createEventChannel(){
  const listener = eventChannel(
    emit => {
      database.ref('/users').on('value', snapshot => emit({data:snapshot.val() || {}})
      );

    return () => database.ref('/users').off(listener);

    }
  );

  return listener;

}

function* updateUserSaga(){
 
  const updateChannel = createEventChannel();
  while(true){
    
    const {data} = yield take(updateChannel);
    yield put(updateUser(data));
  }
}

function* createUserSaga(){
  
  const action = yield take('CREATE_USER');

  const  users  = action.payload;
 
  try {
    yield call(postApi, users)
    yield put(switchToTable())
  } catch (error) {
    console.error(error);
  }
}

export default function* rootSaga(){
  yield fork(createUserSaga);
  yield fork(updateUserSaga);
}


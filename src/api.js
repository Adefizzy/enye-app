import axios from 'axios';
const URL = 'https://us-central1-enye-app.cloudfunctions.net/users'

 export const postApi =  user => {
    axios.post(URL, user)
    .then(res => res.data)
    .catch(err => err)
  }

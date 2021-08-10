import {post} from '../../util/axios';
import {
  message
} from "antd"
const setting = {
    state:{
      state:2,
      waiting:false,
      Visible:false
    }, // initial state
    reducers: {
      setWaitStatus(state,payload){
        return({
          waiting:payload
        })
      },
      setVisible(state,payload){
        return({
          ...state,
          Visible:payload

        })
      }
      // handle state changes with pure functions
  
    },
    effects: {
      // handle state changes with impure functions.
      // use async/await for async actions
      async sendChangePasswordAsync(payload,rootState){
        const res =await post('/api/update',{
          pastpassword:payload.oldPassword,
          newpassword :payload.newPassword
        });
        return res
    }
    }
  }
  export default setting;
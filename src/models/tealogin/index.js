import { get, post } from "../../util/axios";
import { setStorage, getStorage } from "../../util/index";
import {
  message
} from "antd"
 const login = {
  state:{
    token:'111',
    flag:'',
    code:0,
    personInfo:{
      name:'张三',
      studentId:'2019213000',
      role:'管理员'
    }
  }, // initial state
  reducers: {
    savecode(state, payload) {
      return{
       ...state,
       code:payload
      }
    },
    saveflag(state, payload) {
      return{
        ...state,
        flag:payload
      }
    },
    saveinfo(state, payload) {
      return{
        ...state,
        personInfo:payload
      }
    },
    // loginTrue(state,payload){
    //   return{
    //     flag:payload
    //   }
    // }
  },
  effects: {
    // handle state changes with impure functions.
    async submitLogin(payload, rootState) {
      const res =  await post('api/login', payload)
      console.log(res)
      if(res.code === 200) {
        this.savecode(res.code)
        setStorage('token', res.data.token)
        this.saveinfo(res.data)
      }
      else {
        message.error(res.loginMsg);
      }
    }
  }
}
export default login;
import { get, post } from "../../util/axios";
import { setStorage, getStorage } from "../../util/index";
import {
  message
} from "antd"
 const login = {
  state:{
    mode:'ch',
    token:'111',
    flag:'',
    code:0,
    personInfo:{
      name:'张三',
      studentId:'2019213000',
      role:'老师'
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
    changemode(state, payload){
      return{
        ...state,
        mode:payload,
      }
    }
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
      console.log(this)
      if(res.code === 200) {
        this.savecode(res.code)
        setStorage('token', res.data.token)
        console.log(res.data)
        this.saveinfo(res.data)
      }
      else {
         message.error(res.message);
      }
    },
    async changeinfo(payload, rootState) {
      const res =  await post('api/pinfor', )
      console.log(res)
      if(res.code === 200) {
        console.log(res.data)
        this.saveinfo(res.data)
      }
      else {
        message.error(res.message);
      }
    },
    
  }
}
export default login;
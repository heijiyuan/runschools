
 import { get, post } from "../../util/axios";
 import { setStorage, getStorage } from "../../util/index";
 import { message } from 'antd'

 const manager = {
   state: {
     state: 1,
     page: 1,
     total: 100,
     selectedRowKeys: {},
     field:'',
     //记录跨了那几页选取数据
     visiable:false,
     insearch:false,
     //弹窗显示标志
     error: {},
     loginFlag: false,
     message:false,
     detail:[],
     //是否登录标志
     list:[]
 
   }, // initial state
   reducers: {
     // handle state changes with pure functions
        saveList(state,payload){
           return{
             ...state,
             list:payload
           }
        },
        changemessage(state,payload){
          return{
            ...state,
            message:payload,
            page:1,
            state:state.state + 1

          }
       },
        savetotalnum(state,payload){
          return{
            ...state,
            total:payload
          }
       },
       changepage(state, payload) {
        return {
          ...state,
          state: state.state + 1,
          page: payload,
          
        }
      },
      changeinsearch(state, payload) {
        return {
          ...state,
          insearch: payload,
        };
      },
      changevisibal(state, payload) {
        return {
          ...state,
         visiable: payload,
        };
      },
      savefield(state, payload) {
        return {
          ...state,
          field: payload,
        };
      },
      savedetail(state, payload) {
        return {
          ...state,
          detail: payload,
        };
      },
   },
   effects: {
     // handle state changes with impure functions.
     // use async/await for async actions
     async getApproveList(payload, state) {
      
         console.log(payload, state.manager.message.toString())
         const res = await post('api/page',
           {
            page_number: payload,
            message:state.manager.message.toString()
           }
         )    
         if(res.code===200){
           this.saveList(res.data.PageInfor)
           this.savetotalnum(res.data.WholePageNum)
         }  
        //  else if(res.code===2){
        //    this.saveerror(res.message);
        //    this.changethevisibal(true)
        //  }   
          console.log(res)
         // if (res.code == 2) {
           
         // }
       
 
     },
     async showdetail(payload, rootState) {
       const res = await post('api/detail',
         payload)
        //  console.log(res)
       if (res.code === 200) {
        //  
        console.log(res)
        this.savedetail(res.data)
        this.changevisibal(true) 
       }
 
     },
     async search(payload, rootState) {
      const res = await post('api/search',
        payload)
      if (res.code === 200) {
         
         this.saveList(res.data.PageInfor)
         this.savetotalnum(res.data.WholePageNum)
       console.log(res)

      }

    },
   }
 }
 export default manager;
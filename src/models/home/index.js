const home = {
    state: {
        count:1,
        defaultSelectedKeys:['1'],
        
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      changeSelectedKeys(state, payload) {
        return {
          ...state,
          defaultSelectedKeys:payload
        }
      }
    },
    effects: {
      // handle state changes with impure functions.
      // use async/await for async actions
      async incrementAsync(payload, rootState) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.increment(payload)
      }
    }
  };
  export default home;
const common = {
    state: {
        select:['1'],
        //用于不同的页面默认选择项目

    }, // initial state
    reducers: {
      // handle state changes with pure functions
      setSelected(state, payload) {
        return {
            ...state,
            select:payload
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
  export default common;
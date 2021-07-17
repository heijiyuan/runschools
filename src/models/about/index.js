const about = {
    state: {
        count:1,
        aboutme:'我的bilibili在2020年疫情期间，我上传了我的第一个bilibili视屏，是分享一个使用vue. js来编写实时疫情界面的教程，第一次收获了点赞和关注随后我在bilibili每周更新自己想要分享的东西，如果你感兴趣可以来我的个人空间瞧一瞧',

        tags:[{ctx:123,color:'orange'}
      ,{ctx:123,color:'red'}
      ,{ctx:156123,color:'blue'}
      ,{ctx:123,color:'orange'}
      ,{ctx:123,color:'green'}
      ,{ctx:1219843,color:'orange'}
      ],
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      increment(state, payload) {
        return state + payload
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
  export default about ;
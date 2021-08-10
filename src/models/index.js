import { init } from "@rematch/core"
// import home from './home/index'
import setting from './setting/index'
import information from './information/index'
import introduction from './introduction/index'
import manager from './manager/index'
import login from './login/index'
import home from './home/index'
const store = init({
    models: {
        // home,
        login,
        // eslint-disable-next-line no-undef
        manager,
        information,
        setting,
        introduction,
        home
    } 
})

export default store
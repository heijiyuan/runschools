import { init } from "@rematch/core"
import home from './home/index'
import about from './about/index'
import speak from './speak/index'
import common from './common/index'
import login from './login/index'
const store = init({
    models: {
        home,
        login,
        about,
        speak,
        common
    } 
})

export default store
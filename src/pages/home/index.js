import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Route,
  Redirect,
  Switch,
  withRouter,
} from "react-router-dom";
import { SettingOutlined , TeamOutlined  } from "@ant-design/icons";
import { useHistory ,Link} from "react-router-dom";
import "./index.css";
import { Layout,Menu,Avatar,Button} from "antd";
import Setting from "../setting/index";
import Manager from "../manager/index";
import Exit from "../exit/index";
import Information from "../information/index";
import Introduction from "../introduction/index";
const { Header, Content ,Sider,Footer} = Layout;

const Home = (props) => {
  //判断网络状态
  const {personInfo} = props.login
  const {changeSelectedKeys,mode,loginDispatch } = props
  const {defaultSelectedKeys} = props
  console.log(defaultSelectedKeys)
  const history = useHistory()
  const handleClick = e => {

    changeSelectedKeys([e.key])
    history.push(e.key)
    
  };

  useEffect(() => {
    console.log(props.history.location.pathname)
    changeSelectedKeys([props.history.location.pathname])
  }, []);
  useEffect(() => {
    loginDispatch.changeinfo()
  }, []);
  const onclick = ()=> {
    if(mode === "ch"){
     loginDispatch.changemode("tai");
    }
    else{
     loginDispatch.changemode("ch");
    }
   
  }
  const func = (role,lan) => {
      if(role =='老师'){
        if(lan=="ch"){
           return "教师端"
        }
        else{
           return "ครูจบ"
        }
      }
      else {
        if(lan=="ch"){
          return "学生端"
        }
        else{
          return "จบการศึกษา"
        }
      }
  }
  return (
    // <Router>
    <div>
      <Layout>
        <Header  style={{
                    overflow: 'auto',
                    width: '100vw',
                    position: 'fixed',
                    height:"8vh",
                    zIndex:10,
                    left: 0
                  }}
                   className="header">
          <div className="logo">
            <span className="font">{ mode === "ch" ? "境外学生管理平台" : "แพลตฟอร์มการจัดการนักเรียนต่างชาติ" }</span>
            <span className="font"> {func(personInfo.role,mode)}  </span>
            <Button  style={{backgroundColor:"white",marginLeft:"30px"}} onClick={onclick} >{ mode === "ch" ? "使用泰语/การใช้ภาษาจีน" : "การใช้ภาษาจีน/使用泰语" }</Button>
          </div>

        </Header>
             <Layout>
                 <Sider
                  width={200} 
                  style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    marginTop:"8vh"
                  }}
                  className="site-layout-background">
                    <div className="container_1">
                      <div className="container2">
                      <Avatar size={64} src={personInfo.role=='老师'?'https://we.cqupt.edu.cn/app/images/core/swzl/%E7%AE%A1%E7%90%86%E5%91%981.png':'https://we.cqupt.edu.cn/app/images/core/swzl/%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B71.png'}></Avatar>
                      </div>
                      <div className="container3">
                      <p className="fontName" >{ mode === "ch" ? "姓名" : "เนม" }:{personInfo.name}</p><br/>
                      <p className="fontId">{ mode === "ch" ? "账号" : "อธิบายแจกแจง" }:{personInfo.role==='老师' ? personInfo.teacherId : personInfo.studentId}</p>
                      </div>
                    </div>
                 <Menu
                   mode="inline"
                   defaultSelectedKeys={defaultSelectedKeys}
                   selectedKeys={defaultSelectedKeys}
                   style={{ height: '82%', borderRight: 0 }}
                   onClick={handleClick}
                 >
                   
                     <Menu.Item icon={<TeamOutlined />} key="/home/information"> { mode === "ch" ? "信息管理" : "การจัดการสารสนเทศ"} </Menu.Item>
                     <Menu.Item icon={<SettingOutlined />}   key="/home/setting">{ mode === "ch" ? "个人设置" : "การตั้งค่าส่วนบุคคล" }</Menu.Item>
                     <Menu.Item key="/home/introduction">&nbsp;&nbsp;&nbsp;&nbsp;{ mode === "ch" ? "重庆印象" : "ความประทับใจของฉงชิ่ง" }</Menu.Item>
                     <Menu.Item key="/home/exit">&nbsp;&nbsp;&nbsp;&nbsp;{ mode === "ch" ? "退出登录" : "ออกจากระบบ" }</Menu.Item>
                  
                 </Menu>
                </Sider>
                <Layout  style={{ marginLeft: 200 }}>
            
              
                <div style={{display:"flex",width:"100%",height:"92vh",marginTop:"8vh",backgroundColor:"white"}}>
                 <Switch>
                   <Route path="/home/information" exact component={personInfo.role ==='老师'?Manager:Information} />
                   <Route path="/home/setting" component={Setting} />
                   <Route path="/home/introduction" component={Introduction} />
                   <Route path="/home/exit" component={Exit} />
                   <Redirect to="/home/information"/>
                 </Switch>
                 
                </div>
            
            </Layout>
             </Layout>
             <Footer style={{ textAlign: 'center',height:"10vh",zIndex:10,position:'fixed',bottom:0,width:'100%' ,backgroundColor:'white' }} >
                   <a  href='https://beian.miit.gov.cn'>豫ICP备2021011660号-2</a>
             </Footer>
      </Layout>
    </div>
   
  );
};

const mapState = (state) => ({
  login: state.login,
  mode:state.login.mode,
  defaultSelectedKeys:state.home.defaultSelectedKeys

});

const mapDispatch = (dispatch) => ({
  changeSelectedKeys:dispatch.home.changeSelectedKeys,
  loginDispatch: dispatch.login,
 
});

const HomeContainer = connect(mapState, mapDispatch)(Home);
export default withRouter(HomeContainer);

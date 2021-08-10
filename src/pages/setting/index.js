import {  useHistory } from "react-router-dom";
import {
    withRouter,
  } from "react-router-dom";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import  "./index.css";
import { Button, Avatar, Image, Modal, Input, Form,message } from "antd";
import { KeyOutlined} from "@ant-design/icons";
const setting = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [form] = Form.useForm();
    const {personInfo} = props.home
    
    const {setVisible,changeword,mode} = props
    const {Visible} = props.setting
    

    const handleClick=()=>{
        setVisible(true)
      }
  
      const handleOK= async()=>{
        form
        .validateFields()
        .then((values) => {
            console.log(values)
         if(values.newPassword === values.newPasswordAgain){
            changeword(values).then(res => {
              console.log(res ,123)
              if(res.code === 200){
               message.success(res.message);
               setVisible(false);
               history.push("/");
              }else{
               message.error(res.message);
              }
            })
          
           
            
         }
         else{
            message.info('两次输入密码不一致');
         }
           
        })
        .catch((info) => {
          console.log('Validate Failed:', info);
        });
      }
  
      const judgeState=(res)=>{
        // if(res.code==0){
        //   setVisible(false);
        //   setConfirmLoading(false);
        //   alert(res.message);
        //   props.history.replace('/');
        //   deleteStorage('token');
        // }
        // else{
        //   alert(res.message);
        //   setConfirmLoading(false);
        // }
      }
  
  
    const handleCancel = () => {
      setVisible(false);
    };
  
    const onFinish = (value) => {
    };
  
    const onFinishFailed = (value) => {
    };
    return (
        <div className="contain">
      {" "}
      <Fragment>
        <div className="Contain_1">
          <div className="container_1_1">
            <Avatar
              className="icon1"
              src={
                personInfo.role == "管理员" ? (
                  <Image src='https://we.cqupt.edu.cn/app/images/core/swzl/%E7%AE%A1%E7%90%86%E5%91%98.png' width={70} />
                ) : (
                  <Image src='https://we.cqupt.edu.cn/app/images/core/swzl/%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7.png' width={70} />
                )
              }
            />
            <br />
            <div className="container_1_2">
            { mode === "ch" ? "姓名" : "เนม"}
              <p  className="p">{personInfo.name}</p>
            </div>
            <div className="container_1_2">
            { mode === "ch" ? "账号" : "อธิบายแจกแจง" }
            
              <p className="p" >{personInfo.role==='老师' ? personInfo.teacherId : personInfo.studentId}</p>
            </div>
            <div className="container_1_2">
              {" "}
              { mode === "ch" ? " 身份" : "ตำแหน่งในทีม"}
              <p className="p"  >{personInfo.role}</p>
            </div>
          </div>
      
          <div className='foot'>
          {/* <h3>修改密码</h3> */}
          <p className='footfont1' >{ mode === "ch" ? "修改密码" : "เปลี่ยนรหัสผ่าน"}</p>
          <br />
          <Button
            type="primary"
            icon={<KeyOutlined />}
            className='footbtn1'
            onClick={handleClick}
          >
            
            { mode === "ch" ? " 点击修改" : "คลิกเพื่อแก้ไข"}
          </Button>

          <Modal
            title={ mode === "ch" ? "修改密码" : "เปลี่ยนรหัสผ่าน"}
            okText={ mode === "ch" ? "确定" : "ยืนยัน"}
            cancelText={ mode === "ch" ? "取消" : "ยกเลิก"}
            visible={Visible}
            onOk={handleOK}
            onCancel={handleCancel}
            // confirmLoading={true}
          >
            <Form  
            form = {form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
              <Form.Item
                
                label={ mode === "ch" ? "您的密码" : "รหัสผ่านของคุณ"}
                name="oldPassword"
                rules={mode === "ch" ?[
                  { required: true, message: "请输入密码" },
                  { min: 10, message: "长度至少10位" },
                ]:[
                  { required: true, message: "กรุณาใส่รหัสผ่าน" },
                  { min: 10, message: "ความยาวอย่างน้อย" },
                ]
              }
              >
                <Input.Password  placeholder={ mode === "ch" ? "输入您的密码": "ป้อนรหัสผ่านของคุณ"} />
              </Form.Item>
              <Form.Item
                label={ mode === "ch" ? "您的新密码" : "รหัสผ่านใหม่ของคุณ"}
                name="newPassword"
                rules={mode === "ch" ?[
                  { required: true, message: "请输入密码" },
                  { min: 10, message: "长度至少10位" },
                ]:[
                  { required: true, message: "กรุณาใส่รหัสผ่าน" },
                  { min: 10, message: "ความยาวอย่างน้อย" },
                ]}
              >
                <Input.Password
                  minLength="10"
                  placeholder={ mode === "ch" ? "新密码，不少于10位" : "รหัสผ่านใหม่ไม่น้อยกว่า"}
                />
              </Form.Item>
              <Form.Item
                label={ mode === "ch" ? "确认您的新密码" : "ยืนยันรหัสผ่านใหม่ของคุณ"}
                name="newPasswordAgain"
                rules={mode === "ch" ?[
                  { required: true, message: "确认新密码" },
                  { min: 10, message: "长度至少10位" },
                ]:[
                  { required: true, message: "ยืนยันรหัสผ่านใหม่" },
                  { min: 10, message: "ยืนยันรหัสผ่านใหม่" },
                ]}
              >
                <Input.Password
                  minLength="10"
                  placeholder={ mode === "ch" ? "再次输入您的新密码" : "ป้อนรหัสผ่านใหม่ของคุณอีกครั้ง"}
                />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      
        </div>

      </Fragment>
    </div>
    )
}

const mapState = (state) => ({
    home: state.login,
    setting: state.setting,
    mode:state.login.mode,
})

const mapDispatch = (dispatch) =>({
    setVisible: dispatch.setting.setVisible,
    changeword:dispatch.setting.sendChangePasswordAsync
})

const Setting = connect(mapState,mapDispatch)(withRouter(setting));

export default Setting;
import  {  useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, message, Row, Col, Image } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import "./index.css"

//备注
const layout = {
  wrapperCol: { offset: 6, span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 12 },
};

const Tealogin = (props) => {
  const history = useHistory();
  const { loginDispatch,mode } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    if (props.code == 200) {
      loginDispatch.savecode(1);
      history.push("/home");
    }
  });
 const onclick = ()=> {
   if(mode === "ch"){
    loginDispatch.changemode("tai");
   }
   else{
    loginDispatch.changemode("ch");
   }
  
 }
  const Nav = () => {
    return (
      <>
        <Row>
          <Col span={5} offset={7}>
            <Link  to="/Login">{ mode == "ch" ?"学生登录":"นักเรียนเข้าสู่ระบบ"} </Link>
          </Col>
          <Col span={5}>
            <Link style={{color:"#1890FF"}} to="/Tealogin">{ mode == "ch" ?"管理员登录":"ผู้ดูแลระบบเข้าสู่ระบบ"}</Link>
          </Col>
        </Row>
      </>
    );
  };

  const FormInfo = (props) => {
   
    let onFinish = (values) => {
      const { code, password } = values;
      
      loginDispatch.submitLogin({
        code,
        password,
      });
      form.setFieldsValue({
        code: '',
        password:''
      });
    };

    const onFinishFailed = (errorInfo) => {
      message.error(errorInfo.errorFields[0].errors[0]);
    };
    return (
      <Form
        form={form}
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // validateMessages={validateMessages}
      >
        <Form.Item
          name="code"
          rules={mode == "ch"?[
            {
              required: true,
              message: "请输入学号",
            },
            {
              len: 7,
              message: "长度7位!",
            },
          ]:[
            {
              required: true,
              message: "กรุณาระบุหมายเลขโรงเรียน",
            },
            {
              len: 10,
              message: "ความยาวของบิต!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder={ mode == "ch" ?"请输入学号":"กรุณาระบุหมายเลขโรงเรียน"} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={mode == "ch" ?[
            {
              required: true,
              message: "请输入密码",
            },
            {
              min: 10,
              message:  "长度至少10位" 
            },
          ]:[
            {
              required: true,
              message: "กรุณาใส่รหัสผ่าน",
            },
            {
              min: 10,
              message:  "ความยาวอย่างน้อย" 
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder={ mode == "ch" ?"请输入密码":"กรุณาใส่รหัสผ่าน"} />
        </Form.Item>

        <Row>
          <Col offset={12}>
            <div>{ mode == "ch" ?"初始密码为cqupt+学号":"รหัสผ่านเริ่มต้นสำหรับ cqpt หมายเลขโรงเรียน"}</div>
          </Col>
        </Row>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>{ mode == "ch" ?"记住密码":"จำรหัสผ่าน"}</Checkbox>
        </Form.Item>

      <Form.Item >
          <Button type="primary" htmlType="submit" className="button">
           { mode == "ch" ?"登录":"ล็อกอิน"} 
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
   <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(32,8,66)"}}>
    <div className="Container">
      <span className="backImg"></span>
      <div className="login">
        <div className="form">
          <div className="nav">
            <Nav />
          </div>
          <FormInfo />
        </div>
      </div>
      <Button className="btn" onClick={onclick} >{ mode === "ch" ? "使用泰语/การใช้ภาษาจีน" : "การใช้ภาษาจีน/使用泰语" }</Button>
    </div>
  </div>
  );
};
// 映射state
const mapState = (state) => ({
  code: state.login.code,
  loginFlag: state.login.flag,
  token: state.login.token,
  mode:state.login.mode,
});

// const mapDispatch = ({ login: { increment, incrementAsync }}) => ({
//     increment: () => increment(1),
//     incrementAsync: () => incrementAsync(1)
// })
const mapDispatch = (dispatch) => ({
  loginDispatch: dispatch.login,
 
});

const TeaLogin = connect(mapState, mapDispatch)(Tealogin);
export default TeaLogin;

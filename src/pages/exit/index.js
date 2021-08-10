
import React from "react";
import { connect } from "react-redux";
import { Button, message } from "antd";
import "./index.css";
// import { deleteStorage } from "../../../../util/index";

const Exit = (props) => {
  const {mode} = props
  const handleClick = () => {
    // deleteStorage("token");
    message.success({
      content: "您已退出登录",
      duration: 1,
      onClose: () => {
        // props.history.replace("/");
        props.history.push("/")
      },
      style: {
        marginTop: "10rem",
      },
    });
  };

  return (
      
    
      <div className="wrap">
        <h1>{ mode === "ch" ? "是否确认退出登录!" : "ยืนยันการออกจากระบบ"} </h1>
        <br />
        <Button
          size="large"
          type="primary"
          className="butn"
          onClick={handleClick}
        >
         { mode === "ch" ? "确认" : "ยืนยัน"}  
        </Button>
      </div>
    
  );
};

const mapState = (state) => ({
  // approveList = state.userController
  mode:state.login.mode,
});

const mapDispatch = (dispatch) => ({
//   userControllerDispatch: dispatch.userController,
});
export default connect(mapState, mapDispatch)(Exit);
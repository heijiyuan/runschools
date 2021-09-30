
import {
    withRouter,
  } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

const start = (props) => {    
    return (
        <div className="contain">
          开始介绍页面
        </div>
    )
}

const mapState = (state) => ({
})

const mapDispatch = (dispatch) =>({
})

const Start= connect(mapState,mapDispatch)(withRouter(start));

export default Start;
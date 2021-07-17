// import { useEffect } from "react";
import { connect } from "react-redux";
import { Layout,Timeline,BackTop} from 'antd';
// import Nav from '../component/nav/index'
import './home.css';
import { ArrowUpOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const home = (props) => {
   
      
   return (
     <>
         123
    </>
   )
}

const mapState = (state) => ({
    count: state.home.count,
  });
  
  const mapDispatch = (dispatch) => ({
    homeDispatch: dispatch.home,
    navDispatch: dispatch.common
    //确保刷新之后导航栏标签不跑偏
  });
  
  const Home = connect(mapState, mapDispatch)(home);
  export default Home;
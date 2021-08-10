import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Table,
  PageHeader,
  Pagination,
  Button,
  Input,
  Popconfirm,
  message,
  Modal,
  Drawer
} from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import "./index.css"
// import { useHistory } from "react-router-dom";
const { Search } = Input
const Manager = (props) => {
  const { managerDispatch, managerList } = props;
  // const history = useHistory();
  
  useEffect(() => {
    
    if(!managerList.insearch){
      managerDispatch.getApproveList(managerList.page.toString());
      console.log(123,managerList.message)
    }
      if(managerList.insearch){
        managerDispatch.search({
          message:managerList.field, 
          page_number:managerList.page.toString()
         });
         console.log(123,managerList.field,managerList.page.toString())
      }
  },[managerList.state])

  const Drawerr = () => {
    const obj = managerList.detail
    const onClose = () => {
      managerDispatch.changevisibal(false);
    };
    // const display = Object.keys(obj).map(key => {
    //   return (
    //     <div className="my-posts">
    //       <li key={key}>
    //         {key}:{obj[key]}
    //       </li>
    //     </div>
    //     );
    //   });
    return (
      
        
        <Drawer
          title="详细信息"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={managerList.visiable}
        >
   
          <p>护照名字:{obj.passport_name}</p>
          <p>中文名字:{obj.chinese_name}</p>
          <p>性别:{obj.sex}</p>
          <p>国籍:{obj.nationality}</p>
          <p>护照号码:{obj.passport_code}</p>
          <p>申请编号:{obj.application_num}</p>
          <p>出生地:{obj.born_place}</p>
          <p>出生日期:{obj.born_date}</p>
          <p>婚姻状况:{obj.marital_status}</p>
          <p>学生类别:{obj.student_type}</p>
          <p>院系:{obj.faculty}</p>
          <p>学习专业:{obj.specialty}</p>
          <p>起止日期:{obj.begin_time}-{obj.end_time}</p>
          <p>学制:{obj.sys}</p>
          
          
           
        </Drawer>
      
    );
  };
  

  // const JumpMessage = () => {
  //   const handleCancel = () => {
  //     managerDispatch.changethevisibal(false);
  //     message.info("已取消");
  //   };

  //   return (
  //     <Modal
  //       visible={managerList.thevisibal}
  //       title="提示信息"
  //       okText="确定"
  //       cancelText="取消"
  //       onCancel={handleCancel}
  //       onOk={() => {
  //         managerDispatch.changeloginFlag(true);
  //       }}
  //     >
  //       <div>{managerList.error}</div>
  //       <div>点击确定可以跳转到登录页面</div>
  //     </Modal>
  //   );
  // };

  const Head = () => {
    const search= (value) => {
      if(value===''){
        message.error("搜索框不能为空");
      }else{
        managerDispatch.changeinsearch(true)
        console.log(value)
        managerDispatch.savefield(value);
        managerDispatch.changepage(1)
      }
      

    }
  

const showall= (value) => {
  managerDispatch.changeinsearch(false);
  managerDispatch.changemessage(true);
  // managerDispatch.changepage(1)
}
    return (
      <PageHeader
        backIcon={<MenuFoldOutlined />}
        className="site-page-header"
        extra={
          // <Popconfirm
          //   key="1"
          //   title="确定批准吗?"
          //   onConfirm={summit}
          //   onCancel={cancel}
          //   okText="确定"
          //   cancelText="取消"
          //   style={{ marginRight: "200px" }}
          // >
            [<Search key='1' style={{ width: '400px',marginRight:'300px' }} placeholder='输入学号或者姓名进行快速查询' onSearch={search} ></Search>,
            <Button  className={managerList.insearch ? "show": "hidden"}  key='2'  style={{marginLeft:'50px', marginRight: '200px'}} onClick={showall} >显示全部</Button>
         ]
        }
      />
    );
  };

  const Numbernav = () => {
    const changepage = (page) => {
      managerDispatch.changepage(page);
    };
    return (
      <Pagination
        style={{ textAlign: "center" }}
        responsive
        // defaultCurrent={1}
        total={managerList.total}
        pageSize={10}
        showSizeChanger={false}
        current={managerList.page}
        onChange={changepage}
      />
    );
  };

  const Memberlist = () => {
    const { Column } = Table;
    const handleclick = (code)=> {
          console.log(code)
          managerDispatch.showdetail({code});
          // managerDispatch.changevisibal(true);
          // console.log(managerList.thevisibal)  
    }
    return (
      <Table
        dataSource={managerList.list}
        rowKey={(record) => record.id}
        style={{ height: "600px" }}
        size="small"
        locale={{ emptyText: "暂无数据" }}
        bordered
        pagination={{ position: ["none", "none"] }}
      >
        <Column title="申请编号" dataIndex="ApplicationNum" key="ApplicationNum" />
        <Column title="学号" dataIndex="StuCode" key="StuCode" />
        <Column title="护照姓名" dataIndex="PassportWholeName" key="PassportWholeName" />
        <Column title="中文姓名" dataIndex="ChineseName" key="ChineseName" />
        <Column title="专业" dataIndex="Specialty" key="Specialty" />
        {/* <Column title="联系方式" dataIndex="password" key="password" /> */}
        <Column
          title="操作"
          key="action"
          width='15vw'
          render={(text, record) => (
           
              <Button type='primary' key='1' style={{ backgroundColor: "white", color: "black", border: "1px" }}
                onClick={()=>handleclick(record.StuCode)}  >
                查看详情
              </Button>   
          )}
        />
      </Table>
    );
  };

  return (
    <div style={{width:"100%"}}>
      <Head></Head>
      <Memberlist></Memberlist>
      <Numbernav></Numbernav>
      {/* <JumpMessage></JumpMessage> */}
      <Drawerr></Drawerr>
    </div>
  );
};
// 映射state
const mapState = (state) => ({
  managerList: state.manager,
});

const mapDispatch = (dispatch) => ({
  managerDispatch: dispatch.manager,
});

const manager = connect(mapState, mapDispatch)(Manager);
export default manager;
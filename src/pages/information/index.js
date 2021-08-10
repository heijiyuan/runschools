
import { connect } from "react-redux";
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    message
  } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const information = (props) => {
  const { mode,subinfo } = props;

  let onFinish = (values) => {
    const { time,sys ,born_date} = values;
    console.log(time,moment(time).format('YYYY-MM-DD'),moment(born_date).format('YYYY-MM-DD'))
    let  info = {
      ...values,
      born_date:moment(born_date).format('YYYY-MM-DD'),
      begin_time:moment(time[0]).format('YYYY-MM-DD'),
      end_time:moment(time[1]).format('YYYY-MM-DD'),
      sys:sys.toString()
    }
    console.log(info);
    subinfo(info);
    // form.setFieldsValue({
    //   code: '',
    //   password:''
    // });
  };
  const dateFormat = 'YYYY-MM-DD';
  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo.errorFields[0].errors[0]);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form] = Form.useForm();

    return (
        <div style={{width:"100%",height:"1000px"}}>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 10 }}
        name="information"
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{marginBottom:"100px"}}
  
      >
        <Form.Item 
        name='passport_surname'
        label={ mode === "ch" ?"护照性":"หนังสือเดินทาง"}
        rules={ mode === "ch"?[
          {
            required: true,
            message: "请输入护照姓氏",
          },
          {
            pattern:  /^[^\u4e00-\u9fa5]+$/gi,
            message: "请输入正确的护照姓氏",
          }
        ]:[
          {
            required: true,
            message: 'กรุณาใส่นามสกุลพาสปอร์ต',
          },
          {
            pattern: /^[^\u4e00-\u9fa5]+$/gi,
            message: "กรุณาใส่ชื่อพาสปอร์ตที่ถูกต้อง",
          }
        ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='passport_name' label={ mode === "ch" ?"护照名":"ชื่อพาสปอร์ต"} rules={mode === "ch"?[
          {
            required: true,
            message: "请输入护照名字",
          },
          
        ]:[
          {
            required: true,
            message: 'กรุณาใส่ชื่อพาสปอร์ต',
          },
        ]}>
          <Input />
        </Form.Item>
        <Form.Item  name='chinese_name' label= { mode === "ch" ?"中文姓名":"ชื่อภาษาจีน"} rules={mode === "ch"?[
          {
            required: true,
            message: "请输入中文名字",
          },
          {
            pattern:  /^[\u4e00-\u9fa5]+/g,
            message: "请输入正确的中文名字",
          },
         
        ]:[
          {
            required: true,
            message: 'กรุณาใส่ชื่อภาษาจีน',
          },
          {
            pattern:  /^[\u4e00-\u9fa5]+$/g,
            message: "กรุณาใส่ชื่อภาษาจีนที่ถูกต้อง",
          }
          
        ]}>
          <Input />
        </Form.Item>
        <Form.Item  name='sex' label= { mode === "ch" ?"性别":"เพศ"}  rules={mode === "ch"?[
          {
            required: true,
            message: "请输入性别",
          },
          
        ]:[
          {
            required: true,
            message: 'กรุณาระบุเพศ',
          },
        ]} >
           <Radio.Group label="性别">
               <Radio value={"男"}>{ mode === "ch" ?"男" :"มนุษย์"}</Radio>
               <Radio value={"女"}>{ mode === "ch" ?"女" :"หญิงทำงานบ้าน"}</Radio>
           </Radio.Group>
        </Form.Item>
        <Form.Item  name='nationality' label= { mode === "ch" ?"国籍":"สัญชาติ"} rules={mode === "ch"?[
          {
            required: true,
            message: "请输入国籍",
          },
          
        ]:[
          {
            required: true,
            message: 'กรุณาระบุสัญชาติ',
          },
        ]} >
          <Select  >
            <Select.Option value="中国">中国</Select.Option>
            <Select.Option value="泰国">泰国</Select.Option>
            <Select.Option value="美国">美国</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item  name='passport_code' label= { mode === "ch" ?"护照号码":"หมายเลขพาสปอร์ต"}   rules={mode === "ch"?[
          {
            required: true,
            message: "请输入护照号码",
          },
          {
            pattern:  /^[A-Z]{2}[0-9]{7}$/ig,
            message: "请输入正确的护照号码",
          }
        ]:[
          {
            required: true,
            message: 'กรุณาใส่หมายเลขพาสปอร์ต',
          },
          {
            pattern:  /^[A-Z]{2}[0-9]{7}$/ig,
            message: "กรุณาใส่หมายเลขพาสปอร์ตที่ถูกต้อง",
          }
        ]}>
          <Input />
        </Form.Item>
        <Form.Item 
        name='application_num'
        label= { mode === "ch" ?"申请编号":"หมายเลขใบสมัคร"} 
        rules={mode === "ch"?[
          {
            required: true,
            message: "请输入申请编号",
          },
          {
            pattern:  /^[0-9]{11}$/g,
            message: "请输入正确的申请编号",
          }
        ]:[
          {
            required: true,
            message: 'กรุณาใส่หมายเลขใบสมัคร',
          },
          {
            pattern:  /^[0-9]{11}$/g,
            message: "กรุณาใส่หมายเลขใบสมัครที่ถูกต้อง",
          }
        ]}
        >
          <Input />
        </Form.Item>

        <Form.Item  name='born_place' label= { mode === "ch" ?"出生地":"บ้านเกิด"}   rules={mode === "ch"?[
          {
            required: true,
            message: "请输入出生地",
          },
        
        ]:[
          {
            required: true,
            message: 'โปรดระบุสถานที่เกิด',
          },
         
        ]}>
          <Input />
        </Form.Item>
        
        <Form.Item  name='born_date' label= { mode === "ch" ?"出生日期":"วันเกิด"}  rules={mode === "ch"?[
          {
            required: true,
            message: "请输入出生日期",
          },
          
        ]:[
          {
            required: true,
            message: 'โปรดระบุวันเกิด',
          },
        ]}>
          <DatePicker format={dateFormat}  />  
        </Form.Item>
        <Form.Item  name='marital_status' label={ mode === "ch" ?"婚姻状况" :"สถานภาพการสมรส"}  rules={mode === "ch"?[
          {
            required: true,
            message: "请输入婚姻状况",
          },
          
        ]:[
          {
            required: true,
            message: 'กรุณาระบุสถานภาพ',
          },
        ]}>
          <Select  >
            <Select.Option value="已婚">已婚</Select.Option>
            <Select.Option value="单身">单身</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item  name='student_type' label= { mode === "ch" ?"学生类别":"หมวดนักเรียน"} rules={mode === "ch"?[
          {
            required: true,
            message: "请输入学生类别",
          },
          
        ]:[
          {
            required: true,
            message: 'โปรดระบุประเภทนักเรียน',
          },
        ]}  >
          <Select  >
            <Select.Option value="本科生">本科生</Select.Option>
            <Select.Option value="研究生">研究生</Select.Option>
          </Select>
        </Form.Item>
       
        <Form.Item name='faculty' label= { mode === "ch" ?"院系":"คณะ"} rules={mode === "ch"?[
          {
            required: true,
            message: "请输入院系",
          },
          
        ]:[
          {
            required: true,
            message: 'โปรดระบุแผนก',
          },
        ]} >
          <Select  value="外国语学院">
            <Select.Option value="外国语学院">{ mode === "ch" ?"外国语学院":"โรงเรียนภาษาต่างประเทศ"}</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name='specialty' label={ mode === "ch" ? "学习专业" :"การเรียนรู้อย่างมืออาชีพ"} rules={mode === "ch"?[
          {
            required: true,
            message: "请输入学习专业",
          },
          
        ]:[
          {
            required: true,
            message: 'กรุณาเข้าเรียนเอก',
          },
        ]}>
          <Select  value="英语">
            <Select.Option value="英语">英语</Select.Option>
          </Select>
        </Form.Item >
        <Form.Item name='time' label={ mode === "ch" ?"起止日期" :"วันที่เริ่มต้นและสิ้นสุด"}  rules={mode === "ch"?[
          {
            required: true,
            message: "请输入起止日期",
          },
          
        ]:[
          {
            required: true,
            message: 'กรุณาระบุวันที่เริ่มต้นและสิ้นสุด',
          },
        ]}>
          <RangePicker
             // eslint-disable-next-line no-undef
            //  defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
             format={dateFormat}
          />
        </Form.Item>
        
        <Form.Item name='sys' label= { mode === "ch" ?"学制":"สถานศึกษา"}   rules={mode === "ch"?[
          {
            required: true,
            message: "请输入学制",
          },
          
        ]:[
          {
            required: true,
            message: 'โปรดระบุระบบการศึกษา',
          },
        ]}>
          <InputNumber    />
        </Form.Item>
         
        <Form.Item style={{textAlign:"center"}}>
            <Button  type="primary" htmlType="submit">{ mode === "ch" ?"保存提交":"บันทึกการส่ง"} </Button>
         </Form.Item>

      </Form>

    </div>
    )
}

const mapState = (state) => ({
  mode:state.login.mode,
})

const mapDispatch = (dispatch) =>({
  subinfo: dispatch.information.submitinfo
})

const Information = connect(mapState,mapDispatch)(information)

export default Information;
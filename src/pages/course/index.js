
import { useState } from 'react'
import './index.css'
/*
课程名称
课程编号
理论学时
使用教材
学年学期
授课教师：倪广妍
授课对象：  泰国英语专业双学位本科留学生班
教学班合班号：  A05211L1500030001 
开课单位：  国际学院  国际教育文化 系/部/中心
*/
const defaultData = [
  {
    key: 1,
    kcmc: 'ภาษาจีนกลาง',  //课程名称
    kcbh: 'l150030',     //课程编号
    llxs: '48',          //理论学时  
    syjc: 'เขียนโดยหยางเจียว หนังสือเล่มที่สามของหลักสูตรภาษาจีน สำนักพิมพ์มหาวิทยาลัยภาษาปักกิ่ง',//使用教材
    xnxq: 'ปีการศึกษา 2021-2022 ปีการศึกษา',//学年学期
    skls: 'ฉันกวางยอน',//授课老师
    skdx: 'หลักสูตรภาษาอังกฤษสำหรับนักศึกษาต่างชาติ',//授课对象
    jxbhbh: 'a05211l15000001',//教学班合班号
    xsxf: '48/3'//学时/学分
  },
  {
    key: 2,
    kcmc: 'ภาษาอังกฤษสำหรับนักศึกษาต่างชาติ',  //课程名称
    kcbh: 'L05008',     //课程编号
    llxs: '48',          //理论学时  
    syjc: 'ห้อง 2.shilly เทย์เลอร์อ่านเอง ตัวอย่างของการเขียนภาษาอังกฤษธุรกิจ การสอนภาษาต่างประเทศและการวิจัยสำนักพิมพ์ ปีที่ 2014',//使用教材
    xnxq: 'บน',//学年学期
    skls: 'ชิวอี้',//授课老师
    skdx: 'ภาษาอังกฤษสำหรับนักศึกษาต่างชาติ',//授课对象
    jxbhbh: 'a05211l0500080001',//教学班合班号
    xsxf: '48/3'//学时/学分
  },
  {
    key: 3,
    kcmc: 'การสื่อสารเทคโนโลยีสำหรับนักศึกษาต่างชาติ',  //课程名称
    kcbh: 'L05004',     //课程编号
    llxs: '32',          //理论学时  还有线上学时
    syjc: 'Markel, M. Technical Communication. Bedford/St. Martin’s, 2015.',//使用教材
    xnxq: 'บน',//学年学期
    skls: '王怡',//授课老师
    skdx: 'ภาษาอังกฤษสำหรับนักเรียนไทย',//授课对象
    jxbhbh: 'a05211l0500040001',//教学班合班号
    xsxf: '48/3'//学时/学分
  },
  {
    key: 4,
    kcmc: 'การอ่านภาษาจีน',  //课程名称
    kcbh: 'l1500027',     //课程编号
    llxs: '48',          //理论学时  
    syjc: 'หนังสือเล่มที่สามของหลักสูตรภาษาจีนในปักกิ่งสำนักพิมพ์มหาวิทยาลัยภาษาปักกิ่ง',//使用教材
    xnxq: 'เทอมแรกของปีการศึกษา',//学年学期
    skls: '范媛媛',//授课老师
    skdx: 'ภาษาอังกฤษสำหรับนักศึกษาต่างชาติ',//授课对象
    jxbhbh: 'a05211l1500007001',//教学班合班号
    xsxf: '48/3'//学时/学分
  },
  {
    key: 5,
    kcmc: 'ภาษาจีนเพื่อการฟังและการพูด',  //课程名称
    kcbh: 'l15003',     //课程编号
    llxs: '48',          //理论学时  
    syjc: 'จางจุนเป็นบรรณาธิการของหลักสูตรภาษาจีนฟังและพูดภาษาจีนศิลปศาสตร์มหาวิทยาลัยภาษาปักกิ่ง',//使用教材
    xnxq: 'เทอมแรกของปีการศึกษา',//学年学期
    skls: '石潇',//授课老师
    skdx: 'ภาษาอังกฤษสำหรับนักศึกษาต่างชาติ',//授课对象
    jxbhbh: 'a05211l15023001',//教学班合班号
    xsxf: '48/3'//学时/学分
  }
]

function Course() {
  let [list, setLists] = useState(defaultData)
  console.log("list", list);
  return (
    <div className='rootContainer'  >
      <h1 style={{ textAlign: 'center' }}>หลักสูตร</h1>
      {
        list.map((item) => {
          return (
            <div className='listContainer' key={item.key}>
              <img style={{ width: '200px' }} src='http://icknsd.cn/default.png' />
              <div >
                <h1 style={{marginLeft:'20px'}}>{item.kcmc}</h1>
                <div style={{textAlign:'center'}}>
                  <span style={{padding:'15px'}}>เทอม:{item.xnxq}</span>
                  <span style={{padding:'15px'}}>หมายเลขหลักสูตร:{item.kcbh}</span>
                  <span style={{padding:'15px'}}>สินเชื่อการศึกษา:{item.xsxf}</span>
                </div>
                <div style={{marginTop:'30px'}}>
                  <span style={{padding:'15px'}}>จำนวนชั้นเรียน:{item.jxbhbh}</span>
                  <span style={{padding:'15px'}}>ครูผู้สอน:{item.skls}</span>
                  <span style={{padding:'15px'}}>ทฤษฎีชั่วโมง:{item.llxs}</span>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Course;

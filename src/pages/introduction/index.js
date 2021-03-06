
import { connect } from "react-redux";
import { Collapse,Image  } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const introduction = (props) => {
      const {mode } = props
  
    const text1 = `
    重庆市人民大礼堂位于渝中区人民路173号，
    占地面积6.6万平方米，始建于1951年，由张家德主持设计，
    1954年4月竣工。整座建筑由大礼堂和东、南、北楼四大部分组成，
    圆形大厅四周环绕四层挑楼，可容纳3400余人。
    重庆市人民大礼堂是刘伯承、邓小平、贺龙等老一辈革命家主政西南时主持修建，
    是特殊历史时期的代表性作品，自建成起始终是重庆的文化符号和标志性建筑，
    也是举行大型集会和演出活动的中心。该建筑气势雄伟，金碧辉煌，
    是中国传统民族形式建筑与西方建筑的大跨度空间结构巧妙结合的杰作
  `;
  const Text1 = `
    ห้องโถงใหญ่ของผู้คนในฉงชิ่งตั้งอยู่บนถนน 173 ของผู้คนใน Yuzhong District,
    พื้นที่ครอบคลุมพื้นที่ 6.6.00 ตารางเมตรก่อตั้งขึ้นใน 1951 ปีโดยจางเจียเต๋อเป็นประธานในการออกแบบ,
    1954 เสร็จสิ้นในเดือนที่สี่ อาคารทั้งหมดประกอบด้วยสี่ส่วนของหอประชุมใหญ่และตะวันออกใต้และเหนือ,
    ห้องโถงกลมล้อมรอบด้วยสี่ชั้นเลือกชั้นสามารถรองรับมากกว่า 340 คน,
    ห้องโถงใหญ่ของผู้คนในฉงชิ่งเป็นประธานในการก่อสร้างของรุ่นเก่าของนักปฏิวัติเช่นหลิว bocheng เติ้งเสี่ยวผิงเขายาว,
    มันเป็นสัญลักษณ์ทางวัฒนธรรมและสัญลักษณ์ของฉงชิ่งตั้งแต่ก่อตั้งขึ้นในช่วงเวลาพิเศษของประวัติศาสตร์,
    นอกจากนี้ยังเป็นศูนย์กลางของการชุมนุมใหญ่และการแสดง อาคารที่งดงามและงดงาม,
    มันเป็นผลงานชิ้นเอกของการรวมกันที่ยอดเยี่ยมของสถาปัตยกรรมแบบดั้งเดิมของจีนและโครงสร้างเชิงพื้นที่ช่วงยาวของสถาปัตยกรรมตะวันตก.
  `;
  
   const text2 = ` 抗战胜利纪功碑暨人民解放纪念碑矗立于渝中区邹容路、民族路与民权路交会的街中心。
   碑为八方柱体，坐南向北，高27.5米，占地面积642平方米，钢筋混凝土结构，分碑台、碑座、碑身及瞭望台。
   其前身为抗战“精神堡垒”，1950年被改名为解放碑，由当时西南军政委员会主席刘伯承题写碑名。
   抗战胜利纪功碑暨人民解放纪念碑是全中国境内唯一的一座中国民族抗日战争胜利的纪念碑，
   是抗战胜利和重庆解放的历史见证。`
   const Text2 = ` อนุสาวรีย์แห่งชัยชนะในสงครามต่อต้านญี่ปุ่นและอนุสาวรีย์ปลดปล่อยประชาชนยืนอยู่ในศูนย์กลางของ Zou หรงถนนและถนนแห่งชาติและสิทธิของพลเมือง。
   อนุสาวรีย์สำหรับแปดคอลัมน์นั่งเหนือใต้สูง 27.5 เมตรครอบคลุมพื้นที่ 642 ตารางเมตรโครงสร้างคอนกรีตเสริมเหล็กแบ่งเป็นแพลตฟอร์มอนุสาวรีย์แท็บเล็ตร่างกายและหอสังเกตการณ์。
   บรรพบุรุษของมันคือป้อมปราการทางจิตวิญญาณของสงครามต่อต้านญี่ปุ่นและถูกเปลี่ยนชื่อเป็นอนุสาวรีย์แห่งการปลดปล่อยให้เป็นอิสระ。
   อนุสาวรีย์แห่งชัยชนะในสงครามต่อต้านญี่ปุ่นและอนุสาวรีย์ปลดปล่อยประชาชนเป็นเพียงอนุสาวรีย์ชัยชนะในสงครามต่อต้านญี่ปุ่นในประเทศจีน，
   มันเป็นพยานทางประวัติศาสตร์ของชัยชนะในสงครามต่อต้านญี่ปุ่นและการปลดปล่อยของฉงชิ่ง。`
   const text3 =` 洪崖洞民俗风貌区地处重庆市核心商圈解放碑和朝天门地区的连接点，长江、嘉陵江两江交汇的滨江地带，
   是国家AAAA级旅游景区。该景区既展示了以青砖、石瓦、石板路为特征的巴渝古典民居，又引入特色餐饮、
   巴渝民间工艺品、特色旅游商品及精品古玩等业态，融汇当下所有时尚元素。在这里，观古色古香吊脚群楼、
   逛山城风情老街、赏传统巴渝文化、烫麻辣鲜香山城火锅、
   看两江江水激情汇流......真正打造出颠覆重庆人传统生活习惯的纯生活休闲娱乐新空间。`
   const Text3 =` แขวนถ้ำประเพณีพื้นบ้านคุณสมบัติพื้นที่ตั้งอยู่ที่จุดเชื่อมต่อระหว่างอนุสาวรีย์ปลดปล่อยค่าหลักของฉงชิ่งและ chaotianmen ภูมิภาค
   เป็นระดับ AAA การท่องเที่ยวแห่งชาติจุดชมวิว จุดชมวิวนี้ไม่เพียงแต่แสดงให้เห็นถึงลักษณะของอิฐสีเขียวกระเบื้องหินกระดานชนวนถนนบายูคลาสสิกที่อยู่อาศัยแต่ยังแนะนำอาหารพิเศษ,
   บายูงานฝีมือพื้นบ้านสินค้าท่องเที่ยวที่มีคุณสมบัติพิเศษและสินค้าที่มีคุณภาพสูงเช่นวัตถุโบราณเชื่อมต่อองค์ประกอบแฟชั่นทั้งหมด ที่นี่คุณสามารถดูโบราณแขวนเท้ากลุ่มอาคาร、
   เพลิดเพลินกับวัฒนธรรมดั้งเดิมของบายูและหม้อไฟในเมืองเซียงซานร้อน,
   เห็นแม่น้ำสองแม่น้ำผสานกับความรักที่แท้จริงเพื่อสร้างพื้นที่ใหม่สำหรับการพักผ่อนและความบันเทิงบริสุทธิ์ที่จะโค่นล้มฉงชิ่งคนดั้งเดิม.`
   const text4 = `重庆美术馆位于渝中区临江路1号，是在原重庆画院（重庆国画院）基础上组建，系公益性文化事业机构。
   承担美术作品的陈列布展、征集收藏工作，指导美术作品的创作、推广，开展美术学术理论研究、对外交流工作，开展美术培训等服务。
   于2013年10月建成开馆并免费对外开放。该馆建筑面积8200平方米，拥有四个展厅，展线约1000米。
   内设党政办公室、展览部、典藏部、研究部、创作部、公共教育推广部、安保部等部门。`
   const Text4 = `ฉงชิ่งพิพิธภัณฑ์ศิลปะตั้งอยู่บนถนน Linjiang ใน Yuzhong District และถูกสร้างขึ้นบนพื้นฐานของสถาบันจิตรกรรมจีนแบบดั้งเดิม.
   รับผิดชอบในการจัดนิทรรศการคอลเลกชันและคอลเลกชันของงานศิลปะคู่มือการสร้างและการส่งเสริมงานศิลปะดำเนินการวิจัยเชิงทฤษฎีของศิลปะและการแลกเปลี่ยนทางวิชาการและการฝึกอบรมศิลปะ。
   เปิดพิพิธภัณฑ์ในเดือน 2013 และเปิดให้ประชาชนฟรี พื้นที่ก่อสร้างของพิพิธภัณฑ์ 8200 ตารางเมตรกับสี่ห้องนิทรรศการบรรทัดประมาณ 1000 เมตร.
   มันมีสำนักงานพรรคและรัฐบาลกระทรวงนิทรรศการและคอลเลกชันแผนกวิจัยสร้างสรรค์และส่งเสริมการศึกษาและการรักษาความปลอดภัย。`
    return (
        <div style = {{width:"80%",}} >
           <Collapse defaultActiveKey={['1']} onChange={callback}>
                  <Panel header={ mode === "ch" ? "重庆市人民大礼堂" : "ห้องโถงใหญ่ของผู้คนในฉงชิ่ง" } key="1">
                  <div   style = {{display:"flex", flexDirection:'row'}}>   
                  <Image
                        style = {{flex:'1'}}
                        width={400}
                        src="http://pic.heiheiyun.top/hall.jpeg"
                   />
                        <p  style = {{flex:'1', width:"400px"}} >{ mode === "ch" ? text1 : Text1  }</p>
                  </div>
                  </Panel>
                  <Panel header={ mode === "ch" ? "抗战胜利纪功碑暨人民解放纪念碑" : "อนุสาวรีย์แห่งชัยชนะในสงครามต่อต้านญี่ปุ่นและอนุสาวรีย์ปลดปล่อยประชาชน" } key="2">
                  <div   style = {{display:"flex", flexDirection:'row'}}>   
                  <Image
                        style = {{flex:'1'}}
                        width={400}
                        src="http://pic.heiheiyun.top/remember.jpeg"
                   />
                        <p  style = {{flex:'1', width:"400px"}} >{ mode === "ch" ? text2 : Text2  }</p>
                  </div>
                   
                  </Panel>
                  <Panel header={ mode === "ch" ? "洪崖洞名宿风貌区" : "พื้นที่หน้าผาที่มีชื่อเสียง" } key="3">
                  <div   style = {{display:"flex", flexDirection:'row'}}>   
                  <Image
                        style = {{flex:'1'}}
                        width={400}
                        src="http://pic.heiheiyun.top/dong.jpeg"
                   />
                        <p  style = {{flex:'1', width:"400px"}} >{ mode === "ch" ? text3 : Text3  }</p>
                  </div>
                  </Panel>                
                  <Panel header={ mode === "ch" ? "重庆美术馆" : "พิพิธภัณฑ์ศิลปะ" } key="4">
                  <div   style = {{display:"flex", flexDirection:'row'}}>   
                  <Image
                        style = {{flex:'1'}}
                        width={400}
                        src="http://pic.heiheiyun.top/art.jpeg"
                   />
                        <p  style = {{flex:'1', width:"400px"}} >{ mode === "ch" ? text4 : Text4  }</p>
                  </div>
                  </Panel>
           </Collapse>,
        </div>
    )
}

const mapState = (state) => ({
      mode:state.login.mode,

})

const mapDispatch = (dispatch) =>({
})

const Introduction = connect(mapState,mapDispatch)(introduction)

export default Introduction;
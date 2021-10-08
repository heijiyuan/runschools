
import ReactEcharts from 'echarts-for-react';
import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import { Button,Tooltip } from 'antd';
import './index.css'

const start = (props) => {
  const { picdataDispatch, picdata } = props

  const Zinechart = () => {
    const   option = {
      title: {
        text: '年龄分布',
        textStyle: {
          color:'white'
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: [' 18岁及以下', '19岁', '20岁', '21岁', '22岁及以上']
      },
      series: [
        {
          name: '2011',
          type: 'bar',
          data: [22,20,24,24,13]
        }
      ]
    };
      return (
          
        <ReactEcharts
          option={option}
          lazyUpdate={true}
          style={{width:'30vw'}} 
          className='react_for_echarts' />
       
      );
    }


  const Linechart = () => {
  const   option = {
    title: {
      text: '性别比例',
      textStyle: {
        color:'black'
      },
    },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 53, name: '男' },
            { value: 47, name: '女' },
          
          ]
        }
      ]
    };
    return (
        
      <ReactEcharts
        option={option}
        lazyUpdate={true}
        style={{width:'30vw'}} 
        className='react_for_echarts' />
     
    );
  }
  const Rowchart = () => {
    const option = {
      title: {
        text: '国家分布',
        left: 'center',
        textStyle: {
          color:'black'
        },
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '找回率',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 17, name: '泰国' },
            { value: 30, name: '美国'},
            { value: 15, name: '加拿大'  },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    return (
        
      <ReactEcharts
        option={option}
        lazyUpdate={true}
        style = {{width:'30vw'}}
        className='react_for_echarts' />
     
    );
  }
  const Xowchart = () => {
    const option = {
      title: {
        text: '年级分布',
        subtext: 'Fake Data',
        left: 'center',
        textStyle: {
          color:'white'
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        left: 'center',
        top: 'bottom',
        data: [
          'rose1',
          'rose2',
          'rose3',
          'rose4',
          'rose5',
          'rose6',
          'rose7',
          'rose8'
        ]
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'Area Mode',
          type: 'pie',
          radius: [20, 140],
          center: ['75%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 5
          },
          data: [
            { value:45, name: '2021级' },
            { value: 0, name: '2020级' },
            { value: 35, name: '2019级' },
            { value: 25, name: '2018级' },
           
          ]
        }
      ]
    };
    return (
        
      <ReactEcharts
        option={option}
        lazyUpdate={true}
        className='react_for_echarts' />
     
    );
  }
  return (
    <div key={props.location.key} className='content'>
       <div style={{position:'absolute',width:'500px',top:'0px' ,left:'-250px'}}>
         <Rowchart></Rowchart>
       </div>
       <div style={{position:'absolute',width:'500px',top:'300px' ,left:'-250px'}}>
         <Linechart></Linechart>
       </div>
       
      
       <div style={{position:'absolute',width:'550px',top:'0px' ,left:'450px'}}>
         <Xowchart></Xowchart>
       </div>
       <div style={{position:'absolute',width:'500px',top:'300px' ,left:'600px'}}>
         <Zinechart ></Zinechart >
       </div>
    </div>
  )
};
 

const mapState = (state) => ({
})

const mapDispatch = (dispatch) =>({
})

const Start= connect(mapState,mapDispatch)(withRouter(start));

export default Start;
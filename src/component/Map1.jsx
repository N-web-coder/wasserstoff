import React from 'react'
import '../styles/map1.css';
import Footer from './Footer';
import Navsection from './Navsection';
import BarChartIcon from '@mui/icons-material/BarChart';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Map1 = () => {
  return (
    <div className='map1'>
      <Navsection/>
      <div className='l'>
        <h2>ALL user </h2>
          <div> <span>details</span> <ChevronRightIcon/></div>
        <div className="icons">
            <div> <OfflineBoltIcon id='earn' />
            </div>
            <h4>Total earning</h4>
          <div> <div><LocalMallIcon/></div> </div> 
          <h4> Sales</h4>
          <div><BarChartIcon/></div>
          <h4> Purchase</h4>
        </div>
      </div>
      <div className='r'>
      </div>
      <Footer/>
    </div>
  )
}

export default Map1
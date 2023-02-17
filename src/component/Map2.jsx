import React from 'react'
import '../styles/map2.css'
import Footer from './Footer'
import Navsection from './Navsection'
import BarChartIcon from '@mui/icons-material/BarChart';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Map2 = () => {
  return (
    <div className='map2'>
      <Navsection/>
      <div className='l'>
        <h2>ALL user <h6>Details <ChevronRightIcon/> </h6> </h2>
        <div className="icons">
            <div> <OfflineBoltIcon id='earn' />
            </div>
            <h4>Total earning</h4>
          <div><LocalMallIcon/></div> 
          <h4> Sales</h4>
          <div><BarChartIcon/></div>
          <h4> Purchase</h4>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Map2
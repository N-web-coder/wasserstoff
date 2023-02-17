import React from 'react'
import '../styles/bubblechart.css'
import Footer from './Footer'
import Navsection from './Navsection'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import CommitOutlinedIcon from '@mui/icons-material/CommitOutlined';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { faker } from 'react-fakers'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
// export const data = {
//   datasets: [
//     {
//       label: 'Red dataset',
//       data: Array.from({ length: 50 }, () => ({
//         y: faker.datatype.number({ min: -100, max: 100 }),
//         r: faker.datatype.number({ min: 5, max: 20 }),
//         x: faker.datatype.number({ min: -100, max: 100 }),
//       })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
    // {
    //   label: 'Blue dataset',
    //   data: Array.from({ length: 50 }, () => ({
    //     x: faker.datatype.number({ min: -100, max: 100 }),
    //     y: faker.datatype.number({ min: -100, max: 100 }),
    //     r: faker.datatype.number({ min: 5, max: 20 }),
    //   })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
//   ],
// };
const BubbleChart = () => {
  return (
    <div className='bubblechart' >
      <Navsection/>
      <div className="left">
        <h4>Design faster</h4>
        <div className="graph"></div>
        <div className="total-earning"></div>
        <div className="list"></div>
      </div>
      <div className="right">
        {/* <Bubble options={options} data={data}/> */}
        <div className="icon">
          <div id='zoom' > <AddIcon/> <RemoveIcon/> </div>
          <div className="dot"><AdjustOutlinedIcon/></div>
          <div className="git"> <CommitOutlinedIcon/> </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default BubbleChart
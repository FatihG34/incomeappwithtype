import React from 'react'
import Cards from '../components/Cards';
import incomeDetail from '../scss/incomeDetail.module.scss';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

const IncomeDetail = () => {
  const navigate = useNavigate()
  return (
    <div className={incomeDetail['main']}>
      <section>
        <button type='button' onClick={()=>navigate(-1)} className={incomeDetail['button']}><KeyboardBackspaceIcon/> Back to Main Page</button>
      </section>
      <Cards/>
    </div>
  )
}

export default IncomeDetail

import React, { FC } from 'react';
import Cards from '../components/Cards';
import incomeDetail from '../scss/incomeDetail.module.scss';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectIncome, setData } from '../features/income/incomeSlice';


const IncomeDetail:FC = () => {
  const tree = useAppSelector(selectIncome);
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

// console.log(tree)
// console.log(treeNodes)

  return (
    <div className={incomeDetail['main']}>
      <section>
        <button type='button' onClick={()=>navigate(-1)} className={incomeDetail['button']}><KeyboardBackspaceIcon/> Back to Main Page</button>
      </section>
      <section style={{textAlign:'center'}}>
        <button 
        type="button" 
        style={{border:'none', backgroundColor:'darkviolet',color:'white', borderRadius:'1rem', padding:'.5rem', cursor:'pointer'}} 
        onClick={()=>dispatch(setData({
        id: Number(new Date()),
        name: 'New Main Node ',
        incomeValue: 0,
        children:[],
        totalValue:0
      }))}
        > Add New Node</button>
      </section>
      <ul style={{ display: 'flex', justifyItems:'center' ,gap:"4rem", width:'80%', margin:'1rem auto' }}>
      {
        tree.map((item)=>(
          <Cards node={item} key={item.id}/>
        ))
      }
      </ul>
    </div>
  )
}

export default IncomeDetail

import React from 'react'
import Cards from '../components/Cards';
import incomeDetail from '../scss/incomeDetail.module.scss';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectIncome } from '../features/income/incomeSlice';


const IncomeDetail = () => {
  const tree = useAppSelector(selectIncome);
  const treeNodes = tree[0]
  const navigate = useNavigate();

console.log(tree)
console.log(treeNodes)

  return (
    <div className={incomeDetail['main']}>
      <section>
        <button type='button' onClick={()=>navigate(-1)} className={incomeDetail['button']}><KeyboardBackspaceIcon/> Back to Main Page</button>
      </section>
      <Cards node={treeNodes} />
    </div>
  )
}

export default IncomeDetail

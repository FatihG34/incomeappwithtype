import { useState } from 'react';
// import card from '../scss/card.module.scss';
import { useAppDispatch } from '../app/hooks';
import { addItem, deleteItem, setTotalValue } from '../features/income/incomeSlice';
import { FaMinus,FaPlus } from 'react-icons/fa';
import {GiCheckMark} from 'react-icons/gi'

interface TreeNodeProps {
  node: {
      id: number;
      name:string;
      incomeValue:number;
      children?: Array<TreeNodeProps['node']>;
      totalValue?:number;
  };
}
const Cards: React.FC<TreeNodeProps> = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [incomeValues, setIncomeValues] = useState<number>(0)
  const dispatch = useAppDispatch()
  // const tree = useAppSelector(selectIncome);

  const handleAddNodeItemClick = (id:number)=>{
    dispatch(addItem(id))
  }

  const handleDeleteClick = () => {
    dispatch(deleteItem(node.id));
  };

  const handleSubmit=(e:any, id:number, value:number)=>{
        e.preventDefault();
        const sendedValue ={id, value}
        dispatch(setTotalValue(sendedValue))
        setIncomeValues(Number(''))
  }


const renderChildren = () => {
    if (node.children && node.children.length > 0) {
      return (
        <ul>
          {node.children.map((child) => (
            <Cards key={child.id} node={child} />
          ))}
        </ul>
      );
    }
    return null;
  };
// const newNodes = {
//   id: Number(new Date()),
//   name:'New Member',
//   incomeValue:0,
//   children: [],
//   totalValue:0,
// }


  return (
     <li style={{margin:'.5rem .5rem'}}>
      <div style={{padding:'1rem', border:'1px solid aqua', borderRadius:'1rem'}}>
        <span onClick={() => setIsExpanded(!isExpanded)} style={{cursor:'pointer'}}>
          {isExpanded ? <FaMinus /> : <FaPlus />}
        </span>
        <h3>
        {node.name}
        </h3>
        <form style={{margin:'.3rem 0'}}  onSubmit={(e)=>handleSubmit(e,node.id,incomeValues)}>Income Value :
        <input type="text" name='incomeValue' value={incomeValues} style={{border:'none', fontSize:'1rem', marginLeft:'4px', width:'50%'}} onChange={(e)=>setIncomeValues(Number(e.target.value))} />
        
         <button type="submit" style={{border:'none', backgroundColor:'greenyellow', padding:'.1rem', marginLeft:'2px', cursor:'pointer'}}><GiCheckMark/></button>
         </form>

        <p>Current Income Value :  {node.incomeValue}</p>
        <p>Total Value : {node.totalValue}</p>
        <div style={{display:'flex', gap:'1rem', marginTop:'.3rem'}}>
          <button style={{border:'none', backgroundColor:'violet', borderRadius:'1rem', padding:'.5rem', cursor:'pointer'}} type='button' onClick={()=>handleAddNodeItemClick(node.id)}>Add</button>
          <button style={{border:'none', backgroundColor:'orange', borderRadius:'1rem', padding:'.5rem', cursor:'pointer'}} type='button' onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
    {isExpanded && renderChildren()}
    </li>
  );
}

export default Cards

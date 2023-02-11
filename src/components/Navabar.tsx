import navbar from '../scss/navbar.module.scss';
import Icon from '../assets/income.png';
import { useNavigate } from 'react-router-dom';

const Navabar = () => {
  const navigate = useNavigate()
  return (
    <nav className={navbar.navbar}>
      <div className={navbar['navbar_brand']} onClick={()=>navigate("/")}>
        <picture>
          <img className={navbar['navbar_brand-img']} src={Icon} alt="income image"/>
        </picture>
        <h1>IncomeApp</h1>
        </div>
      
    </nav>
  )
}

export default Navabar

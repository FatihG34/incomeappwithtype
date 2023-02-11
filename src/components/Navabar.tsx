import navbar from '../scss/navbar.module.scss';
import Icon from '../assets/income.png';

const Navabar = () => {
  return (
    <nav className={navbar.navbar}>
      <div className={navbar['navbar_brand']}>
        <picture>
          <img className={navbar['navbar_brand-img']} src={Icon} alt="income image"/>
        </picture>
        <h1>IncomeApp</h1>
        </div>
      
    </nav>
  )
}

export default Navabar

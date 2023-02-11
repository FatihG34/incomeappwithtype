import Cards from '../components/Cards'
import home from '../scss/home.module.scss';


const Home = () => {
  return (
    <div className={home['home-mainarea']}>
      <Cards/>
    </div>
  )
}

export default Home

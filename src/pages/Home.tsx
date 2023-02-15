import AreaCard from '../components/AreaCard';
// import Cards from '../components/Cards'
// import MainTable from '../components/MainTable';
import home from '../scss/home.module.scss';


const Home = () => {
  return (
    <div className={home['home-mainarea']}>
      {/* <MainTable/> */}
     <div style={{padding:'2rem', textAlign:'center'}}>Here is your wlecome page for storage income tree</div>
     
      <section className={home['section-area_card']}>
      <AreaCard/>
      </section>
    </div>
  )
}

export default Home

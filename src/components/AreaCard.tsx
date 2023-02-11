import React from 'react';
import { useNavigate } from 'react-router-dom';
import Flag from 'react-world-flags';
import areaCard from '../scss/areaCard.module.scss';

const AreaCard = () => {
    const navigate = useNavigate()
  return (
    <div className={areaCard['card']} onClick={()=>navigate("/income")}>
        <picture>
            <Flag code={'tr'} height="30" />
        </picture>
        <h6>
        Your Income Area
        </h6>
    </div>
  )
}

export default AreaCard
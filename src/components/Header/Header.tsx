import React from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer} >
       <div className={styles.logo} >
        <div> Rulo</div>
         <div>
          code <span >.</span>
         </div>
       </div>
      </div>

      <div className={styles.burgerMenu} >

      <RiMenu3Fill size='1.5em'/>
      </div>
    </div>
  );
};

export default Header;

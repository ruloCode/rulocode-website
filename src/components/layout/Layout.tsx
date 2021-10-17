import React from 'react';
import Image from 'next/image';
import styles from './layout.module.scss';
import RuloProfile from '../../assets/images/ruloPerfil.png';
import Master from '../../assets/images/master.png';

export const Layout = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.logo}>
        <div> Rulo</div>
        <div>
          code <span>.</span>
        </div>
      </div>
      <div className={styles.language}>ENG</div>
      <div className={styles.logoContainer}>
        <Image
          src={RuloProfile}
          alt="TecSalud uno de nuestros patrocinadores"
          objectFit="contain"
        />
      </div>
      <div className={styles.masterContainer}>
        <Image
          src={Master}
          alt="TecSalud uno de nuestros patrocinadores"
          objectFit="contain"
        />
      </div>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Layout;

'use client';
import ProfileImage from '@/components/ProfileImage'
import { useTypewriter } from '@/hooks/useTypewriter'; 
import styles from './Home.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
export default function Home() {
  const displayText = useTypewriter('Frontend Developer!');
  return (
    <main className={styles.home}>
      <section className={styles.profile}>
        <ProfileImage />
      </section>
      <section className={styles.info}>
        <h2>SALSABEEL ALZAQA</h2>
        {displayText !== '' ? (
          <h4>{displayText}</h4>
        ) : (
          <h4>&nbsp;</h4>
        )}
        <p>Front End Developer located in Palestine, eager to collaborate on web projects and open to remote opportunities worldwide.</p>
        <div className={styles.media}>
          <Link href={'https://www.facebook.com/salsabeel.ibrahem/'}><FontAwesomeIcon icon={faFacebookF} /></Link>
          <Link href={'https://www.instagram.com/salsabeel.alzaqa/'}><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link href={'linkedin.com/in/salsabeel-alzaqa/'}><FontAwesomeIcon icon={faLinkedinIn} /></Link>
        </div>
      </section>
    </main>
  );
}
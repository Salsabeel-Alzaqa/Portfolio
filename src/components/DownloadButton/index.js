'use client';
import Link from 'next/link';
import styles from './DownloadButton.module.css';

const DownloadButton = () => {
    return (
        <Link className={styles.download} href='https://enhancv-pdfs.s3.amazonaws.com/50e52024527f70bfb589c35b61519a09-pdf'>
            Download CV
        </Link>
    );
};

export default DownloadButton;
'use client';
import Link from 'next/link';
import styles from './DownloadButton.module.css';

const DownloadButton = () => {
    return (
        <Link className={styles.download} href='https://enhancv-pdfs.s3.amazonaws.com/a76491b2e5b0b8cb8950bd09e22cf730-pdf'>
            Download CV
        </Link>
    );
};

export default DownloadButton;
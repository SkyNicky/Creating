import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Center, FormControl, FormLabel, Input, Textarea, HStack, Button } from '@chakra-ui/react';
import video from '../assets/Img/Design sem nome.mp4';
import styles from './Home.module.css';

export function Home(props) {
  return (
    <div className={styles.container}>
    <video className={styles.video} autoPlay loop controls >
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
</video>

      <div className={styles.content}>
        <h1 className={styles.title}>{props.start}</h1>
        <div className={styles.messageContainer}>
          <h2 className={styles.message}>{props.message}    <button className={styles.button}>
            Baixar
          </button></h2>
       
        </div>
      </div>
    </div>
  );
}

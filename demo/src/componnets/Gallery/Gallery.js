import React, { useState } from 'react';
import styles from "../Gallery/Gallery.module.scss";
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Gallery() {
  const [category, setCategory] = useState('all');
  const [fade, setFade] = useState(false);

  const allItems = [...Classes, ...Instruments];

  const filteredItems = category === 'all' ? allItems : (category === 'Instruments' ? Instruments : Classes);

  const handleCategoryChange = (selectedCategory) => {
    setFade(true);
    setTimeout(() => {
      setCategory(selectedCategory);
      setFade(false);
    }, 300); // Adjust the duration of the fade animation as needed
  };

  return (
    <div>
      <section className={styles.admission_bnnr}>
        <img src='assets/bannr/banner.jpg' />
      </section>
      <section className={styles.gallery}>
        <div className='container'>
          <div className={styles.glry_nav}>
            <ul >
              <li><Link onClick={() => handleCategoryChange('all')} className={category === 'all' ? styles.active : ''}>All categories</Link></li>
              <li><Link onClick={() => handleCategoryChange('Instruments')} className={category === 'Instruments' ? styles.active : ''}>Instruments</Link></li>
              <li><Link onClick={() => handleCategoryChange('Classes')} className={category === 'Classes' ? styles.active : ''}>Classes</Link></li>
              {/* Add more categories as needed */}
            </ul>
          </div>

          <div className={styles.img_body}>
            <ImageList cols={4} className={fade ? styles.fadeOut : styles.fadeIn}>
              {filteredItems.map((item) => (
                <ImageListItem key={item.img}>
                  <div className={styles.img}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </section>
    </div>
  )
}

const Classes = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  // Add more food items
];

const Instruments = [
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  // Add more items for other categories
];
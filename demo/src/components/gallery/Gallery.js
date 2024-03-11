import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img3 from "../../assests/inst (1).jpeg";
import img4 from "../../assests/inst (2).jpeg";
import img5 from "../../assests/inst (3).jpeg";
import img6 from "../../assests/img (1).webp";
import img7 from "../../assests/img (5).webp";
import img8 from "../../assests/img (3).webp";

export default function Gallery() {
  const [category, setCategory] = useState("all");
  const [fade, setFade] = useState(false);

  const Classes = [
    {
      img: img6,
      title: "",
    },
    {
      img: img7,
      title: "",
    },
    {
      img: img8,
      title: "",
    },
  ];

  const Instruments = [
    {
      img: img3,
      title: "",
    },
    {
      img: img4,
      title: "",
    },
    {
      img: img5,
      title: "",
    },
  ];

  const allItems = [...Classes, ...Instruments];

  const filteredItems =
    category === "all"
      ? allItems
      : category === "Instruments"
      ? Instruments
      : Classes;

  const handleCategoryChange = (selectedCategory) => {
    setFade(true);
    setTimeout(() => {
      setCategory(selectedCategory);
      setFade(false);
    }, 300);
  };

  return (
    <div>
      <section className={styles.admission_bnnr}>
        <img src="assets/bannr/banner_1.webp" alt="banner" />
      </section>
      <section className={styles.gallery}>
        <div className="container">
          <div className={styles.glry_nav}>
            <ul>
              <li>
                <Link
                  onClick={() => handleCategoryChange("all")}
                  className={category === "all" ? styles.active : ""}
                >
                  All categories
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleCategoryChange("Instruments")}
                  className={category === "Instruments" ? styles.active : ""}
                >
                  Instruments
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleCategoryChange("Classes")}
                  className={category === "Classes" ? styles.active : ""}
                >
                  Classes
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.img_body}>
            <ImageList
              cols={4}
              className={fade ? styles.fadeOut : styles.fadeIn}
            >
              {filteredItems.map((item, index) => (
                <ImageListItem key={index}>
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
  );
}

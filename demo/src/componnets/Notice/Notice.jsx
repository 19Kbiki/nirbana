import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Notice/Notice.module.scss";
import pdfFile from "../../Noticepdf/admission_03_01_2024.pdf"; // Import your PDF file
import { admissionNotices } from "../../config/config";

export default function Notice() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [admissionCount, setAdmissionCount] = useState(0);
  const [classCount, setClassCount] = useState(0);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const classNotices = [];

  const allNotices = [...admissionNotices, ...classNotices];

  useEffect(() => {
    setAdmissionCount(admissionNotices.length);
    setClassCount(classNotices.length);
  }, [admissionNotices, classNotices]);

  const filteredNotices = allNotices.filter(
    (notice) =>
      (category === "all" || notice.category === category) &&
      (notice.head.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.date.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const formatDate = (dateString) => {
    const dateParts = dateString.split('/');
    const date = new Date(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-4);
    return `${month} ${day} ${year}`;
  };

  const openPDF = () => {
    // Open the PDF when a notice is clicked
    window.open(pdfFile, "_blank");
  };

  return (
    <div>
      <section className={styles.notice}>
        <div className="container">
          <div className={styles.notice_box}>
            <div className={styles.heading}>
              <h2>Notice</h2>
              <div>
              </div>
            </div>
            <div className={styles.box_wrp}>
              <div className={styles.notice_list}>
                <div className={styles.notice_liner}>
                {filteredNotices.map((ele, index) => (
                <div key={index} className={styles.notice_item}>
                <div className={styles.head} onClick={() => openPDF()}>
                <p><i className="fa-solid fa-calendar-days"></i>{formatDate(ele.date)}</p>
                <h1>{ele.head}</h1>
                <p>{ele.pera}</p>
                </div>
                </div>
                ))}
                </div>
              </div>

              <div className={styles.sidenavbar}>
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <ul>
                  <li>
                    <Link onClick={() => handleCategoryChange("all")}>
                      <i className="fa-solid fa-play"></i> All categories ({allNotices.length})
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleCategoryChange("admission")}>
                      <i className="fa-solid fa-play"></i> Admission notice ({admissionCount})
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleCategoryChange("class")}>
                      <i className="fa-solid fa-play"></i> Class notice ({classCount})
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
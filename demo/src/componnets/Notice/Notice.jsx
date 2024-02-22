import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Notice/Notice.module.scss";

export default function Notice() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [admissionCount, setAdmissionCount] = useState(0);
  const [classCount, setClassCount] = useState(0);

  const admissionNotices = [
    { head: "", date: "", category: "" },
    { head: " ", date: "", category: "" },
    { head: " ", date: "", category: "" },
    { head: " ", date: "", category: "" },
    // Add more admission notices as needed
  ];

  const classNotices = [
    { head: "", date: "", category: "" },
    { head: "", date: "", category: "" },
    // Add more class notices as needed
  ];

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
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const options = { month: 'short', day: 'numeric', year: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
// };

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
                {/* <div className={styles.notice_liner}>
                {filteredNotices.map((ele, index) => (
                  <div key={index} className={styles.notice_item}>
                    <div className={styles.head}>
                      <p><i class="fa-solid fa-calendar-days"></i>{ele.date}</p>
                      <h1>{ele.head}</h1>
                    </div>
                  </div>
                ))}

                </div> */}
              </div>

              {/* <div className={styles.sidenavbar}>
              <input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
                <ul>
                  <li>
                    <Link onClick={() => handleCategoryChange("all")}>
                    <i class="fa-solid fa-play"></i> All categories ({allNotices.length})
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleCategoryChange("admission")}>
                    <i class="fa-solid fa-play"></i> Admission notice ({admissionCount})
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleCategoryChange("class")}>
                    <i class="fa-solid fa-play"></i> Class notice ({classCount})
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

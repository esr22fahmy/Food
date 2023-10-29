import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./items.css";
const Items = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="container-fluid">
      <Link to="/cart" className="   iconCart">
        <i className="fa-solid fa-cart-shopping text-dark"></i>
      </Link>
      <div className="row">
        <div className="col-lg-5 p-0">
          <div className="container-fluid">
            <div className={`right-section  ${openMenu && "open"}`}>
              <div className="image-container">
                <img
                  src="/images/home.jpg"
                  className="img-fluid rounded-5"
                  alt=""
                />
                <div className="logo-box">
                  <img
                    src="/images/logo.jpg"
                    className="rounded-4 img-fluid"
                    alt=""
                  />
                  <div className="rating-box d-flex justify-content-between align-items-center">
                    <p className="rating-text px-2 rounded-5">تقييم</p>
                    <div className="rating-val center-content d-inline-block m-auto rounded-4 my-4 ">
                      0.5<i class="bi bi-star-fill me-2"></i>
                    </div>
                  </div>
                  <p className="shift-start rounded-4 text-center">
                    متاح 24 ساعة
                  </p>
                </div>
              </div>
              <div className="catogries py-2 px-4 mt-5">
                <div className="search-container w-75 m-auto">
                  <input type="search" className="form-control" />
                  <i className="bi bi-search icon"></i>
                  <span
                    className="menu-btn-open"
                    onClick={() => {
                      setOpenMenu(!openMenu);
                    }}
                  >
                    <i class="bi bi-grid-fill icon"></i>
                  </span>
                </div>
                <h6>العناصر</h6>
                <div className="row">
                  <div className="col-6 p-1">
                    <div className="card text-bg-dark">
                      <Link to="/item/1">
                        <img
                          src="/images/img3.jpeg"
                          className="card-img"
                          alt="..."
                        />
                        <div className="card-img-overlay">
                          <p className="card-text h-100 d-flex align-items-end text-white">
                            اضغط هنا لمشاهدة بروستد ريزو ايت اب (عائلي)
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/*  */}
                  <div className="col-6 p-1">
                    <div className="card text-bg-dark">
                      <Link to="/item/1">
                        <img
                          src="/images/img3.jpeg"
                          className="card-img"
                          alt="..."
                        />
                        <div className="card-img-overlay">
                          <p className="card-text h-100 d-flex align-items-end text-white">
                            اضغط هنا لمشاهدة بروستد ريزو ايت اب (عائلي)
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 p-0">
          <div className={`left-section ${openMenu && "open"}`}>
            <div className="left-section-content text-center">
              <button
                className="btn close-btn"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <i class="bi bi-x-lg mx-5"></i>
              </button>
              <img
                src="/images/logo.jpg"
                className="rounded-4 logo d-block m-auto"
                alt=""
              />
              <div className="rating center-content d-inline-block m-auto rounded-4 my-4 ">
                0.5<i class="bi bi-star-fill me-2"></i>
              </div>
              <ul className="nav-list">
                <li> اتصل بنا</li>
                {/* <li>الموقع </li>
                <li> مصدر اللحوم</li>
                <li>تقييم </li>
                <li className="active">انشاء حساب </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;

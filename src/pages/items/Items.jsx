import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./items.css";
import { CartContext } from "../CartContext/CartContext";

const Items = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product, image) => {
    setCart([...cart, { product, image }]);
  };


  useEffect(() => {
    fetch("https://menu.testm.online/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        if (data.length > 0) {
          setSelectedCategoryId(data[0].id);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="container-fluid ">
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

              <div className="catogries py-2 px-4 pt-5">
              <Link to="/cart" className="  iconCartOrder  mt-5 ">
  <i className="fa-solid fa-cart-shopping text-white"></i>
  <div className="countCart text-white text-center">{cart.length}</div>
</Link>
                <div className="search-container mt-5 w-50 m-auto">
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
                <h6 className=" my-5 text-white">العناصر</h6>
                <div className="scrollProduct">
                  <div className="row">
                    {categories.map((category) => (
                      <div key={category.id} className="category-item col-md-6">
                        <div className="card  text-bg-dark">
                          <Link to="/item/1">
                            <img
                              src={`https://menu.testm.online/storage/${category.image}`}
                              className="card-img"
                              alt="..."
                            />
                            <div className="card-img-overlay">
                              <p className="card-text h-100 d-flex align-items-end text-white">
                                {category.name}
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
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

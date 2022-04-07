import React, { useEffect, useState } from "react";
import "./Blog.css";
import Banner1 from "../Banner1/Banner1";
import Button from '../ButtonGroup/Button/Button';
import aboutimg from '../../img/blog/aboutimg.jpg';
import { Link } from 'react-router-dom';
const Blog = (props) => {
  const [items, setItems] = useState([]);
  const [isReadMore, setIsReadMore] = useState(true);
  const [isReadmorepara, setIsReadmorepara] = useState(true);
  useEffect(() => {
    fetch(`https://b2bnetworkservices.online/blogs/public`)
      .then((res) => res.json())
      .then((data) => setItems(data.blogs));
  }, []);
  //scroll to top
  const scrollgoToplink = () => {
    window.scrollTo({ top: 0 });
  };
  const [count, setCount] = useState(3);
  const inc = () => {
    setCount(count + 3);
    console.log(setCount);
  }
  const toggleHeadingreadmore = () => {
    setIsReadmorepara(!isReadmorepara);
  }
  return (
    <>
      <div className="nav-contaniner" />
      <Banner1 />
      {/* =======================section about blog==================== */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="about-img" data-aos="fade-right" data-aos-delay="100">
                <img src={aboutimg} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="about-content" data-aos="fade-left" data-aos-delay="100">
                <h2>About Blog</h2>
                <h3>What is a B2B marketing strategy and why does blogging help?</h3>
                  <p>In simple terms, a B2B marketing solution is one of the fundamental ingredients required for success in today’s global marketplace. After all, if you want to get somewhere successfully,
                    you need a plan, a roadmap, to take you from point A, to point B.Unlike your standard Google maps solution,
                    B2B marketing strategies aren’t a one-size-fits-all solution. Marketing tactics and plans that are effective for one company, don’t necessarily pack the same punch for the next.
                    Just like anything else for your brand, your B2B marketing strategy needs to be tailored to the unique goals of your organisation,
                    as well as the needs of the companies that make up your customer base. With that in mind, here are a few of the elements you’ll need to keep in mind for your B2B marketing method:
                  </p>   
                <ul>
                  <li><i className="bi bi-check-circle"></i>Convert traffic into leads</li>
                  <li><i className="bi bi-check-circle"></i>Competitive analysis</li>
                  <li><i className="bi bi-check-circle"></i>Digital strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card-blog">
        <div className="container card-blog-cont ">
          <div className="row">
            {
              items.slice(0, count).map((item, i) => {
                return (

                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 b-card" data-aos="zoom-in-down">
                    <div className="d-lg-flex card-body card-border" id="cardblog" key={item._id}>
                      <div className="card-blog-div border-0 me-lg-4 mb-lg-0 mb-4" key={i} data-id={item._id}>
                        <div className="backgroundEffect"></div>
                        <div className="cardid"></div>
                        <div className="pic"><img src={item.coverImg} alt="" />
                          <div className="date">
                            <span className="day">{item.publishDate}</span>
                          </div>
                        </div>
                        <div className="content">
                          <p className="h-1 mt-4 cardhead">
                            {isReadmorepara ? item.title.slice(0, 25) : item.title}
                            <span onClick={toggleHeadingreadmore} className="read-or-hide">
                              {isReadmorepara ? "..." : " "}
                            </span>
                          </p>
                          <p className="text-muted mt-3 card-para">
                            {isReadMore ? item.shortDes.slice(0, 100) : item.shortDes}
                            <span className="read-or-hide">
                              {isReadMore ? "..." : " "}
                            </span>
                          </p>
                          <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                            <div className="btn-readmore-blog">
                              <Link to={`/blogpage/` + item._id}>
                                <Button classNames="btnclear22" text="Read More" link={`/blogpage/` + item._id} fun={() => scrollgoToplink()}>
                                </Button>
                              </Link>
                            </div>
                            <div className="d-flex align-items-center justify-content-center foot blog-admin-msg">
                              <p className="admin justify-content-center align-items-center">{item.author}</p>&nbsp;&nbsp;
                              <p className="ps-3 icon text-muted"><span className="fa fa-pencil pe-1"></span>{ }</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <div className="col-12">
              <div className="d-flex justify-content-center" style={{ marginTop: '10px', marginBottom: '10px' }}>
                <Button classNames="allbtn-primary glow-on-hover text-light" fun={() => { inc(); }} text='Load More'></Button>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;

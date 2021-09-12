import React from "react";
import BlogComment from "./BlogComment";
import BlogForm from "./BlogForm";
export default function BlogSingle() {
  return (
    <div className="container">
      <div className="news-content row m-auto pb-5">
        <div className="col-md-8 news-post">
          <div className="single-blog">
            <div className="news-title">
              <h2>The Secret Ingredient</h2>
              <div>
                <span>12 march 2021</span>
                <span>-</span>
                <span>Interviews</span>
                <span>Receipts</span>
              </div>
            </div>
            <div className="news-body mt-4" className="news-image"
                style={{ backgroundImage: `url(./img/1.jpg)` }}
                alt="news-img">
            </div>
            <div className="news-tag d-flex align-items-center my-4">
              <h3 className="my-0 me-3">TAGS: </h3>
              <span>12 march 2021</span>
              <span>Interviews</span>
              <span>Receipts</span>
            </div>
            <p>
              Vestibulum orci felis, ullamcorper non condimentum non, ultrices
              ac nunc. Mauris non ligula suscipit, vulputate mi accumsan,
              dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem
              non porta. Praesent eu massa vel diam laoreet elementum ac sed
              felis. Donec suscipit ultricies risus sed mollis. Donec volutpat
              porta risus posuere imperdiet. Sed viverra dolor sed dolor
              placerat ornare ut . Integer iaculis tellus nulla, quis imperdiet
              magna venenatis vitae..
            </p>
            <div className="news-footer">
              <button className="readmore-btn">Read more</button>
              <div className="news-counter">
                <i className="fa fa-eye news-icon">
                  <span>678</span>
                </i>
                <i className="fa fa-comment news-icon">
                  <span>10</span>
                </i>
              </div>
            </div>
          </div>
          <BlogComment />
          <BlogForm />
        </div>
        <div className="col-md-4 news-sidebar text-white">
          <div className="mt-4 mt-md-0">
            <h2 className="text-center">About Us</h2>
            <div className="news-sidebar-body">
              <img className="sidebar-body-img" src="./img/19.jpg"></img>
              <h4 className="my-3">Restabook restaurant</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto.
              </p>
            </div>
          </div>
          <div className="news-recent-post">
            <h2 className="text-center mb-3 mt-4">Recent Posts</h2>
            <div className="recent-post">
              <div className="recent-post-content d-flex mb-2 ">
                <img className="recent-post-img" src="./img/4.jpg"></img>
                <div className="ms-3">
                  <a href="#">Snowy Mountains Trip</a>
                  <p>3 May 2016</p>
                </div>
              </div>
              <div className="recent-post-content d-flex mb-2 ">
                <img className="recent-post-img" src="./img/5.jpg"></img>
                <div className="ms-3">
                  <a href="#">Snowy Mountains Trip</a>
                  <p>3 May 2016</p>
                </div>
              </div>
              <div className="recent-post-content d-flex mb-2 ">
                <img className="recent-post-img" src="./img/6.jpg"></img>
                <div className="ms-3">
                  <a href="#">Snowy Mountains Trip</a>
                  <p>3 May 2016</p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-recent-tags mt-4">
            <h2 className="text-center mb-3">Recent Tags</h2>
            <div className="recent-tags">
              <span>Life Style</span>
              <span>Travel</span>
              <span>Trip</span>
              <span>Outdoor</span>
              <span>Camping</span>
              <span>Photos</span>
              <span>Advance</span>
            </div>
          </div>
          <div className="news-recent-categories mt-4">
            <h2 className="text-center mb-3">Categories</h2>
            <div className="recent-categories">
              <ul className="categories-item p-0 m-0">
                <li>
                  <a href="#">Seafood</a>
                  <span>12</span>
                </li>
                <li>
                  <a href="#">Receipts</a>
                  <span>21</span>
                </li>
                <li>
                  <a href="#">Dishes</a>
                  <span>34</span>
                </li>
                <li>
                  <a href="#">Travel</a>
                  <span>8</span>
                </li>
                <li>
                  <a href="#">Photos</a>
                  <span>9</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

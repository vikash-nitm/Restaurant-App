import React from "react"
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// ❌ galat
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// ✅ sahi (HeroIcons v2)
// import { HiOutlineArrowNarrowRight } from "react-icons/hi2";

const NotFound=()=>{
    return(
        <>
      <section className="notFound">
        <div className="container">
            <img src="/notFound.svg" alt="notFound"/>
            <h1>LOOKS Like YOU ARE LOST</h1>
          <p>We can not seem to find you the page you are looking for</p>
          <Link to={"/"}>
            Back to Home{" "}
            <span>
                <HiOutlineArrowNarrowRight/>
            </span>
          </Link>
        </div>
      </section>
        </>
    )
}
export default NotFound
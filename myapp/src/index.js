import ReactDOM from "react-dom/client"
import "./style.css"
import sale from "./asset/image/sale.png"
import course01 from "./asset/image/Course 01.jpg"
import course02 from "./asset/image/course 02.jpg"
import course03 from "./asset/image/course 03.jpg"
import course04 from "./asset/image/course 04.jpg"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__s1">
                <h1 className="navbar__s1__title">Udemy</h1>
            </div>
            <div className="navbar__s2">
                <i className="fa-solid fa-magnifying-glass" style={{ color: "black" }}></i>
                <input placeholder="Search for anything here. Tech, Business, Art...."></input>
            </div>
            <div className="navbar__s3">
                <p>Courses</p>
                <p>My Learning</p>
                <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__popup">
                        <p>You did not purchase anything yet</p>
                    </div>
                </div>
                <i className="fa-solid fa-cart-shopping" style={{ color: "black" }}></i>
                <i className="fa-solid fa-bell" style={{ color: "black" }}></i>
                <i className="fa-solid fa-user" style={{ color: "black" }}></i>
            </div>
            <div className="navbar__s4">
                <i className="fa-solid fa-bars" style={{ color: "black" }}></i>
            </div>
        </div>
    )
}

function Search() {
    return (
        <div className="categories">
            <p>Development</p>
            <p>Business</p>
            <p>IT & Software</p>
            <p>Personal Development</p>
            <p>Design</p>
            <p>Marketing</p>
        </div>
    )
}

function Image() {
    return (
        <div className="sale__image">
            <img src={sale} alt="sale Image"></img>
            <div className="sale__image__offer">
                <h2>Udemy Flash Sale 24 hours to save</h2>
                <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn</p>
            </div>
        </div>
    )
}

function Recommended() {
    return (
        <div className="recommended">
            <h1 className="recommended__title">Recommended for you</h1>
            <p>Pick the best fit</p>
            <div className="recommended__container">
                <div className="course-card">
                    <img src={course01} alt="Course 01"></img>
                    <h3>2023 Python Data Visualization Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
                <div className="course-card">
                    <img src={course02} alt="Course 02"></img>
                    <h3>Web Development Bootcamp 2023</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
                <div className="course-card">
                    <img src={course03} alt="Course 03"></img>
                    <h3>Master UI & UX Design</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
                <div className="course-card">
                    <img src={course04} alt="Course 04"></img>
                    <h3>Basic to Advanced Programming with EMC</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
            </div>
            <div className="topics">
                <h1 className="topics__title">Topics recommended for you</h1>
                <div className="topics__container">
                    <p>Website</p>
                    <p>Javascript</p>
                    <p>Mongo DB</p>
                    <p>CSS</p>
                    <p>AWS</p>
                    <p>Azure</p>
                    <p>Docker</p>
                    <p>Github</p>
                    <p>React JS</p>
                </div>
            </div>
        </div>
    )
}

function Popular() {
    return (
        <div className="popular">
            <h1 className="popular__title">Most Popular</h1>
            <p className="popular__subtitle">Pick the best fit</p>
            <div className="popular__container">
                <div className="course-card">
                    <img src={course01} alt="Course 01"></img>
                    <h3>2023 Python Data Visualization Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
                <div className="course-card">
                    <img src={course02} alt="Course 02"></img>
                    <h3>Web Development Bootcamp 2023</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
                <div className="course-card">
                    <img src={course03} alt="Course 03"></img>
                    <h3>Master UI & UX Design</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
                <div className="course-card">
                    <img src={course04} alt="Course 04"></img>
                    <h3>Basic to Advanced Programming with EMC</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
                <div className="course-card">
                    <img src={course03} alt="Course 03"></img>
                    <h3>Master UI & UX Design</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
                <div className="course-card">
                    <img src={course04} alt="Course 04"></img>
                    <h3>Basic to Advanced Programming with EMC</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
                <div className="course-card">
                    <img src={course01} alt="Course 01"></img>
                    <h3>2023 Python Data Visualization Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
                <div className="course-card">
                    <img src={course02} alt="Course 02"></img>
                    <h3>Web Development Bootcamp 2023</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <div className="footer__one">
                <div className="footer__one__s1">
                    <p>Udemy Business</p>
                    <p>Tech on Udemy</p>
                    <p>Get the App</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
                <div className="footer__one__s2">
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Help and Support</p>
                    <p>Affiliate</p>
                    <p>Investors</p>
                </div>
            </div>
            <div className="footer__two">
                <h1>Udemy</h1>
                <p>&copy; Udemy, Inc</p>
            </div>
        </div>
    )
}

root.render(
    <div>
        <Navbar />
        <Search />
        <Image />
        <Recommended />
        <Popular />
        <Footer />
    </div>
)

import "../App.css"; // Importing CSS file for styling
import Basket from "./basket"; // Importing Basket component
// Function component for user buttons
function ButtonAccount() {

    return (

        <div className="btnUser">
            {/* Button for login */}
            <button className="Userbtn">
                <img src="/images/Framelogin.svg" alt="login" srcSet="" />
            </button>
            {/* Button for signup */}
            <button className="Userbtn">
                <img src="/images/Framesignup.svg" alt="signup" srcSet="" />
            </button>
        </div>
    );
}

// Function component for main title
function MainTitle() {
    return (
        <div className="mainTitle">
            <img src="/images/controller.png" alt="" srcSet="" />
            <span>PIXEL PLACE</span>
        </div>
    );
}

// Header component
function Header({ basketProducts, setBasketProducts }) {
    return (
        <div className="headerStyle">
            {/* User account buttons */}
            <ButtonAccount />
            {/* Main title */}
            <MainTitle />
            {/* Basket component */}
            <Basket basketProducts={basketProducts} setBasketProducts={setBasketProducts} />
        </div>
    );
}

export default Header; // Exporting the Header component

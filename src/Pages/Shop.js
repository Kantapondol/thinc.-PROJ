import Header from "../Components/header_if_sign.js";
import "./Shop.css"


const money = 0;

function Shop(){
    function onClick() {
        window.location.href = "index.html";
    }
    //imgSrc ยังไม่มีรูปมาใส่
    return (
        <div>
            <Header />
            <div className="group"><button className="money">${money}</button></div>
            <div className="to-justify">
                <Item imgSrc/> <Item imgSrc/> <Item imgSrc/>
            </div>
            <div className="price-group">
                <Price/> <Price/> <Price/>
            </div>
            <div className="to-justify">
                <Item imgSrc/> <Item imgSrc/> <Item imgSrc/>
            </div>
            <div className="price-group">
                <Price/> <Price/> <Price/>
            </div>
        </div>
    );
}

function Item({imgSrc}){
    return (
        <div className="item-frame">
            <img className="item-image" src={imgSrc} alt="image of item"/>
            <h2 className="item-name-desc">Item's name</h2>
            <p3 className="item-name-desc">Item's description</p3>
        </div>
    );
}

function Price(){
    return(
        <div className="price">
            <h3>$500</h3>
        </div>
    );
}

export default Shop;
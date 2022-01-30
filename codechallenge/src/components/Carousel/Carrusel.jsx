import PropsType from "prop-types"
import "./carrusel.css";
import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import {Carousel} from "react-bootstrap";
import {Context} from "../../store/appContext";



function Carrusel () {

  const {store, actions} = useContext(Context);

useEffect(() => {
 actions.getUserOne();
 actions.getUserTwo();
 actions.getUserThree();
}, []);



	return (

<Carousel className= "Carousel">
  <Carousel.Item interval={1000}>

    <img
      className="d-flex w-50 mx-auto"
      src="https://t4.ftcdn.net/jpg/02/23/50/73/360_F_223507349_F5RFU3kL6eMt5LijOaMbWLeHUTv165CB.jpg"
      alt="First slide"
    />
    <Link to="/Users">
    <Carousel.Caption>
    <h3>{store.userOne.name}</h3>
      <button className="btn btn-info" id="button">
            <p id="info">More info</p>
      </button>
    </Carousel.Caption>
    </Link>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-flex w-50 mx-auto"
      src="https://t4.ftcdn.net/jpg/02/23/50/73/360_F_223507349_F5RFU3kL6eMt5LijOaMbWLeHUTv165CB.jpg"
      alt="Second slide"
    />
    <Link to="/Users">
    <Carousel.Caption>
    <h3>{store.userTwo.name}</h3>
      <button className="btn btn-info" id="button">
            <p  id="info">More info</p>
      </button>
    </Carousel.Caption>
    </Link>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-flex w-50 mx-auto"
      src="https://t4.ftcdn.net/jpg/02/23/50/73/360_F_223507349_F5RFU3kL6eMt5LijOaMbWLeHUTv165CB.jpg"
      alt="Third slide"
    />
    <Link to="/Users">
    <Carousel.Caption>
    <h3>{store.userThree.name}</h3>
      <button className="btn btn-info" id="button">
            <p id="info">More info</p>
      </button>
    </Carousel.Caption>
    </Link>
  </Carousel.Item>
</Carousel>
	)}

 Carrusel.propsType = {
     children: PropsType.array
}
 export default Carrusel;
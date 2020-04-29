import React from 'react';
import { connect } from 'react-redux';
import { buyBurger } from '../redux';

function BurgerContainer(props) {
  return (
    <div>
      <h2>Number of burgers - {props.numOfBurgers}</h2>
      <button onClick={props.buyBurger}>Buy Burger</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfBurgers: state.burger.numOfBurgers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyBurger: () => dispatch(buyBurger()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerContainer);

import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";
function ItemContainer(props) {
  return (
    <div>
      <h2>item - {props.item}</h2>
      <button onClick={props.buyItem}>buy Item</button>
    </div>
  );
}
/**ownProps are the props that react
 * component have itselfe  so we
 *  use them in mapStateTpProps as scond props*/

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;
  return { item: itemState };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

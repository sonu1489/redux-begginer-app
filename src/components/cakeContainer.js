import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/index";

function CakeContainer(props) {
  // console.log(props);
  return (
    <div>
      <h2>number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

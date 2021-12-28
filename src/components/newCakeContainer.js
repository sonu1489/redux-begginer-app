import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/index";

function NewCakeContainer(props) {
  const [number, setNumber] = React.useState(1);
  // console.log(props);
  return (
    <div>
      <h2>number of cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);

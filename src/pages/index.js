import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { List, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Data from "../datas/costumers";

function MainPage(props) {
  const { setCustomerData } = props;
  const [state, setState] = useState([]);

  useEffect(() => {
    setCustomerData(Data.main);
  }, [setCustomerData]);

  useEffect(() => {
    setState(props.data.dataCustomer);
  }, [props]);
  return (
    <Container fluid>
      <List>
        {state.map((data, index) => {
          return (
            <List.Header key={index}>
              <Link
                to={{
                  pathname: "/detail",
                  state: {
                    data: data
                  }
                }}
              >
                {data.email}
              </Link>
            </List.Header>
          );
        })}
      </List>
    </Container>
  );
}
const mapStateToProps = state => ({
  data: state
});

const mapDispatchToProps = dispatch => ({
  setCustomerData: data => dispatch({ type: "GET_DATA", data })
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

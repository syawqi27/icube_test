import React from "react";
import { connect } from "react-redux";
import { List, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

function MainPage(state) {
  return (
    <Container fluid>
      <List>
        {state.data.dataCustomer.map((data, index) => {
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

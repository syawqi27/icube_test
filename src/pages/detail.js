import React from "react";
import { List, Container, Divider } from "semantic-ui-react";

function DetailPage(state) {
  console.log(state)
  return (
    <Container fluid>
      <br />
      <Divider />
      {state.history.location.state.data && (
        <List>
          <List.Item>Email : {state.history.location.state.data.email}</List.Item>
          <List.Item>
            Name Lengkap: {state.history.location.state.data.nama_lengkap}
          </List.Item>
          <List.Item>
            Nomor Telpon : {state.history.location.state.data.nomor_telpon}
          </List.Item>
          <List.Item>Alamat : {state.history.location.state.data.alamat}</List.Item>
        </List>
      )}
    </Container>
  );
}

export default DetailPage

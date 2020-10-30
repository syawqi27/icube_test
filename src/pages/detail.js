import React from "react";
import { List, Container, Divider, Header } from "semantic-ui-react";

function DetailPage(state) {
  console.log(state)
  return (
    <Container>
      <br />
      <Header>{state.history.location.state.data.nama_lengkap}</Header>
      <Divider />
      {state.history.location.state.data && (
        <List divided relaxed size="massive">
          <List.Item>
            Email : {state.history.location.state.data.email}
          </List.Item>
          <List.Item>
            Name Lengkap: {state.history.location.state.data.nama_lengkap}
          </List.Item>
          <List.Item>
            Nomor Telpon : {state.history.location.state.data.nomor_telpon}
          </List.Item>
          <List.Item>
            Alamat : {state.history.location.state.data.alamat}
          </List.Item>
        </List>
      )}
    </Container>
  );
}

export default DetailPage

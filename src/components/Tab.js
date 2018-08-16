import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './New';
import Tab2 from './Login';
import Master from "./layout/Master";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    header: null
 };
  render() {
    return (
      <Master>
      <Container>
        <Tabs>
          <Tab heading="New">
            <Tab1 />
          </Tab>
          <Tab heading="Article">
            <Tab2 />
          </Tab>
          
        </Tabs>
        
      </Container>
      </Master>
    );
  }
}
export default Home;
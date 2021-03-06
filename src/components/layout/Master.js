import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Badge
} from "native-base";
class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>{this.props.children}</Content>
        <Footer>
        <FooterTab>
            <Button  badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon  name="home" />
              onPress={() => this.props.navigation.navigate('Home')}
            </Button>
            <Button active vertical>
              <Icon active name="document" />
              onPress={() => this.props.navigation.navigate('Tab')}
              {/* <Text>ข่าวสาร</Text> */}
            </Button>
            <Button vertical>
              <Icon name="alarm" />
              {/* <Text>ประวัติ</Text> */}
            </Button>
            <Button  badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon name="notifications" />
              {/* <Text>แจ้งเตือน</Text> */}
            </Button>
            <Button vertical>
              <Icon name="settings" />
              {/* <Text>ตั้งค่า</Text> */}
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Master;

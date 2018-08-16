import React,{Component} from 'react';
import Axios from 'axios';
import config from "../config";

import {
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Text,
  Button
} from "native-base";

class New extends Component{
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

    
  async componentDidMount() {
    let messages = await Axios.get(config.server.api + "/user");
    this.setState({ messages: messages.data });
  }
    
      render() {
        return (
            <List>
              {this.state.messages.map(item => (
                <ListItem thumbnail key={item._id}>
                  <Left>
                    <Thumbnail
                      square
                      source={{ uri: "https://via.placeholder.com/64x64" }}
                    />
                  </Left>
                  <Body>
                    <Text>{item.userId} </Text>
                    <Text note numberOfLines={1}>
                      {item.name}
                    </Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text>View</Text>
                    </Button>
                  </Right>
                </ListItem>
              ))}
            </List>
        );
      }
    }


export default New;
import React,{Component} from 'react';
import {Text,View} from 'react-native';
import axios from 'axios';

class New extends Component{

    state = {user: []};

    componentWillMount(){
        const url = 'http://localhost/longanapp/api/user';
        axios.get(url)
        .then(response => this.setState({coins:response.data}));
    }

    render(){
        console.log(response);
        return(
            <View>
                <Text>User LIST</Text>
            </View>
        );
    }
}


// export to render
export default New;
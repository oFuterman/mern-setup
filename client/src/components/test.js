import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {

    componentDidMount(){
        this.getUserData();
        this.getArticle();
        this.sendData();
    }

    async sendData(){
        const dataToSend={
            something: 'Here is something',
            anotherThing: 'Here is another thing',
            stuff: 'BLAH BLAH BLAH BLAH BLAH'
        }

        const response = await axios.post('/api/send-data', dataToSend);

        console.log('Send Data:',response);
    }

    async getArticle(){
        const response = await axios.get('/api/get-article');

        console.log('article data:', response);
    }

    async getUserData(){
        const response = await axios.get('/api/user-data');

        console.log('User Data Response Is: ', response);
    }

    render(){
        return <h1>Test Component</h1>
    }
}

export default Test;
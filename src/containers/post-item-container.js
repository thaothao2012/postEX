import React, {Component} from 'react';
import {PostItem} from '../components/post-item';
import ApiCall from '../util/apiCall';

 class PostItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    };
  }
  componentDidMount = () => {
    ApiCall('posts', 'GET', null ).then(res => {
        this.setState({
            data: res.data
        });
    })
  }

  render() {
      const {data} = this.state;
    return <PostItem data={data}/>
  }
}

export default PostItemContainer;

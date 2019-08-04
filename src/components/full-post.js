import React, {Component} from 'react';
import ApiCall from '../util/apiCall';

class FullPost extends Component{
    constructor(props){
        super(props);
        this.state={
            post: {}
        };
    }
    componentDidMount = () => {
        const id = this.props.match.params.id; 
        ApiCall(`posts/${id}`, 'GET', null).then(res => {
           this.setState({
            post: res.data
           });
        });
    }
  render(){
      const {post} = this.state;
    return(
     <div className="full-post">
        <h4>{post.title}</h4>
        <p>{post.description}</p>
     </div>
    );
  }
}
export default FullPost;
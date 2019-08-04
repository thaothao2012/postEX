import React, {Component} from 'react';
import { Route, Link} from 'react-router-dom';
import ApiCall from '../util/apiCall';
import FullPost from './full-post';
import PostItem from './post-item';
// const data = [
//   {
//     id: 1,
//     flug: "Minh",
//     name: 'customizable flow of articles organized from thousands of publishers and magazines',
//     des: 'customizable flow of articles organized from thousands of publishers and magazines'
//   },
//   {
//     id: 2,
//     flug: "Minh",
//     name: 'customizable flow of articles organized from thousands of publishers and magazines',
//     des: 'customizable flow of articles organized from thousands of publishers and magazines'
//   },
//   {
//     id: 3,
//     flug: "Minh",
//     name: 'customizable flow of articles organized from thousands of publishers and magazines',
//     des: 'customizable flow of articles organized from thousands of publishers and magazines'
//   },
//   {
//     id: 4,
//     flug: "Minh",
//     name: 'customizable flow of articles organized from thousands of publishers and magazines',
//     des: 'customizable flow of articles organized from thousands of publishers and magazines'
//   }
// ]

class Posts extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount = () => {
    ApiCall('posts', 'GET', null).then(res => {
      console.log('res',res);
      this.setState({
        data: res.data
      });
    });
  }
  render(){
    const {data} = this.state;
    const {match} = this.props;
    const url = match.url;
    const result = data && data.map((item, idx) => {
    return <div key={idx} style={{}}>
      <Link to={`${url}/${item.id}`}>
        <PostItem postItem={item}/>
      </Link>
    </div>
    });
    return(
      <div> 
        <div className="posts">
          {result}
        </div>
        <div className="full">
          <Route path={`${url}/:id`} component={({match}) => <FullPost match={match}/>}/>
        </div>
      </div>
    );
  }
}
export default Posts;
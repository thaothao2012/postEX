import React, { Component } from 'react';

class PostItem extends Component {
    render() {
        const { postItem } = this.props;
        const description = postItem && (postItem.description.length >= 50 ? postItem.description.substring(0, 50) + '...'
        :  postItem.description);
        return (
            <div className="post-item">
                <h4>{postItem.title}</h4>
                <p className="post-name">{postItem.name}<span>{postItem.date}</span></p>
                <p className="post-des">{description}</p>
            </div>
        );
    }
}
export default PostItem;
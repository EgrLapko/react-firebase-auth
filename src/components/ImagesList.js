import React, { Component } from 'react';
import axios from 'axios';
import ImageComp from './ImageComp';



export default class ImagesList extends Component {
    state = {
        images: [],
    };

    componentDidMount() {
        axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ID}&page=1&query=cake&per_page=15`).then(res => {
            console.log(res.data.results);
            this.setState({
                images: res.data.results
            })
        }); 
    }

    render() {
        return (
            <div className="images-list">
                {
                    this.state.images.map(image => (
                        <ImageComp key={image.id} desc={image.urls.regular} />
                    ))
                }
            </div>
        )
    }
}

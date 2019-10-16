import React, { Component } from 'react';
import axios from 'axios';
import ImageComp from './ImageComp';



export default class ImagesList extends Component {
    state = {
        images: [],
    };

    componentDidMount() {
        const apiKey = 'aa0eea0493a6428e612c5e4569f5e8008995c7d3753ee0d64a0e1e67a38a2d42'
        axios.get(`https://api.unsplash.com/search/photos?client_id=${apiKey}&page=1&query=cake&per_page=15`).then(res => {
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

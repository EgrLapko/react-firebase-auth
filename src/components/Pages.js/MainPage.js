import React from 'react';
import ImagesList from '../ImagesList';

export default function MainPage({currentUser}) {
    return (
        <div className="main-page">
            {
                currentUser ? 
                <ImagesList />
                :
                <h1 className="text-not-logged">Log in to browse our stuff</h1>
            }
        </div>
    )
}

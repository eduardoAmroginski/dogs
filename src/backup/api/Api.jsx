import React from 'react'
import PhotoGet from './endpoints/PhotoGet'
import PhotoPost from './endpoints/PhotoPost'
import TokenPost from './endpoints/TokenPost'
import UserPost from './endpoints/UserPost'

const Api = () => {
    return (
        <div>
           <h2>User POST</h2>
           <UserPost />
           <h2>Token POST</h2>
           <TokenPost />
           <h2>Photo POST</h2>
           <PhotoPost />
           <h2>Photo GET</h2>
           <PhotoGet />
        </div>
    )
}

export default Api

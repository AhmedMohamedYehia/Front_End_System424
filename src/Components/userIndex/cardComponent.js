import React, {Component} from "react"
import "./userIndex.css"
import axios from 'axios'
import { Link } from 'react-router-dom';

class CardComponent extends Component {

    constructor() {
        super()
        this.state = {
            playlists:[],

        }
    }
 //Good luck yaall   
// limit get six Playlists 
// request used here is get/playlist/top
// URL?_limit=6,-popularity
// to get 6  most popular descendingly  
// Remove Comments when integrating 
  componentDidMount() {
            axios.get("http://my-json-server.typicode.com/youmnakhaled/Fakedata/track?_limit=6 " )
            .then(res => {
                     this.setState({
                    playlists: res.data.map( playlist => ({
                        id:playlist.id,
                        title:playlist.name,
                        artist:playlist.owner[0].name,
                        imageUrl:playlist.images,
                        href:playlist.tracks.href
                    }))
                })
            }) 
        
       /*   componentDidMount() {
                const AuthStr=localStorage.getItem('token');
                axios.get("http://138.91.114.14/api/playlists/top",
                {
                    headers:{AuthStr},
                    query:{
                        limit:6,
                        sort:'-popularity&-createdAt'
                    }
                }
                 )
                .then(res => {
                  if(res.status===200)
                  { 
                         this.setState({
                            playlists: res.data.map( playlist => ({
                            id:playlist.id,
                            title:playlist.name,
                            artist:playlist.owner[0].name,
                            imageUrl:playlist.images,
                            href:playlist.tracks.href
                        }))
                    }) }          
                    else if (res.status===401)
                    {
                        localStorage.removeItem("loginType");
                        localStorage.removeItem("isLoggedIn");
                        localStorage.removeItem("token");
                        localStorage.removeItem("userId");   
                    }
                    else{
                        alert("Error.");
                    }
                }) */
              
    }

    render() {
        return (
            <div id="lower-section">
             <section>
                 <div className="container" id="low-sec-container">
                     <div className="row" id="row-lower">
                     <h2 className="h1-spotify" id="row-lower-font ">Looking for music?</h2>
                     <p className="lead" id="user-index-lead-1">Start listening to the best new releases.</p>
                        <Link to="/home">
                       <button id="launch-button">Launch Web Player</button>
                         </Link>
                     </div>

                     <div className="row" id="userindexrow3">
                     <div className="items-wrapper">

            {this.state.playlists.map(playlist => (
  
                                        <div className="item-wrapper" id={playlist.id}>
                                            <div className="index-img-background" id={playlist.id} >
                                                <img src={playlist.imageUrl} alt="Playlist cover pictutre here"></img>
                                                <div className="img-text-wrapper" id={playlist.id}>               
                                                    <div className="subtitle" id={playlist.id} >
                                                        <div className="playlist-info">
                                                            <div id="title"> {playlist.title}</div>
                                                            <div id="artist"> {playlist.artist}</div>
                                                            </div>
                                                            
                                                           {/* This should be a link Link here to {playlist.href
                                                            <link to="/">
                                                            <button id="button-outline">Play  Now</button> 
                                                            </link>    
                                                                     */}
                                                                     <a href="google.com">
                                                            <button id="button-outline">Play  Now</button></a> 
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>      ))}

                
                </div>
                 </div>
                 </div>
                </section>
              </div>
              )
    }
}

export default CardComponent



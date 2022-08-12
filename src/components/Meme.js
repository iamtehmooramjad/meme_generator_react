import React from "react";
import memesData from "../memesData";

export default function Meme(){
    const [allMemeImages,setAllMemeImages] = React.useState(memesData.data.memes)

    const [meme,setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })


    function getRandomMeme() {

        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        let url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
                ...prevMeme,
                randomImage : url
        }))
    }
    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text"/>
                <button className="form--button" onClick={getRandomMeme}>Get a new meme image  🖼</button>
            </div>
            <img src={meme.randomImage} alt="Meme" className="meme--image" />
        </main>
    )
}
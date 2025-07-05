// import URLSchema from "../models/urlmodel";
import URLmodel from '../models/urlmodel.js'
import { nanoid } from "nanoid";


function isValidUrl(url){
    try{
        new URL(url)
        return true;
    }
    catch(err){
        return false;
    }
}


export async function handlePost(req, res){
    if(!req.body || !req.body.fullUrl) return res.status(400).json({ error: "No URL passed" });
    let url = req.body.fullUrl;
    if(url == "" || !isValidUrl(url)) return res.status(400).json({ error: "Enter a valid URL" });
    const Urlpresent = await URLmodel.findOne({origUrl : url});
    if(Urlpresent)  return res.json({"id" : Urlpresent.shortUrl})

    //fullUrl is name of input field from which the data was submitted for more info look at route in index.js
    const createdShortUrl = nanoid(6)
    const data = await URLmodel.create({ origUrl : url, shortUrl : createdShortUrl })
    //new instance of the model is created with the origURL from user
    await data.save();

    return res.json({"id" : createdShortUrl})
}

export async function handleGet(req, res){
    const short = req.params.shortUrl 
    // if(!short) return res.status(400).json({error : "Enter a valid shortner"})
    const url = await URLmodel.findOne({shortUrl : short});
    if(!url) return res.status(400).json({error:"not a valid url"})
    res.redirect(url.origUrl);
}
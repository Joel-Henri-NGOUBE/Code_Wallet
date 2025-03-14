// const JSONdb = require("simple-json-db");
import JSONdb from "simple-json-db";
// const fs = require("original-fs")
const uuid = require("uuid");
// import uuid from "uuid"

import path from 'node:path'

// import { RENDERER_DIST } from "../main";
// const p = path.join(process.env.APP_ROOT, 'database.json')

// console.log(p)


// const db = new JSONdb('./electron/database/database.json');

// const path = require("node:path")



// const db = new JSONdb('./electron/database/database.json');
const db = new JSONdb(path.join(__dirname, "database.json"));
// const db = new JSONdb(path.join(__dirname, "database.json"));
// const RENDERER_DIST = require("RENDER")

// console.log(JSON.parse(JSON.stringify(db.JSON())))

export const dbInitialization = () => {
    if (!Object.keys(db.JSON()).length){
        db.JSON({
            fragments: [],
            tags: []
        })
    }
}



export const getTags = () => {
    return db.get("tags")
    // return Object.keys(db.JSON())
    // return JSON.stringify(db.JSON())
    // return __dirname
    // C:\Users\ebosq\OneDrive\Bureau\CW2\release\0.0.1\win-unpacked\resources\app.asar\dist-electron
    // db.set("fragments", {id: 1, title: "hey", code: "hoo", tagIds: ["1", "2"]})
    // return JSON.stringify(db.JSON())

    // Le problème c'était la base de données qui renvoyait à chaque fois undefined
    // Trouver une solution pour que les objets correspondant soient renvoyés

}

export const getFragments = () => {

    // return db.JSON()
    return db.get("fragments")
    // return path.join(__dirname, "./database.json")
    // C:\Users\ebosq\OneDrive\Bureau\CW2\dist-electron\database.json
    // return process.env.APP_ROOT + "/electron/database/database.json"
    // C:\Users\ebosq\OneDrive\Bureau\CW2\release\0.0.1\win-unpacked\resources\app.asar/electron/database/database.json
    // return path.join(__dirname, __filename)
    // C:\Users\ebosq\AppData\Local\Programs\code_wallet\resources\app.asar\dist-electron\C:\Users\ebosq\AppData\Local\Programs\code_wallet\resources\app.asar\dist-electron\main.js
}

export const addTag = (name) => {

    let tags = db.get("tags")

    console.log(tags)

    const existingNameCount = tags?.filter((tag) => tag.name === name).length

    const newTag = {
        id: uuid.v1(),
        name: name
    }

    console.log(name)
    if(!existingNameCount){
        tags.push(newTag)
        console.log(tags)
        db.set("tags", tags)
    }

    return newTag

}

export const addFragment = (fragment) => {

    let fragments = db.get("fragments")

    if(fragment.title && fragment.code){
        const existingTitleCount = fragments?.filter((frag) => frag.title === fragment.title).length
        if(!existingTitleCount){
            fragments.push({
                id: uuid.v1(),
                title: fragment.title,
                code: fragment.code,
                tagIds: fragment.tagIds
            })
            db.set("fragments", fragments)
        }
    }

}

export const setTag = (tag) => {
    let tags = db.get("tags")
    
    db.set("tags", tags?.map((t) => 
        t.id === tag.id ? tag : t
    ))
}

export const setFragment = (fragment) => {
    let fragments = db.get("fragments")
    
    db.set("fragments", fragments?.map((f) => 
        f.id === fragment.id ? fragment : f
    ))
}

export const deleteTag = (tagId) => {
    let tags = db.get("tags")

    let fragments = db.get("fragments")

    db.set("fragments", fragments?.map((f) => 
        f.tagIds.includes(tagId) ? ({...f, tagIds: f.tagIds.filter(tI => tI !== tagId)}) : f
    ))
    
    db.set("tags", tags?.filter((t) => t.id !== tagId ))

    return "Tag Deleted"
}

export const deleteFragment = (fragmentId) => {
    let fragments = db.get("fragments")
    
    db.set("fragments", fragments?.filter((f) => f.id !== fragmentId ))
}


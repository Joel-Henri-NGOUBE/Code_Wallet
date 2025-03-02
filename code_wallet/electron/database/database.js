const JSONdb = require("simple-json-db");
// import JSONdb from "simple-json-db";

// import uuid from "uuid"

const uuid = require("uuid");

// import JSONdb from 'simple-json-db';
// const db = new JSONdb('./store/storage.json');


const db = new JSONdb('./electron/database/database.json');

// console.log(db.JSON())

export const getTags = () => {

    return db.get("tags")

}

export const getFragments = () => {

    return db.get("fragments")

}

export const addTag = (name) => {

    let tags = db.get("tags")

    const existingNameCount = tags.filter((tag) => tag.name === name).length

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
        const existingTitleCount = fragments.filter((frag) => frag.title === fragment.title).length
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
    
    db.set("tags", tags.map((t) => 
        t.id === tag.id ? tag : t
    ))
}

export const setFragment = (fragment) => {
    let fragments = db.get("fragments")
    
    db.set("fragments", fragments.map((f) => 
        f.id === fragment.id ? fragment : f
    ))
}

export const deleteTag = (tagId) => {
    let tags = db.get("tags")

    let fragments = db.get("fragments")

    db.set("fragments", fragments.map((f) => 
        f.tagIds.includes(tagId) ? ({...f, tagIds: f.tagIds.filter(tI => tI !== tagId)}) : f
    ))
    
    db.set("tags", tags.filter((t) => t.id !== tagId ))

    return "Tag Deleted"
}

export const deleteFragment = (fragmentId) => {
    let fragments = db.get("fragments")
    
    db.set("fragments", fragments.filter((f) => f.id !== fragmentId ))
}

// module.exports = {
//     addFragment,
//     addTag,
//     deleteFragment,
//     deleteTag,
//     setFragment,
//     setTag
// }


// console.log(db.get("tags"))

// db.JSON({
//     "fragments": ["hey"],
//     "tags": ["ho","hey", "hoheeee"]
// })
// db.set("hey", "hey")
// console.log(db.get("tags"))
// console.log(db.set("tags", ["ho","hey", "yoooo"]))

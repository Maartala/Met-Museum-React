import { useState, useEffect } from "react";
import MetItem from "./MetItem";
import SearchBar from "./SearchBar";

const MetList = () => {

    const [object, setObject] = useState([])

    useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=sunflowers`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.objectIDs.forEach((elt) => {
                    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${elt}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Object mit ID ${elt} nicht gefunden`)
                            }
                            return response.json();
                        })
                        .then(objectData => {
                            setObject(objectData)
                        })
                })
            })
    }, [])

    console.log(object)
    return (
        <div>

        </div>
    );
}

export default MetList;
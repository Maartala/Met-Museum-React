const MetItem = ({ result }) => {

    return (
        <div>
            <h4>{result.artistDisplayName}</h4>
            <p>{result.title}</p>
            <img src={result.primaryImage} alt="" style={{ width: "500px" }} />
        </div>
    );
}

export default MetItem;
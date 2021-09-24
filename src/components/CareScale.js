function handleClickCare(e, type, valeur) {
    e.stopPropagation();

    const quantite = ["peu", "modérement", "beaucoup"];

    const besoin = type === 'water' ? "d'arrosage" : "de lumière";

    alert('Cette plante requiert ' + quantite[valeur-1] + ' ' + besoin + '. \nCe CareScale est de type ' + type)
}

function CareScale(props) {
    const {scaleValue, careType} = props

    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={(e) => handleClickCare(e, careType, scaleValue)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
    
export default CareScale
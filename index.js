function findMatching(array, nom) {
    return array.filter( element =>
        element.toLowerCase() === nom.toLowerCase())
}

function fuzzyMatch(array, name) {
    return array.filter( element =>
        element.charAt(0) === name.charAt(0)
        )
}

function matchName(array, stuff) {
    return array.filter( thing =>
       thing.name === stuff)
}
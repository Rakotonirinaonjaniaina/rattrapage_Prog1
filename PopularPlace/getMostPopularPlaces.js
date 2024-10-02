function getMostPopularPlaces(...places) {
    let placeCount = places.reduce((count, place) => {
        count[place] = (count[place] || 0) + 1;
        return count;
    }, {});

    let [first, second] = Object.keys(placeCount).sort((a, b) => placeCount[b] - placeCount[a]);
    return `${first} ${second}`;
}

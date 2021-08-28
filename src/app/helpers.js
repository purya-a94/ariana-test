/**
 * Convert a long array into an array of smaller arrays
 * based on the chunk size provided.
 *
 * @param {Array<any>} longArr Long array to be chunked.
 * @param {number} chunkSize Size of each chunk and the resulting arrays.
 * @return {Array<[any]} An array containing smaller arrays with
 *							maximum length of "chunkSize".
 */
export const chunkLongArray = (longArr, chunkSize) => {
	const perChunk = chunkSize // items per chunk

	const chunked = longArr.reduce((finalArr, item, index) => {
		const chunkIndex = Math.floor(index / perChunk)

		if (!finalArr[chunkIndex]) {
			finalArr[chunkIndex] = [] // start a new chunk
		}

		finalArr[chunkIndex].push(item)

		return finalArr
	}, [])

	return chunked
}

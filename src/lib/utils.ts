export function shuffle<T>(array: T[]): T[] {
	let currentIndex = array.length;
	while (currentIndex--) {
		const randomIndex = Math.floor(Math.random() * currentIndex + 1);
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
	return array;
}

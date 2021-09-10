export interface TestItem {
	id: number,
	title: string,
	complexity: ComplexityType,
}

export enum ComplexityType {
	Easy = 'Easy',
	Medium = 'Medium',
	Hard = 'Hard',
	Expert = 'Expert'
}
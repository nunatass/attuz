export type Flavor = {
	id: string
	value: string
}

export type DeliveryPeriod = {
	id: string
	value: string
}
export type Review = {
	id: string
	email: string
	name: string
	rating: number
	comment: string
	createdAt: string
	user: {
		id: string
		name: string
	}
}

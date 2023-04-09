export enum PlanStatuses {
    Enabled = 'Enabled',
    Disabled = 'Disabled'
}

export enum Plans {
    Bronze = 'Bronze',
    Silver = 'Silver',
    Gold = 'Gold'
}

export interface ICardData {
    id: number,
    plan: Plans,
    image: string,
    percentageOfOwnership: number,
    collections_remaining: number,
    price: number,
    perks: string[],
    status: PlanStatuses
}

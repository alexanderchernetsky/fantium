import {ICardData, Plans, PlanStatuses} from "@/app/page";

const mockCards: ICardData[] = [
    {
        id: 1,
        plan: Plans.Bronze,
        image: 'bronze.png',
        percentageOfOwnership: 0.0021,
        collections_remaining: 809,
        price: 99,
        perks: ['Access to FANtium Discord channel'],
        status: PlanStatuses.Enabled
    },
    {
        id: 2,
        plan: Plans.Silver,
        image: 'silver.png',
        percentageOfOwnership: 0.0108,
        collections_remaining: 100,
        price: 499,
        perks: [
            'Early access (allowlist) on the next Thiem NFT drop',
            'Exclusive workout video'
        ],
        status: PlanStatuses.Enabled
    },
    {
        id: 3,
        plan: Plans.Gold,
        image: 'gold.png',
        percentageOfOwnership: 0.2171,
        collections_remaining: 10,
        price: 9999,
        perks: [
            'Meet & greet at one tournament on the ATP tour',
            'Access to a private chat with the'
        ],
        status: PlanStatuses.Enabled
    }
]

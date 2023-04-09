import {IDBResponse} from "@/app/api/dbService";

export interface ICardData {
    id: number,
    plan: string,
    image: string,
    percentageOfOwnership: number,
    collections_remaining: number,
    price: number,
    perks: string[],
    status: string
}

function transformDBResponse(response: IDBResponse[]): ICardData[] {
    return response.map(item => {
        return {
            id: Number(item.plans.id),
            plan: item.plans.name,
            image: item.plans.image_url,
            percentageOfOwnership: Number(item.plans.percentage_of_ownership),
            collections_remaining: item.plans.collections_remaining,
            price: item.plans.price,
            perks: item.plans.perks.split('.'),
            status: item.plans.status
        }
    })
}

export default transformDBResponse;

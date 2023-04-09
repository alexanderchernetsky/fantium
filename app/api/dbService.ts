import databaseInstance, {Database} from "@/app/api/database";

export interface IDBResponse {
    plans: {
        id: number,
        sportsman_id: number,
        image_url: string,
        percentage_of_ownership: string,
        collections_remaining: number,
        price: number,
        status: string,
        name: string,
        perks: string
    }
}

class DBService {
    public databaseInstance: Database;

    constructor() {
        this.databaseInstance = databaseInstance;
    }

    public getPlansById(id: number): Promise<IDBResponse[]> {
        return this.databaseInstance
            .executeQuery<IDBResponse>(`SELECT * from plans WHERE sportsman_id=${id}`)
            .then(rows => rows || [])
            .catch(err => {
                throw err;
            });
    }
}

export default DBService;

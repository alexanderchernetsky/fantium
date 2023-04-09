import {createPool, Pool, RowDataPacket} from 'mysql2';

interface IConfig {
    mysql_hostname: string ,
    mysql_port: number,
    mysql_user: string,
    mysql_password: string,
    mysql_database: string
}

// todo: create another user (don't share root with anyone)
const config: IConfig = {
    mysql_hostname: String(process.env.DB_HOSTNAME),
    mysql_port: Number(process.env.DB_PORT),
    mysql_user: String(process.env.DB_USER),
    mysql_password: String(process.env.DB_PASSWORD),
    mysql_database: String(process.env.DB_SCHEMA)
}

export class Database {
    private pool: Pool | null = null;

    constructor(config: IConfig) {
        this.createConnection(config);
    }

    private createConnection(config: IConfig): void {
        this.pool = createPool({
            host: config.mysql_hostname,
            port: config.mysql_port,
            user: config.mysql_user,
            password: config.mysql_password,
            database: config.mysql_database
        });
    }

    public executeQuery<T>(raw: string, nestTables = true): Promise<T[]> {
        return new Promise((resolve, reject) => {
            if (this.pool) {
                this.pool.query(
                    {
                        sql: raw,
                        nestTables
                    },
                    [],
                    function queryHandler(err, rows: RowDataPacket[]): void {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(rows as T[]);
                        }
                    }
                );
            }
        });
    }
}

let databaseInstance: Database | null = null;

function getDatabaseInstance() {
    if (databaseInstance) {
        return databaseInstance;
    } else {
        return (databaseInstance = new Database(config));
    }
}

export default getDatabaseInstance();

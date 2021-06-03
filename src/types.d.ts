import { DIDDocument } from 'did-resolver';
import { SignatureProvider } from 'eosjs/dist/eosjs-api-interfaces';

export declare type ConfigOptions = {
    [x: string]: {
        chainId: string,
        service: [{
            id: string,
            type: string | [string],
            serviceEndpoint: string
        }]
    }
}

// export declare type ConfigOptions = {
//     registry?: ChainRegistry,
//     authorization?: [
//         {
//           actor: string,
//           permission: string,
//         },
//     ], 
//     create?: {
//         buyrambytes?: {
//           bytes: number,
//         },
//         delegatebw?: {
//           stakeNetQuantity?: string,
//           stakeCpuQuantity?: string,
//           transfer?: boolean,
//         },
//     },
//     config?: {
//         blocksBehind?: number,
//         expireSeconds?: number,
//     },
//     [x: string]: any
// }

export declare type Authority = {
    threshold: number,
    keys?: [{
        key: string,
        weight: number
    }],
    accounts: [] | [{
        permission: {
            actor: string,
            permission: string
        },
        weight: number
    }],
    waits: [] | [{
        wait_sec: number,
        wait: number
    }]
}

export declare interface EosioDIDInterface {
    async create(chain: string, creator: string, name: string, owner: Authority, active: Authority, signatureProvider: SignatureProvider, options?: ConfigOptions): Promise<DIDDocument>;

    async resolve(did: string, options?: ConfigOptions): Promise<DIDDocument>;

    async update(account: string, permission: string, parent: string, auth: Authority, options?: ConfigOptions): Promise<DIDDocument>;

    async deactivate(did: string, options?: ConfigOptions): Promise<void>;
}
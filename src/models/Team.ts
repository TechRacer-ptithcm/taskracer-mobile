
export interface Team {
    id:string,

    slug: string,
    name: string,
    ownerId: string,
    visibility: 'PUBLIC' | 'PRIVATE',
    user: string[]
}
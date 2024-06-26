interface socialsType{
    name: string,
    link: string
}

interface eventType{
    name: string,
    date: string,
    time: string,
    link: string
}

interface repositoriesType{
    name: string,
    lang: string,
    star: number,
    issue: number
}

export type {socialsType, eventType, repositoriesType};
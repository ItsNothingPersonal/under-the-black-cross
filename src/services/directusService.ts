import { AuthResult, Directus, QueryOne } from '@directus/sdk'
import { DirectusCollections } from 'types/directusCollections'
import { DirectusFile } from 'types/directusFile'

let directus: Directus<DirectusCollections>
let directusConnection: AuthResult | undefined

const getDirectus = (): Directus<DirectusCollections> | undefined => {
    if (directus) return directus

    const directusUrl = import.meta.env.VITE_DIRECTUS_URL
    if (!directusUrl) return

    directus = new Directus<DirectusCollections>(directusUrl)
    return directus
}

const getDirectusUrl = (): string => {
    return import.meta.env.VITE_DIRECTUS_URL ?? ''
}

const getDirectusConnection = async (
    directus: Directus<DirectusCollections>
): Promise<AuthResult | undefined> => {
    if (directusConnection) return directusConnection

    const email = import.meta.env.VITE_DIRECTUS_USER
    const password = import.meta.env.VITE_DIRECTUS_PASSWORD

    if (!email) return
    if (!password) return

    directusConnection = await directus.auth
        .login({
            email,
            password,
        })
        .catch(() => {
            console.error('Invalid credentials')
            return undefined
        })

    return directusConnection
}

const getFileById = async (id: string) => {
    return (await getDirectus()?.files.readOne<QueryOne<DirectusFile>>(
        id
    )) as DirectusFile
}

export { getDirectusUrl, getDirectus, getDirectusConnection, getFileById }

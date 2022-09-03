export interface DirectusFile {
    id: string
    storage: string
    filename_disk: string
    filename_download: string
    title: string
    type: string
    folder: string
    uploaded_by: string
    uploaded_on: string
    modified_by: string
    modified_on: string
    charset: string | undefined
    filesize: number
    width: number
    height: number
    duration: number | undefined
    embed: boolean | undefined
    description: string | undefined
    location: string | undefined
    tags: string[] | undefined
    metadata: string[] | undefined
}

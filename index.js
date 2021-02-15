const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')
const cookieStore = new FileCookieStore('./cookies.json')
const client = new Instagram({ username: 'depoisdomeme', password: 'Spud@123.', cookieStore })

    ; (async () => {
        await client.login()
        await runDelete()
        setInterval(async () => await runDelete(), 180000)
    })()

const runDelete = async () => {
    const { user: { edge_owner_to_timeline_media: { edges } } } = await client.getPhotosByUsername({ username: 'depoisdomeme', first: 100 })
    // photos.user.edge_owner_to_timeline_media.
    edges.map(async ({ node: { id } }, i) => {
        const deleteResponse = await client.deleteMedia({ mediaId: id })

        if (deleteResponse.did_delete) {
            console.log(`${id} deletado!`)
        }
        if (i === edges.length) {
            console.log('Aguardando 5 minutos para continuar...')
        }
    })
}
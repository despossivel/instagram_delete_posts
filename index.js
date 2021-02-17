const Instagram = require('instagram-web-api'),
      FileCookieStore = require('tough-cookie-filestore2'),
      cookieStore = new FileCookieStore('./cookies.json'),
      username = 'desposdomeme',
      client = new Instagram({ username, password: '', cookieStore })

    ; (async () => {
        await client.login()
        await runDelete()
        setInterval(async () => await runDelete(), 180000)
    })()

const runDelete = async () => {
    const { user: { edge_owner_to_timeline_media: { edges } } } = await client.getPhotosByUsername({ username, first: 100 })

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

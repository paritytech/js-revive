const fs = require('fs')

async function main() {
    const headers = { 'content-type': 'application/json' }

    let asset_url = ''
    try {
        const response = await fetch(
            'https://api.github.com/repos/paritytech/revive/releases/latest',
            { headers }
        )

        const json = await response.json()
        asset_url = json.assets_url
    } catch (error) {
        console.error(`Failed to get asset_url: ${error}`)
        process.exit(1)
    }

    let assets = []
    try {
        const response = await fetch(asset_url)
        assets = await response.json()
    } catch (error) {
        console.error(`Failed to get download_url: ${error}`)
        process.exit(1)
    }

    try {
        for (const assetName of ['resolc.wasm', 'resolc.js']) {
            const asset = assets.find((asset) => asset.name == assetName)
            const response = await fetch(asset.browser_download_url, {
                headers: {
                    'content-type': 'application/octet-stream',
                },
            })
            const data = await response.arrayBuffer()

            fs.writeFileSync(`src/resolc/${assetName}`, Buffer.from(data))
            console.log(`src/resolc/${assetName} updated`)
        }
    } catch (error) {
        console.error(`Failed to download wasm: ${error}`)
        process.exit(1)
    }
}

main()

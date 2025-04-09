const fs = require('fs')
const path = require('path')
const { pipeline } = require('stream')
const { promisify } = require('util')

const streamPipeline = promisify(pipeline)
const ASSET_NAMES = ['resolc.wasm', 'resolc_web.js']

async function main() {
    const headers = { 'content-type': 'application/json' }

    let assets = []
    try {
        const response = await fetch(
            'https://api.github.com/repos/paritytech/revive/releases/latest',
            { headers }
        )

        const json = await response.json()
        console.log(`Using release ${json.name}`)

        if (!json.assets || json.assets.length === 0) {
            throw new Error('No assets found in release')
        }
        assets = json.assets
    } catch (error) {
        console.error(`Failed to get assets: ${error}`)
        process.exit(1)
    }

    const filteredAssets = assets.filter((asset) =>
        ASSET_NAMES.includes(asset.name)
    )

    if (filteredAssets.length === 0) {
        console.error(
            `None of the specified assets (${ASSET_NAMES.join(', ')}) found in release. Available assets: ${assets.map((a) => a.name).join(', ')}`
        )
        process.exit(1)
    }

    const outDir = path.resolve('src/resolc')
    fs.mkdirSync(outDir, { recursive: true })

    for (const asset of filteredAssets) {
        console.log(`Downloading ${asset.browser_download_url}...`)

        try {
            const response = await fetch(asset.browser_download_url, {
                headers: { 'content-type': 'application/octet-stream' },
            })

            if (!response.ok) {
                throw new Error(`Failed to fetch asset: ${response.statusText}`)
            }

            const filePath = path.join(outDir, asset.name)
            await streamPipeline(response.body, fs.createWriteStream(filePath))

            console.log(`Successfully downloaded ${asset.name} to ${filePath}`)
        } catch (error) {
            console.error(`Failed to download asset ${asset.name}: ${error}`)
            process.exit(1)
        }
    }
}

main()

const fs = require('fs')
const tar = require('tar')
const { pipeline } = require('stream')
const { promisify } = require('util')

const streamPipeline = promisify(pipeline) // Convert pipeline to a Promise-based function

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

    try {
        const asset = assets.find(
            (asset) => asset.name === 'resolc-wasm32-unknown-emscripten.tar.gz'
        )

        if (!asset) {
            throw new Error('Asset not found in release')
        }

        const response = await fetch(asset.browser_download_url, {
            headers: { 'content-type': 'application/octet-stream' },
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch asset: ${response.statusText}`)
        }

        // Ensure the directory exists
        fs.mkdirSync('src/resolc', { recursive: true })

        const extract = tar.x({
            cwd: 'src/resolc',
            filter: (filepath) => {
                return ['resolc.wasm', 'resolc.js'].includes(filepath)
            },
        })

        // Use pipeline instead of pipeTo (which is for Web Streams)
        await streamPipeline(response.body, extract)

        console.log(`Successfully extracted resolc.wasm and resolc.js`)
    } catch (error) {
        console.error(`Failed to download and extract wasm: ${error}`)
        process.exit(1)
    }
}

main()

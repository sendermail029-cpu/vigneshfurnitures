import { mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const publicDir = path.join(process.cwd(), 'public')
const allowedExtensions = new Set(['.png', '.jpg', '.jpeg', '.jfif'])

async function convertImage(filename) {
  const sourcePath = path.join(publicDir, filename)
  const targetPath = path.join(publicDir, `${path.parse(filename).name}.webp`)
  const sourceStat = await stat(sourcePath)

  const transformer = sharp(sourcePath, { failOn: 'none' }).rotate()
  const metadata = await transformer.metadata()

  let pipeline = transformer
  if ((metadata.width ?? 0) > 2200) {
    pipeline = pipeline.resize({ width: 2200, withoutEnlargement: true })
  }

  await pipeline.webp({ quality: 72, effort: 6 }).toFile(targetPath)
  const targetStat = await stat(targetPath)

  return {
    filename,
    originalKb: Math.round(sourceStat.size / 1024),
    webpKb: Math.round(targetStat.size / 1024),
  }
}

async function main() {
  await mkdir(publicDir, { recursive: true })
  const entries = await readdir(publicDir)
  const images = entries.filter((entry) => allowedExtensions.has(path.extname(entry).toLowerCase()))
  const results = []

  for (const image of images) {
    results.push(await convertImage(image))
  }

  console.table(results)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

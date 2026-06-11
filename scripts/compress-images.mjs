import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, extname } from 'node:path'
import sharp from 'sharp'

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp'])

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase()
  if (!IMAGE_EXTENSIONS.has(ext)) return

  const original = await readFile(filePath)
  const originalSize = original.length

  let pipeline = sharp(original)

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: 90, compressionLevel: 9, effort: 10 })
  } else if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: 90, mozjpeg: true })
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: 90 })
  }

  const compressed = await pipeline.toBuffer()

  if (compressed.length >= originalSize) {
    console.log(`[compress-images] ${filePath}: skipped (already optimized)`)
    return
  }

  await writeFile(filePath, compressed)
  const saved = ((1 - compressed.length / originalSize) * 100).toFixed(1)
  console.log(
    `[compress-images] ${filePath}: ${formatBytes(originalSize)} → ${formatBytes(compressed.length)} (-${saved}%)`,
  )
}

export async function compressPublicImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })

  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = join(dir, entry.name)
      if (entry.isDirectory()) {
        await compressPublicImages(fullPath)
        return
      }
      await compressImage(fullPath)
    }),
  )
}

const isDirectRun = process.argv[1]?.endsWith('compress-images.mjs')

if (isDirectRun) {
  const dir = process.argv[2] ?? '.output/public'
  await compressPublicImages(dir)
}

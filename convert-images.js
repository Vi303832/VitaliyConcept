import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, 'public', 'img');

async function convert() {
  try {
    if (!fs.existsSync(imgDir)) {
      console.error(`Directory not found: ${imgDir}`);
      return;
    }

    const files = fs.readdirSync(imgDir);
    console.log(`Found ${files.length} items in ${imgDir}.`);

    let count = 0;
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        const basename = path.basename(file, ext);
        const sourcePath = path.join(imgDir, file);
        const targetPath = path.join(imgDir, `${basename}.webp`);

        // Skip if WebP already exists and is valid
        if (fs.existsSync(targetPath)) {
          const stats = fs.statSync(targetPath);
          if (stats.size > 0) {
            continue;
          }
        }

        console.log(`Converting: ${file} -> ${basename}.webp`);
        const image = sharp(sourcePath);
        const metadata = await image.metadata();

        let pipeline = image;
        // Resize down if it's exceptionally large (e.g. above 2000px width)
        if (metadata.width && metadata.width > 2000) {
          console.log(`  Resizing from ${metadata.width}px to 2000px width`);
          pipeline = pipeline.resize({ width: 2000, withoutEnlargement: true });
        }

        await pipeline
          .webp({ quality: 80 })
          .toFile(targetPath);
        
        count++;
        console.log(`  Success: Created ${basename}.webp`);
      }
    }
    console.log(`Done! Converted ${count} new images to WebP.`);
  } catch (err) {
    console.error('Error during image conversion:', err);
  }
}

convert();

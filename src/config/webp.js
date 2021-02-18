const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')
const DEST_DIR = './dist/_nuxt/img/'
const COMMON_OPTIONS = {
  quality: 75,
  alphaQuality: 100,
  method: 4,
}

;(async () => {
  await Promise.all([
    imagemin([DEST_DIR + '*.png'], {
      destination: DEST_DIR,
      plugins: [
        imageminWebp(
          Object.assign({}, COMMON_OPTIONS, {
            preset: 'icon',
          })
        ),
      ],
    }),
    imagemin([DEST_DIR + '*.{jpg,jpeg}'], {
      destination: DEST_DIR,
      plugins: [
        imageminWebp(
          Object.assign({}, COMMON_OPTIONS, {
            preset: 'photo',
          })
        ),
      ],
    }),
  ])
})()

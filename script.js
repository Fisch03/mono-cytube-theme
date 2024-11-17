const video = document.querySelector('#videowrap > div:last-child')
console.log(video)

const owncast_embed_src = "https://mono.erodozer.moe/embed/video/"
const owncast_embed = document.createElement('iframe')
owncast_embed.src = owncast_embed_src
owncast_embed.width = "100%"
owncast_embed.referrerPolicy = 'origin'
owncast_embed.frameBorder = 0
owncast_embed.allowFullscreen = true

video.replaceWith(owncast_embed)

const actual_width = owncast_embed.offsetWidth
console.log(actual_width)
owncast_embed.height = `${actual_width * 9 / 16}px`


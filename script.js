// comment
const queueDiv = document.querySelector('#queue');
const currentTitle = document.querySelector('#currenttitle');

const owncast_embed_src = "https://mono.erodozer.moe/embed/video/"
function makeEmbed() {
    if (document.getElementById('owncast_embed') !== null) {
        return null
    }

    const embed = document.createElement('iframe')
    embed.id = 'owncast_embed'
    embed.src = owncast_embed_src
    embed.width = "100%"
    embed.referrerPolicy = 'origin'
    embed.frameBorder = 0
    embed.allowFullscreen = true
    document.getElementById('videowrap').appendChild(embed)
    return embed
}

function updateContent() {
    if (queueDiv.children.length === 0) {
        const video = document.querySelector('#videowrap > div:last-child');
        if (video === null) {
            return
        }

        const embed = makeEmbed();
        if (embed === null) {
            return
        }

        video.style.display = 'none';
        currentTitle.innerText = 'Currently Playing: MonoCast';
        updateSizing();
    } else {
        const embed = document.getElementById('owncast_embed');
        if (embed !== null) {
            embed.remove();
        }

        const video = document.querySelector('#videowrap > div:last-child');
        video.style.display = 'block';
    }

}

function updateSizing() {
    const existingEmbed = document.getElementById('owncast_embed');
    if (existingEmbed !== null) {
        const actual_width = existingEmbed.offsetWidth;
        existingEmbed.height = `${actual_width * 9 / 16}px`;
    }
}

const resizeObserver = new ResizeObserver(updateSizing);
resizeObserver.observe(document.getElementById('videowrap'));

const queueObserver = new MutationObserver(() => setTimeout(updateContent, 1000));
queueObserver.observe(queueDiv, {childList: true});
updateContent();

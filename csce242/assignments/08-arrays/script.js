const moodSelector = document.getElementById("mood");
const linksContainer = document.getElementById("links");

const videoData = {
    happy: [
        { text: "Happy by Pharrell Williams", url: "https://www.youtube.com" },
        { text: "Don't Stop Me Now by Queen", url: "https://www.youtube.com" }
    ],
    sad: [
        { text: "Happier Than Ever by Billie Eilish", url: "https://www.youtube.com" }
    ]
};

// I moved your logic into a reusable function
function updateLinks(selectedMood) {
    linksContainer.innerHTML = '';
    if (videoData[selectedMood]) {
        const list = document.createElement("ul");
        videoData[selectedMood].forEach(video => {
            const listItem = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = video.url;
            anchor.textContent = video.text;
            anchor.target = "_blank";
            listItem.appendChild(anchor);
            list.appendChild(listItem);
        });
        linksContainer.appendChild(list);
    }
}

// Listen for changes
moodSelector.addEventListener("change", (e) => {
    updateLinks(e.target.value);
});

// NEW: Run this once immediately so the page isn't empty on load!
updateLinks(moodSelector.value);

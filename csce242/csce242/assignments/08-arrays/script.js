

//variables
const moodSelector = document.getElementById("mood");
const linksContainer = document.getElementById("links");
const videoContainer = document.getElementById("videoContainer");

//video names and links to videos
const videoData = {
    happy: [
        { text: "Happy by Pharrell Williams", url: "https://www.youtube.com/embed/ZbZSe6N_BXs" },
        { text: "Don't Stop Me Now by Queen", url: "https://www.youtube.com/embed/HgzGwKwLmgM" },
        { text: "Can't Stop this Feeling by Justin Timberlake", url: "https://www.youtube.com/embed/ru0K8uYEZWw" },
        { text: "Don't Worry be Happy by Bobby McFerrin", url: "https://www.youtube.com/embed/d-diB65scQU" },
        { text: "I'm Walking on Sunshine by Katrina & the Waves", url: "https://www.youtube.com/embed/iPUmE-tne5U" }
    ],
    sad: [
        { text: "Happier Than Ever by Billie Eilish", url: "https://www.youtube.com/embed/5GJWxDKyk3A" },
        { text: "Someone You Loved by Lewis Capaldi", url: "https://www.youtube.com/embed/zABLecsR5UE" },
        { text: "Someone Like You by Adele", url: "https://www.youtube.com/embed/hLQl3WQQoQ0" },
        { text: "Fix You by Coldplay", url: "https://www.youtube.com/embed/k4V3Mo61fJM" },
        { text: "Hurt by Johnny Cash", url: "https://www.youtube.com/embed/8AHCfZTRGiI" }
    ]
};

//updates list based on selected mood
//displays new video based on link that is clicked
const updateLinks = (selectedMood) => {
    linksContainer.innerHTML = "";

    if (videoData[selectedMood]) {
        const list = document.createElement("ul");

        videoData[selectedMood].forEach((video) => {
            const listItem = document.createElement("li");
            const anchor = document.createElement("a");

            anchor.href = "#";
            anchor.textContent = video.text;

            anchor.addEventListener("click", (event) => {
                event.preventDefault();

                videoContainer.innerHTML =
                    `<iframe width="560" height="315" src="${video.url}" frameborder="0" allowfullscreen></iframe>`;
            });

            listItem.appendChild(anchor);
            list.appendChild(listItem);
        });

        linksContainer.appendChild(list);
    }
};

moodSelector.addEventListener("change", () => {
    updateLinks(moodSelector.value);
});

updateLinks(moodSelector.value);
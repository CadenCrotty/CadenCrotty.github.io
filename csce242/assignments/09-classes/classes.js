//class for elements of the array
class Song {
    constructor(title, artist, album, year, genre, pic, youtube) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.genre = genre;
        this.pic = pic;
        this.youtube = youtube; 
    }

    get card() {
        const songSection = document.createElement("section");
        songSection.classList.add("song");

        //title
        const a1 = document.createElement("a");
        a1.href = "#";

        const h3 = document.createElement("h3");
        h3.textContent = this.title;
        a1.append(h3);

        //image
        const img = document.createElement("img");
        img.src = `images/${this.pic}`; 
        a1.append(img);

        songSection.append(a1);

        //section for addiational info
        songSection.append(this.moreInfo());

        //hide and show more info section
        a1.onclick = (e) => {
            e.preventDefault();
            const info = songSection.querySelector(".info");
            if (info) info.classList.toggle("hidden");
        };

        return songSection;
    }
    //helper class
    moreInfo() {
        const div = document.createElement("div");
        div.classList.add("info", "hidden");

        div.append(this.info("Artist", this.artist));
        div.append(this.info("Album", this.album));
        div.append(this.info("Year", this.year));
        div.append(this.info("Genre", this.genre));
        div.append(this.info("YouTube", `<a href="${this.youtube}" target="_blank" rel="noopener noreferrer">Video Link</a>`));

        

        return div;
    }

    info(label, value) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${label}</strong>: ${value}`;
        return p;
    }
}
//array for the (title, artist, album, year, genre, image, youtube link)
const songs = [];
songs.push(new Song("Swinging Doors","Merle Haggard" ,"Okie From Muskogee",1996,"Country","Okie.jpg","https://www.youtube.com/watch?v=o1-8SPFAnsU&list=RDo1-8SPFAnsU&start_radio=1&pp=ygUcc3dpbmdpbmcgZG9vcnMgbWVybGUgaGFnZ2FyZKAHAQ%3D%3D" ));
songs.push(new Song("Soul Man", "Sam & Dave", "Soul Men",1967, "Soul", "soulmen.jpg","https://www.youtube.com/watch?v=HYk7NWjsuHI&list=RDHYk7NWjsuHI&start_radio=1&pp=ygUVc291bCBtYW4gc2FtIGFuZCBkYXZloAcB"));
songs.push(new Song("Free Bird","Lynyrd Skynyrd", "Pronounced' Leh-'Nerd'Skin-'Nerd",1973,"Rock","freebird.jpg","https://www.youtube.com/watch?v=0LwcvjNJTuM&list=RD0LwcvjNJTuM&start_radio=1&pp=ygUYZnJlZSBiaXJkIGx5bnlyZCBza3lueXJkoAcB"));
songs.push(new Song("That's Life", "Frank Sinatra", "That's Life", 1966, "Jazz","thatslife.jpg","https://www.youtube.com/watch?v=avU2aarQUiU&pp=ygUZdGhhdCdzIGxpZmUgZnJhbmsgc2luYXRyYQ%3D%3D"));



//
const container = document.getElementById("music-boxes");
container.innerHTML = ""; 

songs.forEach((song) => {
    container.append(song.card);
});
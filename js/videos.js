const loadVideos=()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos))
    .catch((error)=> console.log(error));
};

const cardDemo = {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}

const displayVideos = (videos) =>{

    const videosContainer=document.getElementById('videos');
    // forEach loop
    videos.forEach(video => {
        console.log(video);
        // creating card
        const card=document.createElement('div');
        card.classList="card shadow-sm";
        card.innerHTML=
        `
        <figure class="h-[200px] relative">
    <img class="h-full w-full object-cover rounded-xl"
      src=${video.thumbnail}
      alt="Shoes" />
      ${
        video.others.posted_date === ""
        ? "" 
        : `<span class="absolute right-2 bottom-2 bg-black rounded p-1 text-xs text-white">
        ${  convertSeconds(parseInt(video.others.posted_date)) } </span>`
      }
      
  </figure>
  <div class="px-0 py-2 flex gap-4">

   <div>
   <img class="ml-2 h-10 w-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
   </div>
       
   <div class="w-full space-y-1">
         <h2 class="font-bold text-xl">${video.title}</h2>
        <div class="flex gap-2 items-center">
        <p class="text-gray-400">${video.authors[0].profile_name}</p>

        ${
            video.authors[0].verified === true ? '<img class="w-5" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000">' : ''
        }
        </div>
        <p>${video.others.views} views</p>
   </div>
   
  </div>
        
        `
        videosContainer.append(card);
    })
}
loadVideos();
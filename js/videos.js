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
        <figure class="">
    <img
      src=${video.thumbnail}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
   
  </div>
        
        `
        videosContainer.append(card);
    })
}
loadVideos();
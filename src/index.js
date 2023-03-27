const api = "https://dog.ceo/api/breeds/image/random";

async function dog(){
    const data = await fetch(api);
     
    const img_src = await data.json();
    document.getElementById("img").src=img_src["message"];
     
}
var data;
async function fetchData()
{
    // try{
    //     var response=await fetch("https://picsum.photos/v2/list");
    // data=await response.json();
    // console.log(data);
    // }
    // catch{
    //     console.log(err);
    // }
    var response=await fetch("https://picsum.photos/v2/list");
    data=await response.json();
    console.log(data);
    display();
}
fetchData();
function display()
{
   data.forEach(obj => {
   const url=obj.download_url;
   const author=obj.author;
   const temp='<img src="'+url+'"></img><h2>'+author+'</h2>';
   document.getElementById("gallery").insertAdjacentHTML('beforeend',temp);
    
   });
}
display();

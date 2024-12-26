var data;
async function fetchData()
{
    try{
    var response=await fetch('https://official-joke-api.appspot.com/jokes/random/50');
    data=await response.json();
    console.log(data);
    display();
    }
    catch{
        console.log(err);
    }
}
fetchData();
function display()
{
   data.forEach(obj => {
   const type=obj.type;
   const setup=obj.setup;
   const punchline=obj.punchline;
   const temp='<div class="jokes"><h1>Type:'+type+'</h1><h2>'+setup+'</h2><h3>'+punchline+'</h3>';
   document.getElementById("jokes").insertAdjacentHTML('beforeend',temp);
    
   });
}
display();
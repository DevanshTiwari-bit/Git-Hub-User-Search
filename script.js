let id =  document.getElementById("inputid").value;
let repo=0;
var forks=0;
var star_count=0;
var imgurl="";
var repo_link;
async function getdata(id) {
    let url = "https://api.github.com/users/" +"AbhishekShukla1505"+ "/repos";
   
        let response = await fetch(url);
        let data = await response.json();
     

    repo=data.length;
    console.log(repo);
}


async function count_of_forks(id) {
    let url = "https://api.github.com/users/" + "AbhishekShukla1505" + "/repos";
    let response = await fetch(url);
    let data = await response.json();
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        let t = data[i].forks;
        count = count + t;

    }
    forks=count;
    console.log(count);
}
async function stargazers_count(id) {
    let url = "https://api.github.com/users/" + "AbhishekShukla1505" + "/repos";
    let response = await fetch(url);
    let data = await response.json();
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        let t = data[i].stargazers_count;
        count = count + t;
    }
    star_count=count;
    console.log(count);
}
async function GetImage(id) {
    let url = "https://api.github.com/users/" + "AbhishekShukla1505" +"/repos";
    let response = await fetch(url);
    let data = await response.json();
    let img = data[0].owner.avatar_url;
    console.log(img);
    imgurl=img;
    return img;
}
async function getRespoLinks(id) {
    let url = "https://api.github.com/users/" +"AbhishekShukla1505"+ "/repos";
    let response = await fetch(url);
    let data = await response.json();
    var arr = [];
    for (let i = 0; i < data.length; i++) {
        let t = data[i].html_url;
        arr[i] = t;
    }
    console.log(arr);
    repo_link=arr;
    return arr;

}
function showimage(u){
    document.getElementById("myimage").setAttribute("style", "background-image: url(" + u + "); background-size: cover; background-repeat: no-repeat;");
    
}

    
    


getdata("AbhishekShukla1505");
count_of_forks(id);
stargazers_count(id);
GetImage(id);

getRespoLinks(id);


document.getElementById('btn').addEventListener('click', () => {
   
   
    showimage(imgurl);
    document.getElementById("mylable").innerHTML = repo;
    document.getElementById("mylable1").innerHTML = forks;
    document.getElementById("mylable2").innerHTML = star_count;
    document.getElementById("mylable4").innerHTML = repo_link;
})
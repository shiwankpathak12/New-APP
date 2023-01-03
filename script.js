//custom forEach
Array.prototype.myforEach=function(cb){
    let temp=[]
    for(var i=0;i<this.length;i++){
        cb(this[i],i,this)
        
    }
}

let key='6f1452d61bd144259e525a4480e5ffb9';
window.addEventListener('load',getNews('general'))
function getNews(cat){
    if(cat){
        cat=cat
    }
    else{
        cat='general'
    }
    document.querySelector('.cards').innerHTML=''
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=${key}`)
    .then(res=>res.json())
    .then(data=>{
        
        data.articles.myforEach(item=>{
        let div=document.createElement('div')
        div.classList.add('card')
        div.innerHTML=`
        <img src=${item.urlToImage} loading="lazy">
        <p>${item.title}</p>
        <button><a href=${item.url}>Read More</a></button>
        `
        
        document.querySelector('.cards').append(div)
        })
        console.log(div)
        
       
    })
}
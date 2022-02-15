
let posts =[
    {title:'first post',desc:'first post info' ,author:"Ali"},
    {title:'second post',desc:'second post info' ,author:"Veli"},
    {title:'third post',desc:'third post info' ,author:"Kemal"}
];

function listPosts(){
    posts.forEach(element => {
        console.log(element);
    });
}

function addPost(post){
    return new Promise((resolve,reject) => {
        console.log("Post adding ");
        if(post){
            resolve("Post added");
        }else{
            reject("There is a problem");
        }
    });
};


async function showPosts(){

    try{
       //await addPost({title :'last post',desc:'last post info',author:"Cevdet"});
        await addPost(false);
        listPosts();

    }catch(error){
        console.log(error);
    }
}

showPosts();



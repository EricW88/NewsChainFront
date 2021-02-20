var myVar = {"py/object": "src.Blockchain.Blockchain", "blocks": 
[{"py/object": "src.Block.Block", "prev_hash": 0, "block_number": 0, "articles": ["A\nB\nC", "A\nB\nC", "A\nB\nC", "A\nB\nC"], "nonce": 7}]};
var myArticles = [];
load_home(myVar);
// load_article();

function load_home(data){
    let read = 0;
    for(let i = 0; i < data["blocks"].length; i++){
        for(let j = 0; j < data["blocks"][i]["articles"].length; j++){
            let article = data["blocks"][i]["articles"][j];
            let col;
            switch(read % 3){
                case 0:
                    col = document.getElementById("leftNews");
                    break;
                case 1:
                    col = document.getElementById("midNews");
                    break;
                case 2:
                    col = document.getElementById("rightNews");
                    break;
            }
            myArticles.push(article);
            // add_article(article, read);
            let thumbnail = document.createElement("div");
            thumbnail.classList.add("thumbnail");
            thumbnail.id = read;
            let title = document.createElement("div");
            title.classList.add("title");
            let link = document.createElement("a");
            link.href = "html/article.html";
            let date = document.createElement("div");
            date.classList.add("date");
            let split = article.split('\n', 2);
            link.appendChild(document.createTextNode(split[0]));
            title.appendChild(link);
            date.appendChild(document.createTextNode(split[1]));
            thumbnail.appendChild(title);
            thumbnail.appendChild(date);
            col.appendChild(thumbnail);
            <a href="#" class="readmore">Read more</a>
            read++;
        }
    }
}

// function load_article(){
//     var htmlContent = '<html>Whatever</html>';
//     fs.writeFile('/my-page.html', htmlContent, (error) => { /* handle error */ });
// }
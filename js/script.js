//baffle config
const names = ['Digi','Promoções','Incentivo','Inovação','Apps','Games','Processamento','Soluções','Análise','Comunicação','Sites', 'Conexão', 'Softwares', 'Parceria', 'Futuro'];
const charactersList = ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"]
let nameIndex = 0;

shuffleArray(names);

const b = baffle('#r-headline', {
    characters: charactersList,
    speed: 50
});

setInterval(changeNames, 3000);
function changeNames() {
    if (nameIndex >= names.length) {
        nameIndex = 0;
    }
    b.start();
    const name = names[nameIndex];
    b.text(text => name).reveal(1000);
    nameIndex++;
}
// Função para embaralhar um array (algoritmo de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Funçao para grudar navbar no topo
let viewHeight = 0;
function getViewPosition(){
    const nav = document.getElementById('navbar-sticky');
    if(document.body.scrollTop > 643 || document.documentElement.scrollTop > 643){
        nav.classList.add('afterscroll');
    }else{
        nav.classList.remove('afterscroll');
    }
}
addEventListener('scroll', () => getViewPosition());

// Parallax
var rellax = new Rellax('.rellax');
const produtos = document.getElementById('products');
const vinhos = [
    {
        imagem: "img/red.png",
        nome: "Vinho Tinto",
        descricao: "Descubra o sabor intenso e marcante dos nossos vinhos tintos!" 
    },
    {
        imagem: "img/dry.png",
        nome: "Vinho Seco",
        descricao: "Descubra a intensidade e o sabor do vinho seco em nossa seção exclusiva!" 
    },
    {
        imagem: "img/white.png",
        nome: "Vinho Branco",
        descricao: "Descubra a leveza e o frescor do nosso vinho branco!" 
    },
    {
        imagem: "img/rose.png",
        nome: "Vinho Rose",
        descricao: "Descubra o charme e o sabor do vinho rosé!" 
    },
    {
        imagem: "img/blend.png",
        nome: "Vinho Blend",
        descricao: "Descubra a perfeita harmonia de sabores em nossos vinhos blend!" 
    },
    {
        imagem: "img/sparkling.png",
        nome: "Espumantes",
        descricao: "Brinde à vida com nossos espumantes!" 
    }
];

function insereProdutos(vinhos){
    let html = '';
    vinhos.map(vinho => {
        const divVinho = `
        <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="${vinho.imagem}" alt="">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">${vinho.nome}</h4>
                                <h6 class="text-white">${vinho.descricao}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        html += divVinho;
    });
    return html;
} 

const htmlProdutos = insereProdutos(vinhos);
produtos.innerHTML = htmlProdutos;
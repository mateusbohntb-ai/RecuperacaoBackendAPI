import express from "express"
 
 
const app = express();
app.use(express.json());
 
const livros  = [
    {
        id: 1,
        nome: "banana",
        autor: "Carlos"
    },
    {
        id: 2,
        nome: "banana2",
        autor: "Cadu"
    },
    {
        id: 3,
        nome: "Pequeno principe",
        autor: "Paulo"
    },
 
 
]
 
 
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})
//##########################################################################################################################
//buscar livro por id 
app.get('/livros:id', (req, res) => {
    const livro = livros.find(p => p.id === Number(req.params.id));
    if (!livro) {
        return res.status(404).json({ erro: 'livro não encontrado' });
    }
    res.status(200).json(livros);
})
 
//##########################################################################################################################
app.get('/livros', (req, res) => {
    const { autor, nome } = req.query;
    if (autor || nome) {
        const livrosFiltros = livros.filter(item => item.autor.includes(autor) || item.nome.includes(nome))
        res.status(200).json(livrosFiltros);
    } else {
        res.status(200).json(livros)
    }
});
 
//##########################################################################################################################
//criar 
app.post('/livros', (req, res) => {
    const nome = req?.body?.nome || null
    const autor = req?.body?.autor || null
    if (!autor) {
        res.status(400).json({ error: ' autor é obrigatorio ' })
    }
    if (!nome) {
        res.status(400).json({ error: ' nome  é obrigatorio ' })
    }
    const novolivro = {
        id: livros.length + 1, nome: nome, autor: autor
    };
    livros.push(novolivro);
    res.status(201).json(novolivro);
})
//##########################################################################################################################
//alterar ou atualizar
app.put('/livros/:id', (req, res) => {
    const livro = livros.find(p => p.id === Number(req.params.id));
    if (!livro) { return res.status(404).json({ erro: "livro não encontrado" });
};
 
    if(req?.body.autor && req.body.nome != "") {
    livro.autor = req.body.autor;
};
 
 
    if(req?.body.nome && req.body.autor != "") {
    livro.nome = req.body.nome;
};
 
res.status(200).json(livros);
})
 
 
//##########################################################################################################################
app.delete("/livros/:id" , (req , res) => {
const indice = livros.findIndex((p) => p.id === Number(req.params.id));
if(indice === -1)
    return res.status(404).json({erro:"livro não encontrado"})
livros.splice(indice,1);
res.status(204).send({message: "excluido com sucesso"});
})
 
//##########################################################################################################################
app.get('/livros/:id/xml', (req , res ) => {
const livro = livros.find (p => p.id === Number( req.params.id));
if(!livro) {
   return res,status(404).type('application/xml').send('<erro>livro não encontrado</erro>');
}
res.status(200).type('application/xml'.send(`<id>${livro.id}</id><nome>${livro.nome}</nome><autor>${livro.autor}</autor>`))
});
//##########################################################################################################################
 
const porta = 8080;
app.listen(
    porta, () => console.log('servidor rodando na porta 8080')
);
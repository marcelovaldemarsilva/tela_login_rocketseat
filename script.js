
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handlelink(event){
  event.preventDefault();
  linksInternos.forEach((link)=>{
  link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach(  
  (links) => {
  links.addEventListener('click',handlelink)
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

function handleElemento(event){
  console.log(event.target);
}

const elemento= document.querySelectorAll('body');

elemento.forEach((elementos)=>{elementos.addEventListener('click',handleElemento)});



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleRemove(event){
   console.log(event.target.remove());
}

// elemento.forEach((elementos)=>{
//   elementos.addEventListener('click',hendleRemove)});


  // Se o usuário clicar na tecla (t), aumente todo o texto do site. 

  function handleCliqueT(event){
    let tecla = event.key;
    if(tecla==='t'){
      //document.documentElement => HTML
      //document.body => falando com a tag Body
     document.documentElement.classList.toggle('teste');
    }
    else{
      document.body.classList.remove('teste');
  
    }

  }

window.addEventListener('keydown',handleCliqueT);














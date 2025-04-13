
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    let valid = true;

    [nome, email].forEach(input => {
        if (input.value.trim() === '') {
            input.style.border = '2px solid red';
            valid = false;
        } else {
            input.style.border = '2px solid green';
        }
    });

    if (valid) {
        alert(`Obrigado por se cadastrar, ${nome.value.trim()}!`);
        this.reset();
        nome.style.border = email.style.border = '';
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});


const botaoTopo = document.createElement('button');
botaoTopo.textContent = '⬆️ Topo';
Object.assign(botaoTopo.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 15px',
    display: 'none',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#0d6efd',
    color: '#fff',
    cursor: 'pointer',
    zIndex: '1000'
});
document.body.appendChild(botaoTopo);

botaoTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    botaoTopo.style.display = window.scrollY > 300 ? 'block' : 'none';


    document.querySelectorAll('.noticia, .formulario').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
});


document.querySelectorAll('.noticia').forEach(card => {
    card.style.transition = 'transform 0.3s ease, opacity 0.6s ease';
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';

    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});


const toggleTheme = document.createElement('button');
toggleTheme.textContent = '🌓 Tema';
Object.assign(toggleTheme.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '10px 15px',
    backgroundColor: '#0d6efd',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: '1000'
});
document.body.appendChild(toggleTheme);

let modoEscuro = false;

toggleTheme.addEventListener('click', () => {
    modoEscuro = !modoEscuro;
    document.body.style.backgroundColor = modoEscuro ? '#121212' : '#ffffff';
    document.body.style.color = modoEscuro ? '#ffffff' : '#000000';

    document.querySelectorAll('.cabecalho, .rodape, .formulario button, button').forEach(el => {
        el.style.backgroundColor = modoEscuro ? '#333' : '#0415ff';
        el.style.color = '#ffffff';
    });

    document.querySelectorAll('.formulario, .noticia').forEach(el => {
        el.style.backgroundColor = modoEscuro ? '#1e1e1e' : '';
        el.style.borderColor = modoEscuro ? '#444' : '#ddd';
    });
});
const noticias = [
    {
        id: 1,
        titulo: "Título 1",
        imagem: "crzfeminino.png",
        resumo: "Resumo da notícia 1..."
    },
    {
        id: 2,
        titulo: "Título 2",
        imagem: "img2.jpg",
        resumo: "Resumo da notícia 2..."
    }
];
function renderNoticias() {
    const container = document.getElementById('noticias');
    if (!container) return;

    container.innerHTML = noticias.map(noticia => `
        <div class="card">
            <img src="${noticia.imagem}" alt="${noticia.titulo}">
            <h2>${noticia.titulo}</h2>
            <p>${noticia.resumo}</p>
            <a href="detalhes.html?id=${noticia.id}">Ver mais</a>
        </div>
    `).join('');
}

renderNoticias();



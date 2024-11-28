// Função de redirecionamento
function redirectToRestaurants() {
    window.location.href = 'restaurantes.html'; // Redireciona para a aba restaurantes
}
function redirectTohoteis() {
    window.location.href = 'hoteis.html'; // Redireciona para a aba de hotéis
}

// Seleção de elementos
const tabs = document.querySelectorAll('.tab');
const carouselItems = document.querySelectorAll('.carousel-item');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
let currentIndex = 0;

// Função para alternar entre as abas
function switchTab(activeTab) {
    // Remove a classe ativa da aba atual
    const currentActiveTab = document.querySelector('.tab.active');
    if (currentActiveTab) {
        currentActiveTab.classList.remove('active');
    }

    // Adiciona a classe ativa à nova aba
    activeTab.classList.add('active');

    // Oculta todos os conteúdos de abas e mostra o conteúdo da aba selecionada
    const activeTabContent = activeTab.getAttribute('data-tab');
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = (content.id === activeTabContent) ? 'block' : 'none';
    });
}

// Adiciona eventos de clique nas abas
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabType = tab.getAttribute('data-tab');
        if (tabType === 'restaurantes') {
            redirectToRestaurants(); // Redireciona se a aba for Restaurantes
        } else if (tabType === 'hoteis') {
            redirectTohoteis(); // Redireciona se a aba for Hotéis
        } else {
            switchTab(tab);
        }
    });
});

// Função para atualizar a visibilidade dos itens do carrossel
function updateCarousel() {
    carouselItems.forEach((item, index) => {
        // Mostra dois itens por vez, mas permite navegação entre todos os itens
        item.style.display = (index >= currentIndex && index < currentIndex + 2) ? 'flex' : 'none'; 
    });
}

// Inicializa o carrossel
updateCarousel();

// Função para ir para o item anterior no carrossel
function prevCarouselItem() {
    // Atualiza o índice atual, permitindo rotação entre todos os itens
    currentIndex = (currentIndex === 0) ? carouselItems.length - 2 : currentIndex - 2;
    updateCarousel();
}

// Função para ir para o próximo item no carrossel
function nextCarouselItem() {
    // Atualiza o índice atual, permitindo rotação entre todos os itens
    currentIndex = (currentIndex >= carouselItems.length - 2) ? 0 : currentIndex + 2;
    updateCarousel();
}

// Adiciona eventos de clique nos botões do carrossel
leftBtn.addEventListener('click', prevCarouselItem);
rightBtn.addEventListener('click', nextCarouselItem);
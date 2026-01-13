// Você pode adicionar JavaScript para carregar as imagens do carrossel/galeria dinamicamente aqui
// Por enquanto, podemos deixar vazio ou adicionar alguma funcionalidade básica.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Site da NASA carregado!');

    // Exemplo de como você usaria o spread operator ou filter em uma lista de itens (futuras fotos)
    const allImages = [
        { id: 1, title: 'Nebulosa de Órion', category: 'nebulosa', url: 'https://via.placeholder.com/400x300?text=Nebulosa+de+Orion' },
        { id: 2, title: 'Galáxia de Andrômeda', category: 'galaxia', url: 'https://via.placeholder.com/400x300?text=Galaxia+de+Andromeda' },
        { id: 3, title: 'Aurora Boreal', category: 'terra', url: 'https://via.placeholder.com/400x300?text=Auroa+Boreal' },
        { id: 4, title: 'Cratera de Marte', category: 'marte', url: 'https://via.placeholder.com/400x300?text=Cratera+de+Marte' },
    ];

    // Exemplo de uso de filter: encontrar imagens de galáxias
    const galaxyImages = allImages.filter(image => image.category === 'galaxia');
    console.log('Imagens de Galáxias:', galaxyImages);

    // Exemplo de uso de findIndex: encontrar o índice de uma imagem específica
    const andromedaIndex = allImages.findIndex(image => image.title === 'Galáxia de Andrômeda');
    console.log('Índice da Galáxia de Andrômeda:', andromedaIndex);

    // Exemplo de spread operator para combinar arrays (se você tivesse mais fontes de imagens)
    const newImages = [{ id: 5, title: 'Estrela Cadente', category: 'estrela', url: 'https://via.placeholder.com/400x300?text=Estrela+Cadente' }];
    const combinedImages = [...allImages, ...newImages];
    console.log('Imagens combinadas:', combinedImages);

    // Você pode usar o DOM para manipular a galeria na página inicial, por exemplo
    // const galleryContainer = document.getElementById('gallery-highlights');
    // if (galleryContainer) {
    //     // Aqui você poderia popular a galeria dinamicamente
    // }
});
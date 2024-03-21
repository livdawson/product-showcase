export function selectRandomProducts(products, count) {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
};

export function formatTime(time) {
    const hours = Math.max(0, Math.floor(time / 3600)); 
    const minutes = Math.max(0, Math.floor((time % 3600) / 60));
    const seconds = Math.max(0, Math.floor(time % 60));
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

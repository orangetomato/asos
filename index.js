function scrapeProduct() {
    const result = {};

    //product name
    const productNameNode = document.querySelector('.product-hero h1');
    const productName = productNameNode.textContent;
    result.productName = productName;

    //current price
    const currentPriceNode = document.querySelector('.current-price');
    const currentPrice = currentPriceNode.textContent;
    result.currentPrice = currentPrice;

    //previous price
    if (currentPriceNode.classList.contains('product-price-discounted')) {
        const previousPriceNode = document.querySelector('[data-id="previous-price"]');
        const previousPrice = previousPriceNode.textContent;
        result.previousPrice = previousPrice;
    }

    //all images
    const imageList = document.querySelectorAll('.img');
    const srcList = [];

    for (let i = 1; i < imageList.length; i++) {
        imageSrc = imageList[i].getAttribute('src');
        srcList.push(imageSrc);
    }

    result.srcList = srcList;

    //main image
    const mainImageSrc = srcList[0];
    result.mainImageSrc = mainImageSrc;

    return result;
}

scrapeProduct();
const liItems = document.querySelectorAll('li.item');
const liItemsCount = liItems.length;
console.log(`Number of categories: ${liItemsCount}`);

liItems.forEach((item) => {
    const categoryName = item.querySelector('h2').innerHTML;
    const categoryItemsCount = item.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItemsCount}`);
})
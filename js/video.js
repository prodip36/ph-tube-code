//fetch , load, show categories

//create loadCategories
const loadCategories = () =>{
//fetch
fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
.then((res)=> res.json())
.then((data) => displayCategories(data.categories))
.catch((error) => console.log(error));

};

const displayCategories = (categories) =>{
// console.log('load catergories');
// console.log(data.categories)
categories.forEach((item) => {
    console.log(item);
});
};
loadCategories();
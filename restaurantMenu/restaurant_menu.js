// const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];


var breakfastMenuHTML = breakfastMenu.map((item,index)=>`<p>Item ${index+1}:${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML=breakfastMenuHTML;

var mainCourseMenuItem = ''
mainCourseMenu.forEach((item, index)=>{
    mainCourseMenuItem += `<p>Item ${index+1}:${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML=mainCourseMenuItem;

var dessertMenuItem = ''
for(var i = 0; i<dessertMenu.length; i++){
    dessertMenuItem += `<p>Item ${i+1}:${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItem;


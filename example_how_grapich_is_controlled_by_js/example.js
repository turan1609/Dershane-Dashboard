var checkboxes = document.getElementsByClassName("checkbox");
var keeper = 0;
var degree;
var circleNumElement = document.getElementById("the-number");
circleNumElement.textContent = "%" + (keeper * 10);



console.log("Js Bağlandı");

for (var i = 0; i < checkboxes.length; i++) {//Hatanızın nedeni document.getElementsByClassName ile seçtiğiniz öğelerin bir HTMLCollection döndürmesidir. 
    checkboxes[i].addEventListener("click", function() {//addEventListener doğrudan bir HTMLCollection üzerinde kullanılamaz. Bu nedenle her bir checkbox 
        if (this.checked) {                             //öğesine ayrı ayrı olay dinleyicisi eklemelisiniz.
            console.log("Tıklandı");//Debug olarak kullandım :)
            keeper = keeper + 1;
            degree = 36 * keeper;
            console.log(keeper);
            console.log(degree);
            document.documentElement.style.setProperty('--color-danger-deg', degree + 'deg');
            circleNumElement.textContent = "%" + (keeper * 10);
        } else {
            console.log("Tıklanmadı");
            keeper = keeper - 1;
            degree = degree - 36;
            console.log(keeper);
            console.log(degree);
            document.documentElement.style.setProperty('--color-danger-deg', degree + 'deg');
            circleNumElement.textContent = "%" + (keeper * 10);
        }
    });
}

/*
    checkbox butonların html ini alıyor.
    keeper kaç tane butonun aktif olduğunu tutuyor.
    circleNumElement grafiğin içindeki %70 p tagını alıyor.
    
*/

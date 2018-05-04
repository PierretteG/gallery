/*
Úkol:
=====
Tvoříš galerii obrázků. Seznam obrázků máš uložený v poli obrazky[].
Z celé galerie je vidět vždy jen jeden obrázek.
Na stránce jsou tlačítka "Předchozí" a "Další"- při stisknutí tlačítka
zobraz předchozí/následující obrázek (nahraď zdroj "src" obrázku
jménem nového obrázku).

Na stránce je také prvek <div id="pocitadlo", do kterého vždy vypiš,
název a pořadí obrázku, na kterém se nacházíš. Např. "ovce.jpg - 3 / 5".
Mysli na to, že člověk a JavaScript přemýšlí o "prvním" obrázku
každý trochu jinak :)


Bonusový úkol:
==============
Doplň logiku, která zajistí, že po poslední fotce následuje znovu
ta první a před první fotkou je znovu ta poslední. Tzn. galerii lze
procházet v kruhu "dokola".

Tlačítka předchozí/následující nahraď malým náhledem dalšího/
předcházejícího obrázku. Všechny tři obrázky (velký aktuální a malý
předchozí/následující se samozřejmě budou měnit adekvátně tomu, jak procházíš
galerií.


Extra bonus pro mega-šprtky:
============================
Na konec stránky přidej proužek, kde budou malé náhledy všech obrázků
v galerii. Aktuální obrázek bude vždy nějakým způsobem zvýrazněn.

Co musíš udělat:
- doplnit do HTML značku, do které pak JavaScriptem vygeneruješ seznam obrázků
- trochu CSS, aby to nevypadalo úplně příšerně. Pokud CSS neovládáš tak dobře,
netrap se tím - jde nám hlavně o JavaScript. Případně se zeptej na Facebooku
a my ti rádi připravíme CSS na míru tvému řešení úkolu.
- při startu stránky musíš do svého nového HTML prvku vygenerovat seznam
všech obrázků v galerii
- aktuální obrázek zvýraznit - např. přidáním nějaké třídy s červeným rámečkem
nebo něco podobného
- při změně obrázku odstranit zvýraznění z předchozího obrázku a zvýraznit nový

Na ty malé, JavaScriptem vygenerované obrázky nemusí jít klikat. Pokud to zvládneš,
klidně to udělej. Ale není to tak snadné a ukážeme si to až později v kurzu.
*/


let obrazky = [
    'kocka.jpg',
    'opice.jpg',
    'ovce.jpg',
    'pes.jpg',
    'sova.jpg',
    'zajic.jpg'
];

let index = 0,
    aktualniObrazek = document.querySelector('#foto'),
    pocitadlo = document.querySelector('#pocitadlo'),
    nasledujiciObrazek = document.querySelector('.doprava'),
    minulyObrazek = document.querySelector('.doleva');

aktualniObrazek.src = 'obrazky/' + obrazky[index];
nasledujiciObrazek.src = 'obrazky/' + obrazky[index + 1];
minulyObrazek.src = 'obrazky/' + obrazky[index - 1];
pocitadlo.innerText = obrazky.indexOf(obrazky[index + 1]) + '/' + obrazky.length;

let sadaObrazku = document.getElementById('sadaObrazku');

for (let i = 0; i < obrazky.length; i++) {
    let fotka = document.createElement('img');
    fotka.src = 'obrazky/' + obrazky[i];
    sadaObrazku.appendChild(fotka);
}


function dalsiObrazek() {
    if (index < obrazky.length - 1) {
        index++;


    } else {
        index = -1;

    }
    aktualniObrazek.src = 'obrazky/' + obrazky[index];
    nasledujiciObrazek.src = 'obrazky/' + obrazky[index + 1];
    minulyObrazek.src = 'obrazky/' + obrazky[index - 1];

    if (index != obrazky.length - 1) {
        pocitadlo.innerText = obrazky.indexOf(obrazky[index + 1]) + '/' + obrazky.length;
    } else {
        pocitadlo.innerText = obrazky.length + '/' + obrazky.length;
    }
}

function predchoziObrazek() {
    if (index < 0) {
        index = obrazky.length - 1;
        minulyObrazek.src = 'obrazky/' + obrazky[obrazky.length - 2];
        nasledujiciObrazek.src = 'obrazky/' + obrazky[-1];


    } else {
        index--;
        if (index === -1) {
            minulyObrazek.src = 'obrazky/' + obrazky[obrazky.length - 1];
            nasledujiciObrazek.src = 'obrazky/' + obrazky[0];
        } else {
            minulyObrazek.src = 'obrazky/' + obrazky[index - 1];
            nasledujiciObrazek.src = 'obrazky/' + obrazky[index + 1];
        }
    }
    aktualniObrazek.src = 'obrazky/' + obrazky[index];



    if (index != obrazky.length - 1) {
        pocitadlo.innerText = obrazky.indexOf(obrazky[index + 1]) + '/' + obrazky.length;
    } else {
        pocitadlo.innerText = obrazky.length + '/' + obrazky.length;
    }

}
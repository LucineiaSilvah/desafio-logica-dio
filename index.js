let heroi = [['Wolverine'],[5.000]]
let hero = heroi[0]
let xp = heroi[1]
let anuncio = "O Herói " + hero + ' Esta no Nivel de ';

 if(xp < 1.000){
  console.log(anuncio + " Ferro");
 }else if(xp >= 1.001 && xp <= 2.000){
  console.log(anuncio + " Bronze" );
 }else if(xp >= 2.001 && xp <= 5.000){
  console.log(anuncio + " Prata" );
 }else if(xp >= 6.001 && xp <= 7.000){
  console.log(anuncio + " Ouro" );
 }else if(xp >= 7.001 && xp <= 8.000){
  console.log(anuncio + " Platina" );
 }else if(xp >= 8.001 && xp <= 9.000){
  console.log(anuncio + " Ascendente" );
 }else if(xp >= 9.001 && xp <= 10.000){
  console.log(anuncio + " Imortal" );
 }else if(xp > 10.001){
  console.log(anuncio + " Radiante" );
 }else{
  console.log("XP não se enquadra nos Niveis");
 }
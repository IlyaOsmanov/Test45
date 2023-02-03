var num_0 = prompt("Rol- student");
var num_1 = prompt("Rol- Prepodavatel");
var num_2 = prompt("Situacia- Zachet");
var num_3 = prompt("Rezultat1- Sdal");
var num_4 = prompt("Rexultat2- neSdal");
var num_5 = prompt("Itog1- domoi");
var num_6 = prompt("Itog2- naPerespachy");

alert(`${num_0}
${num_1}
${num_2}
${num_3}
${num_4}
${num_5}
${num_6}`);

let dif1 = document.createElement('div');
let dif2 = document.createElement('div');
let dif3 = document.createElement('div');
let dif4 = document.createElement('div');
let dif5 = document.createElement('div');
let dif6 = document.createElement('div');

dif1.className = "msg1";
dif2.className = "msg2";
dif3.className = "msg3";
dif4.className = "msg4";
dif5.className = "msg5";
dif6.className = "msg6";

dif1.innerHTML = "Prisel student ko mne na zachet, chto ego ghdet?" + num_1;
document.body.append(dif1);

dif2.innerHTML = "zachet neghdano prishel v ghizni" + num_0;
document.body.append(dif2);

dif3.innerHTML = "zachet prohodit ytrom rano" + num_1;
document.body.append(dif3);

dif4.innerHTML = "pervii student" + num_3;
document.body.append(dif4);

dif5.innerHTML = "vtoroi student" + num_4;
document.body.append(dif5);

dif6.innerHTML = "Kto domoi, a kto to na peresdachy" + num_1;
document.body.append(dif6);
 var carList = [
     {cars:'Toyota',type: 'Newcamry'},
     {cars:'Honda',type:'Jazz'},
     {cars:'Suzuki',type:'Carry'},
     {cars:'Mazda',type:'Cx'},
     {cars:'Ferari',type:'Portofino'},
 ];
 carList.shift();
 carList.unshift({cars:'Toyota',type:'Corolla'});
 carList.unshift({cars:'lambhorghini',type:'Aventador'});
 carList.unshift({cars:'Volkswagen',type:'comby'});

console.log(carList);



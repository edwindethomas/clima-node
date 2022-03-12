const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Searches = require("./models/searches");

const main = async ()=>{
  const searches = new Searches();
  let opt;
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        //Mostrar mensaje
        const place = await leerInput('Ingresa el lugar a buscar: ');
        console.log(place);
        //Busca los lugares
        //Seleccionar el lugar
        //Datos del clima
        //Mostrar resultados
        console.log('\nInformacion de la ciudad\n'.green);
        console.log('Ciudad:', );
        console.log('Lat:', );
        console.log('Lng:', );
        console.log('Temp:', );
        console.log('Min:', );
        console.log('Max:', );
        break;
      case 2:
        
        break;
    }
    if(opt !== 0) await pausa();
  } while (opt !== 0);
}
main();
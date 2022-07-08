///////// importacion de Conecion Database /////
const { getconection } = require("../Database/connection");
//// Importacion de los querys///////
const sql = require("mssql");
const querys = require("../Database/querys");

//////////// Peticiones ///////////
const obtenerPeliculas = async () => {
    const pool = await getconection();
    const request = await pool.request().query(querys.obtenerPeliculas);
    return request.recordsets;
  };
  const getCities = async function() {
    const pool = await getconection();
    var request = await pool.request()
    .input('num_query', sql.Int, 1)
    .execute('GetImmediateManager')
   return request.recordsets;
  }
  
  module.exports = {
    obtenerPeliculas,
    getCities,
  };


[
  { caribetoursSantiago: [19.479268086995326, -70.71795443866199] },
  { Katanga: [18.51072507106342, -69.86276382612864] },
  { Gerra: [18.529241829660783, -69.7417199491121] },
];
  

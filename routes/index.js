var express = require('express');
var router = express.Router();
const conn = require("../sql");
function query(query = '') {
  return new Promise((resolve, reject) => {
    conn.query(query, function (error, query_resource_obj) {
      if (error) {
        return resolve(false);
      } else {
        resolve(query_resource_obj);
      }
    });
  });
}
/* GET home page. */
router.get('/', async function (req, res, next) {
  let data = await query("select * from location");
  let result = {
    "status": true,
    "data": data
  }
  res.status(200).json(result);
});

module.exports = router;

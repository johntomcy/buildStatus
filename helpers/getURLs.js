const lib = require('lib')({token: process.env.STDLIB_LIBRARY_TOKEN});

async function getData() {
  let workflow = {};

  workflow = await lib.airtable.query['@0.3.3'].select({
    table: "URIs", // required
    where: [
      {}
    ],
    limit: {
      'count': 0,
      'offset': 0
    }
  }).then(r => { 
    return r.rows.map(n => { 
      return { 
        url: n.fields.URL,
        displayName: n.fields.Description,
        id: n.id
      } 
    }) 
  });

  return workflow;
}
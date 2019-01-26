const Nightmare = require('nightmare');
const nightmare = Nightmare({"show":true});
const $ = require('cheerio');

nightmare.goto('https://www.mercadolibre.com.mx/?matt_tool=6523024&matt_word=mercado_libre&gclid=Cj0KCQiA8_PfBRC3ARIsAOzJ2uqOmnBY_bKtiuD2MmEODk58WZFirE8qAqy_olFjmeu29pt_uPyRGdAaAvWHEALw_wcB')
.type('.nav-search-input','xbox 360')
.click('.nav-search-btn')
.wait(5000)
.then()
.catch(error=>{
    console.log(error);
});



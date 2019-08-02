const handlebars = require('express-handlebars');
const path = require('path');

const hbs = handlebars.create({
  defaultLayout: 'layout',
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views'),
  partialsDir: path.join(__dirname, 'views'),
});

const exposeTemplate = async function (req, res, next) {
  const instructions = await hbs.getTemplate('views/instructions.hbs', {
    precompiled: true,
  });
  const playSounds = await hbs.getTemplate('views/playSounds.hbs', {
    precompiled: true,
  });
  const test = await hbs.getTemplate('views/test.hbs', {
    precompiled: true,
  });
  const stat = await hbs.getTemplate('views/stat.hbs', {
    precompiled: true,
  });
  const register = await hbs.getTemplate('views/register.hbs', {
    precompiled: true,
  });
  res.register = register;
  res.instructions = instructions;
  res.test = test;
  res.stat = stat;
  res.playSounds = playSounds;
  next();
};

module.exports = { hbs, exposeTemplate };

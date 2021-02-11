const path = require('path');
const ip = require('ip');

module.exports.index_get = (req, res, next) => {
  res.render('index');
};

module.exports.index_post = (req, res, next) => {
  const fullFileName = req.files.file.name;
  const imagePath = path.resolve(__dirname, `../public/files/${fullFileName}`);

  req.files.file.mv(imagePath, (err) => {
    if (err) {
      console.log(err);
      res.redirect('/');
    } else {
      console.log('File Moved..');
      res.render('success', { fileUrl: `/files/${fullFileName}` });
    }
  });
};

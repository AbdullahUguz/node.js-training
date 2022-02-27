const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);


/*
// creating
Photo.create({
  title: 'aleykum1',
  description: 'as32323',
});
*/



/*
// read a photo
Photo.find({}, (err, data) => {
  console.log(data);
});
*/



/*
// update a photo
const id = '6214f93884ac2e7c220e0e81';
Photo.findByIdAndUpdate(
  id,{
    title: 'photo 1 updatedasdadasd ',
    description: 'sanane iki bucuk',
  },
  {
    new:true
  },
  (err, data) => {
    console.log(data);
  }
);
*/

// delete a photo

const id = '6214f93884ac2e7c220e0e81';
Photo.findByIdAndDelete(id,(err,data)=>{
  console.log('Photos removed')
})

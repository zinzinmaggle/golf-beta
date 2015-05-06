if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Hi ! ',
    subtitle : 'First use',
    author : 'Admin' ,
    date : '21/05/2015',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  
}
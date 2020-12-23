var images = ["elephant.jpg", "cat-redflower.jpg",
  "bees.jpg", "blue_skirt.jpg", "cat.jpg", "dalmatian.jpg", "bear.jpg", "giraffe.jpg", "giraffe_side.jpg", "hedgehogs.jpg", "jack_russels.jpg", "letter.jpg","penguins.jpg", "pink_sofa.jpg", "sofa.jpg", "squirrel.jpg", "wasp.jpg", "wasp0.jpg", "bubble-flower.jpg", "dress.jpg", "bubble.jpg", "rabbit.jpg", "bluedress.jpg", "bee.jpg", "bike.jpg"
];

var current = 0;

function next() {
  current = (current + 1) % images.length; //after the first click current is 1; if current is 4, the length is 4, 4 modulus 4 is 0, so we return to 0.

  var myImage = document.getElementById('image'); //connect it to line 25
  myImage.src = "images/" + images[current]; //parameter in the opening tag in line 23 is src, so I set src into something, I just use the index of current

}
function previous() {
  current = (current - 1 + images.length) % images.length;

  var myImage = document.getElementById('image');
  myImage.src = "images/" + images[current];

}

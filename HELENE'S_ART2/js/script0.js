const images = [
    "elephant.jpg", "bubble-flower.jpg",
    "bike-flower.jpg", "table.jpg"
  ];

  var current = 0; //allows to take the images from the array

  function change(obj) {
    current = obj.value; //take the object and why value because in value I have the next image; by clicking on 2nd button the current changes to value 1!
    var src = "images/" + images[current]; //now after line 12 did the job, I add "images/" in front of what line 12 got me and then I get the actual image

    document.getElementById("image").src = src; //cos ID is image - line 24; to obtain the image I do document.getElementById("image"), then I change the src property of the image an then to line 10
  }

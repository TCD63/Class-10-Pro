var weight = [48, 53, 64, 72];


function setup() 
{
  createCanvas(400,400);

  var sum = weight[0] + weight[1] + weight[2] + weight[3];
  var avg = sum/weight.length;
  console.log (avg)
}

function draw() 
{
background(51);

}


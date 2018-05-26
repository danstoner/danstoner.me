<?php
echo "Doing some work....<br>";

// allocate a random sized array
$mymax = rand(1,1000);
$myarray = array($mymax);

// fill the array with random numbers
for ($x=0; $x<=$mymax; $x++)
  {
    $mypos = $x;

    $myrand = (int) (rand(1,1000) / rand(1,10));

    $myarray[$mypos] = $myrand;
  }

echo "A random position in the array contains: ". $myarray[(rand(1,$mymax))]."<br>";
echo "<hr>";
// spit out the whole array
var_dump($myarray);


?>

#pragma strict

import UnityEngine.UI; // gives access to the Text type

var scoreText : Text;

function Start () 
{
	scoreText.text = "SCORE: " + GameMaster.finalScore; // GameMaster is capitalized because it's a static variable
}
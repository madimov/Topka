#pragma strict

var rotationSpeed = 100;
var jumpHeight = 8;

var Hit01 : AudioClip;
var Hit02 : AudioClip;
var Hit03 : AudioClip;

var distToGround : float;

function Start ()
{
	// Getting the distance from the center to the ground.
	distToGround =  GetComponent.<Collider>().bounds.extents.y;
}

function Update () 
{
	// Handle ball rotation.
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	rotation *= Time.deltaTime;
	GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation);
	
	if (Input.GetKeyDown(KeyCode.W) && IsGrounded())
	{
		GetComponent.<Rigidbody>().velocity.y = jumpHeight;
	}
}

function IsGrounded () : boolean
{	// Check if we are on the ground. Return true if we are, else return null.
	return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
}

function OnCollisionEnter ()
{
	var theHit = Random.Range(0, 2);
	if (theHit == 0)
	{
		GetComponent.<AudioSource>().clip = Hit01;
	}
	else
	{
		GetComponent.<AudioSource>().clip = Hit02;
	}
	
	GetComponent.<AudioSource>().pitch = Random.Range(0.9,1.1);
	GetComponent.<AudioSource>().Play();
}
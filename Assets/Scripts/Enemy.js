﻿#pragma strict

var player : Rigidbody;
var bounceAmount = 10f;

var deathParticles : Transform;

var deathSound : AudioSource;

var colliders : Transform;

var enemyAnim : Animator;
private var centerAnim : Animator;

function Awake () {
	centerAnim = transform.GetComponent ("Animator") as Animator; // explicit casting to avoid warning
}

function Die () {
	player.GetComponent.<Rigidbody>().velocity.y = bounceAmount;
	Instantiate (deathParticles, enemyAnim.transform.position, enemyAnim.transform.rotation);
	deathSound.Play();
	enemyAnim.SetTrigger ("Die");
	centerAnim.SetTrigger ("Stop");
	Destroy (colliders.gameObject);
	// Destroy(gameObject);
}
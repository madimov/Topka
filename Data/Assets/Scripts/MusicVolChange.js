#pragma strict 

var Music : AudioSource; 

public function SetGameVolume (vol : float) 
{
	DontDestroyOnLoad(Music); 
	Music.volume = vol; 
}
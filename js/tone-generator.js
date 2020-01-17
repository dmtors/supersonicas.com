window.ToneGenerator = {
	"isPlaying": false,
	"stop": function() {
		window.ToneGenerator.oscillator.disconnect();
	},
	"play": function(value) {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		window.ToneGenerator.context = new AudioContext();
		var gainNode = window.ToneGenerator.context.createGain ? window.ToneGenerator.context.createGain() : window.ToneGenerator.context.createGainNode();

		//context = new window.AudioContext();
		window.ToneGenerator.oscillator = window.ToneGenerator.context.createOscillator(),
				window.ToneGenerator.oscillator.type ='triangle';
		//gainNode = createGainNode();
		window.ToneGenerator.oscillator.connect(gainNode);
		gainNode.connect(window.ToneGenerator.context.destination);
		window.ToneGenerator.oscillator.frequency.value = value;
		gainNode.gain.value = 1;
		window.ToneGenerator.oscillator.start(0);
	  // context.createGain().gain.exponentialRampToValueAtTime(0.1, context.currentTime + 0.1);
	  	// if (window.ToneGenerator.isPlaying) {
	  	// 	window.ToneGenerator.stop();
	  	// 	window.ToneGenerator.oscillator.frequency.setValueAtTime(value, window.ToneGenerator.context.currentTime)
	  	// } else {
	  	// 	
	  		
	  	// 	// window.ToneGenerator.togglePlay();
	  	// }
	  	
	},
	"updateTone": function(value) {
		window.ToneGenerator.oscillator.frequency.setValueAtTime(value, window.ToneGenerator.context.currentTime)
	},

	"togglePlay": function(value) {
		if (!(window.ToneGenerator.isPlaying)) {
			window.ToneGenerator.play(value);
		} else {
			window.ToneGenerator.stop();
		}
		window.ToneGenerator.isPlaying = (!(window.ToneGenerator.isPlaying))
	}
};
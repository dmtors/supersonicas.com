const Application = function(cb) {
  this.tuner = new Tuner()
  this.cb = cb;
}

Application.prototype.start = function(cb) {
  const self = this

  this.tuner.onNoteDetected = function(note) {
    if (self.lastNote === note.name) {
      self.cb(note);
    } else {
      self.lastNote = note.name
    }
  }
    self.tuner.init()
    self.frequencyData = new Uint8Array(self.tuner.analyser.frequencyBinCount)
}  

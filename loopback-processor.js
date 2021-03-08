class Loopback extends AudioWorkletProcessor {
  constructor() {
    super();
    console.info('Constructed loopback');
  }

  process(inputs, outputs, parameters) {
    if (!inputs) {
      console.warn('No inputs.');
    }

    // Mono only.
    const input = inputs[0][0];
    const output = outputs[0][0];
    if (!input) {
      console.warn('No input; waiting.');
      return true;
    }
    for (let i = 0; i < 128; ++i) {
      output[i] = input[i];
    }
    return true;
  }
}

registerProcessor('loopback-worklet', Loopback);

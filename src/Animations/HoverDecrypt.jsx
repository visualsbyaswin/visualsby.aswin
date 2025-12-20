const letters = "ABCDEFGHIJKLMNOPQRSTUVWXY";

// store original texts here (does NOT modify DOM)
const originalMap = new WeakMap();

export const runDecrypt = (el, duration = 2) => {
  // save original text if not stored
  if (!originalMap.has(el)) {
    originalMap.set(el, el.textContent);
  }

  const originalText = originalMap.get(el);
  const charsArray = originalText.split("");

  // split into spans
  el.innerHTML = "";
  const spans = charsArray.map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    el.appendChild(span);
    return span;
  });

  // random 3–4 letter animation
  const animateCount = Math.min(3 + Math.floor(Math.random() * 2), spans.length);
  const indices = [];

  while (indices.length < animateCount) {
    const r = Math.floor(Math.random() * spans.length);
    if (!indices.includes(r)) indices.push(r);
  }

  indices.forEach((index) => {
    const span = spans[index];
    let iterations = 0;
    const maxIterations = 10 + Math.floor(Math.random() * 10);

    const animateChar = () => {
      if (iterations < maxIterations) {
        span.textContent = letters[Math.floor(Math.random() * letters.length)];
        iterations++;
        requestAnimationFrame(animateChar);
      } else {
        span.textContent = charsArray[index];
      }
    };

    setTimeout(animateChar, index * (duration * 50));
  });
};

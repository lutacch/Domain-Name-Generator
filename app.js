let pronoun = ["the", "our", "my", "your", "the", "their"];
let adj = ["great", "big", "amazing", "superlative", "super"];
let noun = ["jogger", "racoon", "dog", "cat", "coconut"];

for (let a = 0; a < pronoun.length; a++) {
  for (let i = 0; i < adj.length; i++) {
    for (let x = 0; x < noun.length; x++) {
      let hola = document.createElement("div");
      hola.innerText = `${pronoun[a]}${adj[i]}${noun[x]}.com`;
      document.body.appendChild(hola);
    }
  }
}

/** @format */

const tags = ["react", "node", "express", "react", "mongodb", "node", "react"];

function countTags(tags) {
  const counter = {};

  for (let i = 0; i < tags.length; i++) {
    counter[tags[i]] = (counter[tags[i]] || 0) + 1;
  }
  return counter;
}

console.log(countTags(tags));

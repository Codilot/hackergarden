window.onload = function () {
  document.body.className += "loaded";
};

function createImages(postId, node) {
  fetch(`https://instagram.com/p/${postId}/media/?size=m`)
    .then((response) => {
      return response.url;
    })
    .then((url) => {
      let image = new Image();
      image.src = url;
      node.appendChild(image);
    });
}

const $element = document.querySelector(".hackergarden__instagram");
let instaNodes = $element.querySelectorAll("div[data-id]");
if (instaNodes) {
  instaNodes.forEach((instaNode) => {
    createImages(instaNode.dataset.id, instaNode);
  });
}

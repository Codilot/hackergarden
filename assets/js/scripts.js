function createImagesFromInstagram(postId, node) {
  fetch(`https://instagram.com/p/${postId}/media/?size=m`)
    .then((response) => {
      console.log(response);
      return response.url;
    })
    .then((url) => {
      let placeholder = node.querySelector(
        ".hackergarden__loading__placeholder"
      );
      node.removeChild(placeholder);
      let image = new Image();
      image.src = url;
      node.appendChild(image);
    });
}

const $element = document.querySelector(".hackergarden__instagram");
if ($element) {
  let instaNodes = $element.querySelectorAll("div[data-id]");
  if (instaNodes) {
    instaNodes.forEach((instaNode) => {
      createImagesFromInstagram(instaNode.dataset.id, instaNode);
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");
  
    const artworks = [
      { image: "artwork1.jpg", description: "Artwork 1 description" },
      { image: "artwork2.jpg", description: "Artwork 2 description" },
      { image: "artwork3.jpg", description: "Artwork 3 description" },
      // Add more artworks as needed
    ];
  
    artworks.forEach(artwork => {
      const item = document.createElement("div");
      item.classList.add("gallery-item");
  
      const image = document.createElement("img");
      image.src = artwork.image;
      item.appendChild(image);
  
      const description = document.createElement("p");
      description.textContent = artwork.description;
      item.appendChild(description);
  
      gallery.appendChild(item);
    });
  });
  
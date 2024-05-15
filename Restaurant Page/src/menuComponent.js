import menuBackground from './assets/images/menu-bg.jpg';

function menuComponent() {
  const content = document.getElementById('content');

  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-container');
  
  const menuBG = new Image();
  menuBG.classList.add('menu-bg');
  menuBG.src = menuBackground;
  menuContent.appendChild(menuBG);

  const menu = [
    {
      title: 'USDA PRIME BEEF',
      description: 'All steaks are finished with garlic-herb butter and seasalt. Served with a choice of one side.',
      items: [
        'NEW YORK STRIP 12OZ',
        'SIRLOIN',
        'RIBEYE 16OZ',
        'FILET MIGNON',
        'TOMAHAWK 55OZ',
        'BONE-IN KANSAS CITY STRIP 180Z'
      ],
      prices: [49, 36, 59, 49, 149, 55]
    },
    {
      title: 'SUSHI ROLLS',
      description: 'Accompanied by Bloody Mary Sauce, Riesling Mignonette, Lemon-Thyme Aioli',
      items: [
        'CRISPY TUNA SUSHI',
        'HIROSHI ROLL',
        'HUDSON ROLL',
        'BLU POINTE ROLL',
        'TUNA CRUDO',
        'HAMACHI CRUDO'
      ],
      itemDescription: [
        'Crispy Rice, Dynamite Sauce, Ginger-Soy',
        'Shrimp Tempura, Avocado, Spicy Tuna, Dynamite Sauce',
        'Lump Crab, Yellowtail, Avocado, Jalapeño, Dynamite Sauce, Tobiko, Ponzu',
        'Maine Lobster, Tempura Crunch, A5 Wagyu, Tobiko Black Truffle Mayo, Ponzu',
        'Blood Orange Yuzu Viniagrette, Jalepeños, Cilantro',
        'Green Apple, Serrano Chiles, Citrus & Cilantro'
      ],
      prices: [20, 19, 23, 38, 21, 23]
    },
    {
      title: 'SURF',
      items: [
        'ALASKAN KING CRAB LEGS',
        'BLACKENED SWORDFISH',
        'SOLE FRANCESE',
        'SEARED SCALLOPS',
        'HIDDENFJORD SALMON',
        'WHOLE GRILLED BRONZINO',
        'SOUTH AFRICAN LOBSTER TAILS',
        'SQUID INK PASTA',
        'LOBSTER MAC AND CHEESE'
      ],
      itemDescription: [
        'Crispy Yukon Gold Potatoes, Grilled Asparagus, Garlic-Herb Butter',
        'Oven Roasted Tomatoes, Cauliflower Hash, Spinach, Lemon',
        'Battered Fillet of Sole, Lemon-White Wine Butter Sauce, Capellini',
        'Whipped Parsnip Puree, Roasted Mushrooms, Black Truffle Vinaigrette',
        'Crab Fried Rice, Sesame Spinach, Sweet & Spicy Gogujang, Pickled Cucumber',
        'Charred Lemon Vinaigrette, Haricot Verts & Crispy Potatoes',
        'Crushed Yukon Gold Potato, Spinach, Garlic-Herb Butter',
        'Squid Ink Spaghetti, Seared Shrimp, Caramelized Fennel, Calabrian Chili, Blistered Grape Tomatoes',
        'Imported Gobetti Pasta, Fresh Picked Whole Maine Lobster, Creamy Fontina Cheese Sauce, Buttery Ciabatta Crumbs'
      ],
      prices: [79, 44, 34, 44, 39, 39, 79, 36, 48]
    },
    {
      title: 'TURF',
      items: [
        'PAN-ROASTED CHICKEN',
        'CHICKEN PARMIGIANA',
        'ORECCHIETTE',
        'BISTRO STEAK AU POIVRE',
        'COLORADO LAMB CHOPS',
        'GNOCCHI',
        'FRENCH ONION BURGER',
        'PRIME STEAK SANDWICH'
      ],
      itemDescription: [
        'Frenched Breast, Roasted Garlic Mashed Potatoes, Roasted Heirloom Carrots, Pan Jus',
        'Parmesan-Herb Crusted Breast, Fresh Mozzarella, Pesto, Linguine',
        'Roasted Eggplant, Fresh Mozzarella, San Marzano Tomatoes, Basil Pesto',
        'Crushed Yukon Gold Potatoes, Grilled Asparagus, Cognac Peppercorn Cream',
        'Creamy Farro, Roasted Winter Vegetables, Cherry Mostarda, Mint',
        'Short Rib Ragu, Stracciatella',
        'Blend Of Brisket & Short Rib, Caramelized Onions, Gruyère, Sherry Reduction, Toasted Brioche',
        'NY Strip, Tillamook Cheddar, Caramelized Mushrooms & Onions, Garlic Bread Baguette'
      ],
      prices: [34, 32, 28, 46, 69, 36, 25, 32]
    }
  ];


  menu.forEach(section => {
    const sectionContainer = document.createElement('div');
    sectionContainer.classList.add('menu-section-container');
    menuContent.appendChild(sectionContainer);

    const title = document.createElement('h1');
    title.classList.add('menu-title');
    title.textContent = section.title;
    sectionContainer.appendChild(title);

    const divider = document.createElement('div');
    divider.classList.add('divider');
    sectionContainer.appendChild(divider);

    const sectionDescription = document.createElement('p');
    sectionDescription.classList.add('section-description');
    sectionDescription.textContent = section.description;
    sectionContainer.appendChild(sectionDescription);

    const ul = document.createElement('ul');
    ul.classList.add('menu-list');
    sectionContainer.appendChild(ul);

  section.items.forEach((item, index) => {
    const li = document.createElement('li');

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('menu-items');
    itemDiv.textContent = item;

    if (section.hasOwnProperty('itemDescription')) {
      const descriptionDiv = document.createElement('div');
      descriptionDiv.classList.add('item-description');
      descriptionDiv.textContent = section.itemDescription[index];
      itemDiv.appendChild(descriptionDiv);
    }

    const priceDiv = document.createElement('div');
    priceDiv.classList.add('menu-item-price');
    priceDiv.textContent = section.prices[index];

    li.appendChild(itemDiv);
    li.appendChild(priceDiv);

    ul.appendChild(li);
  });
});

  content.appendChild(menuContent);
}

export default menuComponent;


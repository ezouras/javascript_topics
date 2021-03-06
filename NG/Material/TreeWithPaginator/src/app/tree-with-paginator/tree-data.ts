export interface treeNode {
  label: string,
  url?: string,
  children?: Array<treeNode>
}

export const tree: Array<treeNode> = [{
  label: "Rainbo Foods",
  url: "http://rainbow-foods.org/",
  children: [
    {
      label: "Purple", children: [
        { label: "Blackberries" },
        { label: "Forbidden Rice" },
        { label: "Purple Sweet Potatoes" },
        { label: "Purple Carrots" },
        { label: "Redbor Kale" },
        { label: "Passion Fruit" },
        { label: "Purple Mangosteen" },
        { label: "Purple Asparagus" },
        { label: "Acai Berries" },
        { label: "Purple Star Apple" },
        { label: "Purple Cabbage" },
        { label: "Elderberries" },
        { label: "Red Dragon Fruit" },
        { label: "Purple Barley" },
        { label: "Brusselberry Sprouts" }

      ]
    },
    {
      label: "Blue", children: [
        { label: "Blueberries" },
        { label: "Blackberries" },
        { label: "Elderberries" },
        { label: "Concord Grapes" },
        { label: "Black Currants" },
        { label: "Damson Plums" },
        { label: "Blue Tomatoes" },
        { label: "Blue Corn" },
        { label: "Red Cabbage" },
        { label: "Purple Potatoes" },
        { label: "Cornflowers" },
        { label: "Borage" },
        { label: "Butterfly Blue Pea" },
        { label: "Pickled Garlic" },
        { label: "Bluefoot Mushrooms" },
        { label: "Blewit Mushrooms" }
      ]
    },
    {
      label: "Red", children: [
        { label: "Red Peppers" },
        { label: "Cranberries" },
        { label: "Pomegranate" },
        { label: "Cherries" },
        { label: "Tomatoes" },
        { label: "Red Skinned potatoes" },
        { label: "Strawberries" },
        { label: "Raspberries" },
        { label: "Watermelon" },
        { label: "Red Apples" },
        { label: "Red Chilli Peppers" },
        { label: "Prickly Pear" },
        { label: "Red Grapes" },
        { label: "Plums" },
        { label: "Blood Orange" },
        { label: "Rhubarb" },
        { label: "Radishes" },
        { label: "Red Spinach" },
        { label: "Red Onion" },
        { label: "Radicchio" },
        { label: "Beets" },
        { label: "Plum Dragon Fruit" },
        { label: "Red Cabbage" },
        { label: "Acerola" },
        { label: "LingonBerries" },
        { label: "Red Currants" },
        { label: "Rose Hip" },
        { label: "Rambutan" },
        { label: "Oca" },
      ]
    },
    {
      label: "Yellow", children: [
        { label: "Yellow Pepper" },
        { label: "Pineapple" },
        { label: "Banana" },
        { label: "Potato" },
        { label: "Lemon" },
        { label: "Corn" },
        { label: "Tumeric" },
        { label: "Yellow Courgette" },
        { label: "StarFruit" },
        { label: "Asian Pear" },
        { label: "Mango" },
        { label: "Jackfruit" },
        { label: "Chanterelles" },
        { label: "Quinoa" },
        { label: "Polenta" },
        { label: "Pumpkin" },
        { label: "Yellow Apples" },
        { label: "Yellow Kiwi" },
        { label: "Yellow Watermelon" },
        { label: "Summer Squash" },
        { label: "Yellow Beets" },
        { label: "Yellow Tomatoes" },
        { label: "Celeriac" },
        { label: "Sunchoke" },
        { label: "Manioc" },
        { label: "Jicama" },
      ]
    },
    {
      label: "Green", children: [
        { label: "Broccoli" },
        { label: "Spinach" },
        { label: "Kale" },
        { label: "Collard Greens" },
        { label: "Bok Choy" },
        { label: "Cabbage" },
        { label: "Napa Cabbage" },
        { label: "Okra" },
        { label: "Turnip Green" },
        { label: "Celery" },
        { label: "Mustard Greens" },
        { label: "Romain Lettuce" },
        { label: "Lime" },
        { label: "Zucchini" },
        { label: "Peas" },
        { label: "Lima Beans" },
        { label: "Edamame" },
        { label: "Green Beans" },
        { label: "Bibb Lettuce" },
        { label: "Iceberg Lettuce" },
        { label: "Cucumber" },
        { label: "Granny Smith Apple" },
        { label: "Dill Pickle" },
        { label: "Gherkins" },
        { label: "Olives" },
        { label: "Jalepeno" },
        { label: "Anaheim Pepper" },
        { label: "Guacamole" },
        { label: "Avocado" },
        { label: "Mint" },
        { label: "Pistachio" },
        { label: "Green Tea" },
        { label: "Green Tea" },
        { label: "Cilantro" },
        { label: "Parsley" },
        { label: "Basil" },
        { label: "Thyme" },
        { label: "Green Tomatoes" },
        { label: "Rosemary" },
        { label: "Fennel" },
        { label: "Dill" },
        { label: "Red Leaf Lettuce" },
        { label: "Chicory" },
        { label: "Oregano" },
        { label: "Green Beans" },
        { label: "Seaweed" },
        { label: "alfalfa Sprouts" },
        { label: "Pears" },
        { label: "Gooseberry" },
        { label: "Honeydew" },
        { label: "Green Onions" },
        { label: "Asparagus" },
        { label: "Chives" },
        { label: "Kiwi" },
        { label: "Green Apples" },
        { label: "Brussel Sprouts" },
        { label: "Endive" },
        { label: "Watercress" },
        { label: "Snowpeas" },
        { label: "Broccoli Rabe" },
        { label: "Artichoke" },
        { label: "Arugula" },
        { label: "Chayote" },
        { label: "Leek" },
        { label: "Bell Pepper" },
        { label: "Romanesco" },
        { label: "Kohlrabi" },
        { label: "Yard Long Beans" },
        { label: "Nopales" },

      ]
    },
  ]
},
{
  label: "Human-Transport",
  children: [
    {
      label: "Motorized",
      children: [
        {
          label: "car", children: [
            {
              label: "Honda-Car-Co", children: [
                {
                  label: "Honda", children: [
                    {
                      label: "Accord", children: [
                        {
                          label: "Four-door", children: [
                            { label: "blue" },
                            { label: "red" }
                          ]
                        },
                        { label: "Two-door" }
                      ]
                    }
                  ]
                },
                {
                  label: "Acura", children: [
                    { label: "LSX" },
                    { label: "Integra" }
                  ]
                }
              ]
            },
            {
              label: "FCA", children: [
                { label: "Chrylser", children: [] },
                { label: "Fiat", children: [] }
              ]
            }
          ]
        },

      ],
    },
    {
      label: "Human-Powered",
      children: [
        { label: "bicycle" },
        { label: "walk" }
      ]
    }
  ]
}
]

# Format of scraped menus

For one resturant:
* one .json file
* one or many menu groups
* a menu group is an array of menu items
* a menu item is an object

## Menu item format
### Example:
    {
      "name": "Delicious noodles",
      "price": 4.50,
      "description": "Lots of boiled noodles with delicious sauce",
      "imageUrl": "http://www.placeimg.com/320/480"
    }

The name is required, but the rest of the values are optional.
The imageUrl should point to a thumbnail image of the dish if one is available.

The above example might be inside an array named "Noodle dishes".
var storage =
{
    name: 'Van Van Ba Cham',
    address: 'Ha Noi',
    owner: 'Nguyen Ngoc Huyen',
    items:
        [
            { id: 1, name: 'product 1', category: 'category 1', price: 10 },
            { id: 2, name: 'product 2', category: 'category 2', price: 20 },
        ]
}
var action, action1, action3, action4;
var again, again1, again2, again3, again4;
var itemsFound = [], found = false, t;
do {
    action = Number(prompt("Choose your action:\n0. Do nothing\n1. Edit storage information\n2. Create an item in storage\n3. Find an item\n4. Delete an item"));
    while (action != 0 && action != 1 && action != 2 && action != 3 && action != 4)
        action = Number(prompt("Invalid action. Please enter again.\n\nChoose your action:\n1. Edit storage information\n2. Create an item in storage\n3. Find an item\n4. Delete an item"));
    if (action == 0) break;
    else if (action == 1) {
        do {
            action1 = Number(prompt("Choose information field to edit:\n0. Do nothing\n1. Storage name\n2. Storage address\n3. Storage owner"));
            while (action1 != 0 && action1 != 1 && action1 != 2 && action1 != 3)
                action1 = Number(prompt("Invalid information field. Please enter again.\n\nChoose information field to edit:\n0. Go back\n1. Storage name\n2. Storage address\n3. Storage owner"));
            if (action1 == 0) break;
            else if (action1 == 1) {
                var storageName = prompt("Enter new name of the storage");
                storage.name = storageName;

            }
            else if (action1 == 2) {
                var storageAddress = prompt("Enter new address of the storage");
                storage.address = storageAddress;

            }
            else {
                var storageOwner = prompt("Enter new owner of the storage");
                storage.owner = storageOwner;

            }

            again1 = prompt("Do you want to edit another information field? (y/n)");
            while (again1 != 'y' && again1 != 'Y' && again1 != 'n' && again1 != 'N' && again1 != '')
                again1 = prompt("Invalid answer. Please enter again (y/n).");
        } while (again1 == 'y' || again1 == 'Y');

    }
    else if (action == 2) {
        do {
            var itemID = Number(prompt("Enter item ID, or enter 0 to skip this action"));
            if (itemID == 0) break;
            var itemName = prompt("Enter item name");
            var itemCategory = prompt("Enter item category");
            var itemPrice = prompt("Enter item price");
            storage.items.push({ id: itemID, name: itemName, category: itemCategory, price: itemPrice });

            again2 = prompt("Do you want to add another item? (y/n)");
            while (again2 != 'y' && again2 != 'Y' && again2 != 'n' && again2 != 'N' && again2 != '')
                again2 = prompt("Invalid answer. Please enter again (y/n).");
        } while (again2 == 'y' || again2 == 'Y');

    }
    else if (action == 3) {
        do {
            action3 = Number(prompt("0. Do nothing\n1. Find items by ID\n2. Find items by name\n3. Find items by category\n4. Find items by price"));
            while (action3 != 0 && action3 != 1 && action3 != 2 && action3 != 3 && action3 != 4)
                action3 = Number(prompt("Invalid type of item information. Please enter again.\n\n0. Do nothing\n1. Find items by ID\n2. Find items by name\n3. Find items by category\n4. Find items by price"));
            if (action3 == 0) break;
            else if (action3 == 1) findItemsByID();
            else if (action3 == 2) findItemsByName();
            else if (action3 == 3) findItemsByCategory();
            else findItemsByPrice();
            again3 = prompt("Do you want to find another item? (y/n)");
            while (again3 != 'y' && again3 != 'Y' && again3 != 'n' && again3 != 'N' && again3 != '')
                again3 = prompt("Invalid answer. Please enter again (y/n).");
        } while (again3 == 'y' || again3 == 'Y');

    }
    else {
        do {
            action4 = Number(prompt("Enter an item ID to remove, or enter 0 to skip this action"));
            if (action4 == 0) break;
            for (var i = 0; i < storage.items.length; i++)
                if (storage.items[i].id == action4) {
                    found = true;
                    storage.items.splice(i, 1);
                }
            if (found) alert("Delete successfully!");
            else alert("Cannot find the item " + action4 + " to delete.");
            again4 = prompt("Do you want to remove another item? (y/n)");
            while (again4 != 'y' && again4 != 'Y' && again4 != 'n' && again4 != 'N' && again4 != '')
                again4 = prompt("Invalid answer. Please enter again (y/n).");
        } while (again4 == 'y' || again4 == 'Y');

    }
    again = prompt("Do you want to perform another action? (y/n)");
    while (again != 'y' && again != 'Y' && again != 'n' && again != 'N' && again != '')
        again = prompt("Invalid answer. Please enter again (y/n).");
} while (again == 'y' || again == 'Y');
function findItemsByID() {
    if (itemsFound.length != 0) itemsFound.splice(0, itemsFound.length);
    var id = Number(prompt("Enter an ID"));
    itemsFound = storage.items.filter(obj => obj.id == id);

    message(t);
}
function findItemsByName() {
    if (itemsFound.length != 0) itemsFound.splice(0, itemsFound.length);
    var name = prompt("Enter a name");
    itemsFound = storage.items.filter(obj => obj.name == name);

    message(t);
}
function findItemsByCategory() {
    if (itemsFound.length != 0) itemsFound.splice(0, itemsFound.length);
    var category = prompt("Enter a category");
    itemsFound = storage.items.filter(obj => obj.category == category);

    message(t);
}
function findItemsByPrice() {
    if (itemsFound.length != 0) itemsFound.splice(0, itemsFound.length);
    var price = Number(prompt("Enter a price"));
    itemsFound = storage.items.filter(obj => obj.price == price);

    message(t);
}
function message(text) {
    text = '';
    text += (itemsFound.length + " item(s) found\n\n");
    for (var i = 0; i < itemsFound.length; i++) {
        if (itemsFound.length > 1) text += ("Item " + (i + 1) + ":\n");
        text += ("+ ID: " + itemsFound[i].id + "\n+ Name: " + itemsFound[i].name + "\n+ Category: " + itemsFound[i].category + "\n+ Price: " + itemsFound[i].price + "\n\n");
    }
    alert(text);
}
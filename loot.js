const prompt = require("prompt-sync")();
const loot = [];
let running = true;

// Collect loot
while (running) {
    let newLoot = prompt("Enter loot name (or done): ");

    if (newLoot.trim().toLowerCase() === "done") {
        if (loot.length > 0) {
            running = false;
        } else {
            console.log("Please enter at least one item.");
        }
    } else if (newLoot.trim().length > 0) {
        let value = Number(prompt("Enter loot value: "));

        if (value > 0 && isFinite(value)) {
            loot.push({ name: newLoot, value: value });
        } else {
            console.log("Please enter a valid positive number.");
        }
    } else {
        console.log("Please enter a loot name.");
    }
}

 // Show loot list
console.log("\nLoot Collected:");

for (let i = 0; i < loot.length; i++) {
    console.log("[" + (i + 1) + "] " + loot[i].name + " - " + loot[i].value);
}

// Calculate total
let totalValue = 0;

for (let i = 0; i < loot.length; i++) {
    totalValue = totalValue + loot[i].value;
}

console.log("\nTotal Loot Value: " + totalValue);

prompt("Press any key to continue..");

// Reflection:
// Each loot item is an object with a name and value.
// The objects are stored in the loot array.
// The first for loop displays each item's index, name, and value.
// The second for loop adds each item's value to totalValue.
// This calculates the total value of all the loot entered.

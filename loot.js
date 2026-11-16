const loot = [];

// Collect loot
document.getElementById("addLoot").addEventListener("click", function() {
    let newLoot = document.getElementById("lootName").value;
    let lootValue = document.getElementById("lootValue").value;
    let message = document.getElementById("message");

    // Check input
    if (newLoot.trim().length === 0) {
        message.textContent = "Please enter a loot name.";
    }
    else if (lootValue.trim() === "" || isNaN(Number(lootValue))) {
        message.textContent = "Please enter a valid number.";
    }
    else if (Number(lootValue) < 0) {
        message.textContent = "Loot value cannot be negative.";
    }
    else {
        let value = Number(lootValue);

        // Add loot to array
        loot.push({ name: newLoot, value: value });
        message.textContent = "";

        // Show loot list
        let lootList = document.getElementById("lootList");
        lootList.innerHTML = "";

        for (let i = 0; i < loot.length; i++) {
            let item = document.createElement("li");
            item.textContent = "[" + (i + 1) + "] " + loot[i].name + " - " + loot[i].value;
            lootList.innerHTML += item.outerHTML;
        }

        // Calculate total
        let totalValue = 0;

        for (let i = 0; i < loot.length; i++) {
            totalValue = totalValue + loot[i].value;
        }

        document.getElementById("totalValue").textContent = totalValue;
    }
});

// Debugging Reflection:
// Complete after testing with a breakpoint.

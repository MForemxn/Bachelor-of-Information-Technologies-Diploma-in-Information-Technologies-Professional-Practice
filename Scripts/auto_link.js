// auto_link.js
module.exports = async (tp) => {
  const { app } = tp;

  // === CONFIG ===
  const ignoreList = [
    "Life",
    "Day",
    "Time",
    "Note",
    "The",
    "And",
    "Or",
    "A",
    "An",
    "Of",
    "In",
    "On",
    "With",
    "To",
    "For",
    "At",
    "By",
    "From",
    "Is",
    "It",
    "Be",
    "Are",
    "As",
    "That",
    "This",
    "These",
    "Those"
    // Add any other words or note titles you want to ignore
  ];
  // ==============

  // 1. Get all note names in the vault
  const files = app.vault.getMarkdownFiles();
  const noteNames = files.map(f => f.basename);

  // 2. Loop through every file
  for (const file of files) {
    let content = await app.vault.read(file);
    let updated = content;

    // 3. Replace plain text occurrences with [[Note Title]]
    for (const name of noteNames) {
      if (ignoreList.includes(name)) continue; // skip ignored words
      if (file.basename === name) continue;   // skip self-links

      // Regex to match whole words not already linked
      const regex = new RegExp(`(?<!\\[\\[)\\b${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b(?!\\]\\])`, "g");
      updated = updated.replace(regex, `[[${name}]]`);
    }

    // 4. Save only if changes were made
    if (updated !== content) {
      await app.vault.modify(file, updated);
      console.log(`✅ Linked terms updated in: ${file.basename}`);
    }
  }

  return "All done!";
};

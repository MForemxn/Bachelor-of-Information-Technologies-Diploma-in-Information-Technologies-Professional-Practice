// auto_link.js
module.exports = async (tp) => {
    const { app } = tp;
  
    // 1. Get all note names in the vault
    const files = app.vault.getMarkdownFiles();
    const noteNames = files.map(f => f.basename);
  
    // 2. Loop through every file
    for (const file of files) {
      let content = await app.vault.read(file);
      let updated = content;
  
      // 3. Replace plain text occurrences with [[Note Title]]
      for (const name of noteNames) {
        // Skip if file is itself
        if (file.basename === name) continue;
  
        // Regex: match whole word "name" not already inside [[ ]]
        const regex = new RegExp(`(?<!\\[\\[)\\b${name}\\b(?!\\]\\])`, "g");
        updated = updated.replace(regex, `[[${name}]]`);
      }
  
      // 4. Save only if changes were made
      if (updated !== content) {
        await app.vault.modify(file, updated);
        console.log(`Linked terms updated in: ${file.basename}`);
      }
    }
  
    return "✅ Auto-linking complete!";
  };
  
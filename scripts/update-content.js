const fs = require('fs');
const path = require('path');

// Function to update tasks.json from individual task files
function updateTasksJson() {
  const tasksDir = path.join(__dirname, '../content/tasks');
  const tasksJsonPath = path.join(__dirname, '../content/tasks.json');

  try {
    // Read all files in tasks directory
    const files = fs.readdirSync(tasksDir);

    // Filter JSON files and read their content
    const tasks = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const filePath = path.join(tasksDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(content);
      })
      // Sort by ID
      .sort((a, b) => a.id - b.id);

    // Write aggregated tasks.json
    fs.writeFileSync(tasksJsonPath, JSON.stringify(tasks, null, 2));
    console.log(`✅ Updated tasks.json with ${tasks.length} tasks`);
  } catch (error) {
    console.error('❌ Error updating tasks.json:', error);
  }
}

// Function to update groups.json from individual group files
function updateGroupsJson() {
  const groupsDir = path.join(__dirname, '../content/groups');
  const groupsJsonPath = path.join(__dirname, '../content/groups.json');

  try {
    // Read all files in groups directory
    const files = fs.readdirSync(groupsDir);

    // Filter JSON files and read their content
    const groups = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const filePath = path.join(groupsDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(content);
      })
      // Sort by ID
      .sort((a, b) => a.id - b.id);

    // Write aggregated groups.json
    fs.writeFileSync(groupsJsonPath, JSON.stringify(groups, null, 2));
    console.log(`✅ Updated groups.json with ${groups.length} groups`);
  } catch (error) {
    console.error('❌ Error updating groups.json:', error);
  }
}

// Function to update both files
function updateAllContent() {
  console.log('🔄 Updating content files...');
  updateTasksJson();
  updateGroupsJson();
  console.log('✅ All content files updated successfully!');
}

// Run the update if this script is called directly
if (require.main === module) {
  updateAllContent();
}

module.exports = {
  updateTasksJson,
  updateGroupsJson,
  updateAllContent
};

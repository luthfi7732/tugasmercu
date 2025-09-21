#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Script to update aggregated JSON files from individual content files
 * This ensures the React app always has the latest CMS content
 */

const CONTENT_DIR = path.join(__dirname, '../content');
const TASKS_DIR = path.join(CONTENT_DIR, 'tasks');
const GROUPS_DIR = path.join(CONTENT_DIR, 'groups');
const TASKS_JSON = path.join(CONTENT_DIR, 'tasks.json');
const GROUPS_JSON = path.join(CONTENT_DIR, 'groups.json');

function readJSONFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return null;
  }
}

function writeJSONFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`✅ Updated ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error.message);
  }
}

function updateTasksJSON() {
  if (!fs.existsSync(TASKS_DIR)) {
    console.log('⚠️  Tasks directory not found, skipping...');
    return;
  }

  const taskFiles = fs.readdirSync(TASKS_DIR)
    .filter(file => file.endsWith('.json'))
    .map(file => path.join(TASKS_DIR, file));

  const tasks = [];

  taskFiles.forEach((file, index) => {
    const taskData = readJSONFile(file);
    if (taskData) {
      // Add ID if not present
      if (!taskData.id) {
        taskData.id = index + 1;
      }
      tasks.push(taskData);
    }
  });

  // Sort tasks by date (newest first)
  tasks.sort((a, b) => new Date(b.date) - new Date(a.date));

  writeJSONFile(TASKS_JSON, tasks);
}

function updateGroupsJSON() {
  if (!fs.existsSync(GROUPS_DIR)) {
    console.log('⚠️  Groups directory not found, skipping...');
    return;
  }

  const groupFiles = fs.readdirSync(GROUPS_DIR)
    .filter(file => file.endsWith('.json'))
    .map(file => path.join(GROUPS_DIR, file));

  const groups = [];

  groupFiles.forEach((file, index) => {
    const groupData = readJSONFile(file);
    if (groupData) {
      // Add ID if not present
      if (!groupData.id) {
        groupData.id = index + 1;
      }
      groups.push(groupData);
    }
  });

  // Sort groups by subject name
  groups.sort((a, b) => a.subject.localeCompare(b.subject));

  writeJSONFile(GROUPS_JSON, groups);
}

function updateAllContent() {
  console.log('🔄 Updating content files...');

  updateTasksJSON();
  updateGroupsJSON();

  console.log('✅ All content files updated successfully!');
}

// Run the update
updateAllContent();

// Export for use in other scripts
export { updateTasksJSON, updateGroupsJSON, updateAllContent };

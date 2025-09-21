import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseMarkdownFiles(contentDir, outputFile) {
  const files = fs.readdirSync(contentDir);
  const items = [];

  files.forEach(file => {
    if (path.extname(file) === '.md') {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      // Add the parsed content to the data
      const item = {
        id: path.basename(file, '.md'),
        ...data,
        content: content.trim()
      };

      items.push(item);
    }
  });

  // Sort by date (newest first)
  items.sort((a, b) => new Date(b.date || b.deadline || b.created_date) - new Date(a.date || a.deadline || a.created_date));

  // Write to JSON file
  const outputPath = path.join(__dirname, '..', 'public', 'content', outputFile);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(items, null, 2));

  console.log(`Generated ${items.length} items in ${outputFile}`);
}

function main() {
  const contentDir = path.join(__dirname, '..', 'content');

  // Generate tasks.json
  const tasksDir = path.join(contentDir, 'tasks');
  if (fs.existsSync(tasksDir)) {
    parseMarkdownFiles(tasksDir, 'tasks.json');
  }

  // Generate groups.json
  const groupsDir = path.join(contentDir, 'groups');
  if (fs.existsSync(groupsDir)) {
    parseMarkdownFiles(groupsDir, 'groups.json');
  }

  console.log('Content generation completed!');
}

main();

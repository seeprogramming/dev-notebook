import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const conceptsDirectory = path.join(process.cwd(), 'src/content/concepts');

export function getConceptMetadata() {
    const files = fs.readdirSync(conceptsDirectory);

    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => {
            const fullPath = path.join(conceptsDirectory, file);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                slug: file.replace('.mdx', ''),
                title: data.title,
                date: data.date,
                tags: data.tags,
            };
        });
}

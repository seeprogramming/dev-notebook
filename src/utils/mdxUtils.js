import { glob } from 'glob';
import path from 'path';

export const getAllConcepts = async () => {
    const conceptFiles = await glob('./src/content/concepts/*.mdx');
    return conceptFiles.map((file) => ({
        slug: path.basename(file, '.mdx'),
        title: path.basename(file, '.mdx').replace(/-/g, ' '),
        path: file,
    }));
};

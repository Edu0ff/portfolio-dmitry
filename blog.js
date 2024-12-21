const blogDirectory = '/blog/';

// List of blog post files, ADD POSTS HERE. Can be automated later.
const blogPosts = ['post1.md'];

async function fetchPost(filename) {
    const response = await fetch(blogDirectory + filename);
    const text = await response.text();

    const metadata = parseMetadata(text);
    const content = text.replace(metadata.raw, '');

    return {
        metadata,
        content
    };
}

function parseMetadata(markdown) {
    const metadataRegex = /---\n([\s\S]+?)\n---/;
    const match = markdown.match(metadataRegex);

    if (match) {
        const rawMetadata = match[1];
        const lines = rawMetadata.split('\n');
        const metadata = {};

        lines.forEach(line => {
            const [key, value] = line.split(':').map(str => str.trim());
            metadata[key] = value;
        });

        return {
            raw: match[0],
            ...metadata
        };
    }

    return {};
}

async function displayBlogPosts() {
    const posts = await Promise.all(blogPosts.map(post => fetchPost(post)));

    posts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));

    const blogSection = document.querySelector('#blog');
    posts.forEach(post => {

        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        
        const postDate = new Date(post.metadata.date);
        console.log(post.metadata.date)
        const formattedDate = postDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        console.log(formattedDate);

        postElement.innerHTML = `
            <h2>${post.metadata.title}</h2>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <div>${marked.parse(post.content)}</div>
        `;
    
        blogSection.appendChild(postElement);
    });
}

window.onload = displayBlogPosts;

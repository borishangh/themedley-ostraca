module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css')
    eleventyConfig.addPassthroughCopy('./src/images')

    eleventyConfig.addFilter("filterPostsByTag", function(posts, tag) {return posts.filter(post => post.data.tags.includes(tag));});

    eleventyConfig.addFilter("sortContentsByIssueNo", function (contents) {
        return contents.sort((a, b) => a.data.issueNo - b.data);
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}
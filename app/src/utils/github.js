export async function getLastCommitDate(repo, path = "") {
    const [owner, repoName] = repo.split("/");

    const url = new URL(`https://api.github.com/repos/${owner}/${repoName}/commits`);
    url.searchParams.set("per_page", "1");

    if (path) {
        url.searchParams.set("path", path);
    }

    const response = await fetch(url.toString(), {
        headers: {
            Accept: "application/vnd.github+json",
        },
    });

    if (!response.ok) {
        throw new Error(`GitHub request failed: ${response.status}`);
    }

    const data = await response.json();
    return data[0]?.commit?.author?.date ?? null;
}

export function formatCommitDate(dateString) {
    if (!dateString) return "Unavailable";

    return new Date(dateString).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

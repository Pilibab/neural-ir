export const getManhwaDetail = async (source: string, sourceId: string) => {
    const res = await fetch(`/api/manhwa/${source}/${sourceId}`);
    return res.json();
}

export const getSimilarManhwa = async (synopsis: string) => {
    const res = await fetch("/api/search", {
        method:'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ synopsis }) // Pass it as an object
    })
    return res.json()
} 
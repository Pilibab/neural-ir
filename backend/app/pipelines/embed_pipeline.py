# Handles the process of taking raw or cleaned text data (like manhwa summaries) 
# and generating embeddings (vector representations).

from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')

sentences = [
"""
There is no bigger scum of the earth than Lloyd Frontera. He is the eldest son, 
yet all he does is drink and intimidate others, depleting what little is left of 
his family's wealth. The Fronteras' knight, Javier Asrahan, is destined to become 
a renowned swordmaster, and Lloyd's family will face pitiful deaths as their entire 
land falls to ruin under insurmountable debt.Though at some point Kim Suho was an 
average civil engineering student in Korea, he suddenly wakes up on a dirt road as 
none other than Lloyd, an ungrateful hooligan from the beginning of a book following 
Javier, the protagonist. While a sassy status window offers some clarity about his new 
identity, Suho is rather worried about his imminent downfall.To avoid becoming a beggarâ€”and 
ultimately lead a sweet and comfortable lifeâ€”Suho decides to fix Lloyd's scumbag image. 
With his engineering expertise and magical construction skills boost, Suho introduces 
modern innovations and city developments to this medieval-like world, drastically 
improving the people's quality of lifeâ€”all for a nice sum of money.

"""
]

# 2. Encode the text
embeddings = model.encode(sentences)

# Output the shape (3 sentences, each with 384 dimensions)
print(embeddings.shape)
print(embeddings[0][:5]) # Show first 5 values of the first embeddingclea

def embed_pipeline():
    pass
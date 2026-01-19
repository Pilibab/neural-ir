import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../')))
from db.mongo import  manhwa_vector_collection

from services.search_service import search_manhwa
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")

def test_search(query_vector, search_on):
    return search_manhwa(query_vector, search_on)

def debug_vector_search():
    # 1. Count docs
    total = manhwa_vector_collection.count_documents({})
    print(f"DEBUG: Total documents in collection: {total}")

    # 2. Check for the specific source
    mal_count = manhwa_vector_collection.count_documents({"source": "MAL"})
    print(f"DEBUG: Documents with source 'MAL': {mal_count}")

    # 3. Check Index Status
    try:
        indexes = list(manhwa_vector_collection.list_search_indexes())
        print("DEBUG: Active Search Indexes found:")
        for idx in indexes:
            print(f" - Name: {idx['name']} | Status: {idx.get('status')}")
    except Exception as e:
        print(f"DEBUG: Could not list indexes: {e}")

if __name__ == "__main__":

    debug_vector_search()
    query = """
    An ordinary student specializing in civil infrastructure is mysteriously transported into the body of a 
    loathed, debt-ridden nobleman within a fantasy novel. Realizing the family is headed for a violent 
    end due to financial ruin, the protagonist utilizes their modern technical knowledge and magical building 
    abilities to revolutionize the medieval setting. By constructing advanced public works and urban projects, 
    they aim to secure a wealthy future and escape a preordained tragic fate.
    """

    exact = """
    There is no bigger scum of the earth than Lloyd Frontera. He is the eldest son, yet all he does is drink and intimidate others, depleting what little is left of his family's wealth. The Fronteras' knight, Javier Asrahan, is destined to become a renowned swordmaster, and Lloyd's family will face pitiful deaths as their entire land falls to ruin under insurmountable debt.
    Though at some point Kim Suho was an average civil engineering student in Korea, he suddenly wakes up on a dirt road as none other than Lloyd, an ungrateful hooligan from the beginning of a book following Javier, the protagonist. While a sassy status window offers some clarity about his new identity, Suho is rather worried about his imminent downfall.
    To avoid becoming a beggar—and ultimately lead a sweet and comfortable life—Suho decides to fix Lloyd's scumbag image. With his engineering expertise and magical construction skills boost, Suho introduces modern innovations and city developments to this medieval-like world, drastically improving the people's quality of life—all for a nice sum of money.
    """
    search_on = "MAL"

    embedding = model.encode(exact).tolist()
    if embedding:
        print("embedded ")

    results = test_search(embedding, search_on)

    print("Search results:")
    print(len(results), type(results))

    print("top 10 matches")

    i = 1
    for result in results:

        print(i, result['title'],  result['score'])
        i += 1
    
    print("Document shape:")
    print(len(results[0]), type(results[0]))

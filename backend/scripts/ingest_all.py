# calls the scrapper -> ... -> put the manhwa_data to db
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../')))

from app.pipelines.ingest_pipeline import ingest
from scraper.mal_scraper import get_manhwa_list

def run_ingest():
    # get_manhwa_list -> [{},{},..{}] where {} are manhwa data so each {} are individual manhwa
    for raw_manhwa  in get_manhwa_list():
        ingest(raw_manhwa )
        

if __name__ == "__main__": 
    pass
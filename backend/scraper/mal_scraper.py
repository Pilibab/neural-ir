import requests
from bs4 import BeautifulSoup
import time
from datetime import datetime
import os


BASE_URL = "https://myanimelist.net"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def get_manhwa_list(route: str = "/topmanga.php?type=manhwa&", result_lazy_limit: int = 50):
    result = []
    total_manhwa = 0
    page = 0

    while True:
        url = f"{BASE_URL}{route}limit={page}"
        response = requests.get(url, headers=HEADERS)

        if response.status_code != 200:
            print(f"\n⚠️ Error: Status code {response.status_code}")
            break

        # get the table that contains the manhwa 
        soup = BeautifulSoup(response.text, "html.parser")
        entries = soup.select("tr.ranking-list")

        if not entries:
            print(f"\ No more entries found. scrapped total of: {total_manhwa}")
            break


        # 50 entries i think 
        for entry in entries:

            # from <h3><a>{title}<a><h3>
            # we are getting the link from a which redirects to page with manhwa details 
            detail_tag = entry.select_one("h3.manga_h3 a")

            details = scrape_detail(detail_tag)

            if details:
                pass

            # Longer delay to be respectful to the server
            time.sleep(2)

        if len(result) <= result_lazy_limit:
            yield result;

            # does this clear it?
            result = []

def scrape_detail(url):
    # !rank: int,
    # !title: str,
    # synopsis: str,
    # !cover_image_url: str,
    # rating: int,
    # chapters: str | int,
    # published_date: str,
    # tags: str,
    # link: str,

    # ! =============================================================
    # ! TITLE 
    # ! =============================================================

    # Find the first span with itemprop="name"
    # e.g. <span itemprop="name">The Greatest Estate Developer</span>
    title = url.find("span", attrs={"itemprop": "name"})


    # traverse the left div that contains the data to narrow search
    left_div = url.select_one("div.leftside")

    # ! =============================================================
    # ! IMG COVER 
    # ! =============================================================

    # find image with 
    # <img class=" lazyloaded" data-src="https://cdn.myanimelist.net/images/manga/1/290131.jpg" 
    # alt="The Greatest Estate Developer" itemprop="image" 
    # src="https://cdn.myanimelist.net/images/manga/1/290131.jpg">
    img_tag = left_div.select_one('img[itemprop="image"]')
    img_link = ""

    if img_tag:
        img_link = img_tag.get('data-src') or img_tag.get('src')
    else: 
        # if doesnt exist traverse the pics then select atleast one working image 
        link_tag = left_div.find("div", style="text-align: center;").find("a")
        # TODO generate a fall back 


    # <div class="rightside js-scrollfix-bottom-rel"><div style="width:728px; margin:0 auto"></div>
    right_div = url.select_one("div.rightside")

    # ! =============================================================
    # ! RANK 
    # ! =============================================================
    rank = right_div.select_one('span.numbers.ranked strong')   # return #n where n is number so we strip "#"
    rank = int(rank.replace('#', ''))                           # after removing convert to int 

    # ! =============================================================
    # ! SYNOPSIS
    # ! =============================================================
    synopsis_tag = right_div.select_one('span[itemprop="description"]')
    synopsis_text = synopsis_tag.get_text(separator="\n", strip=True)

    return rank, title, img_link

